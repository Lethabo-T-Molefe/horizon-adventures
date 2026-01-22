import Redis from 'ioredis'

// Redis client configuration
let redisClient: Redis | null = null

export function getRedisClient(): Redis | null {
  if (typeof window !== 'undefined') {
    // Client-side: Redis not available
    return null
  }

  if (redisClient) {
    return redisClient
  }

  // Initialize Redis connection
  const redisUrl = process.env.REDIS_URL || process.env.REDIS_HOST
  if (!redisUrl) {
    console.warn('Redis not configured. Caching will be disabled.')
    return null
  }

  try {
    redisClient = new Redis(redisUrl, {
      maxRetriesPerRequest: 3,
      retryStrategy: (times) => {
        const delay = Math.min(times * 50, 2000)
        return delay
      },
      enableOfflineQueue: false,
    })

    redisClient.on('error', (err) => {
      console.error('Redis Client Error:', err)
    })

    return redisClient
  } catch (error) {
    console.error('Failed to initialize Redis:', error)
    return null
  }
}

// Cache interface
interface CacheOptions {
  ttl?: number // Time to live in seconds
  tags?: string[] // Cache tags for invalidation
}

// Cache utility functions
export class CacheManager {
  private static client = getRedisClient()

  static async get<T>(key: string): Promise<T | null> {
    if (!this.client) return null

    try {
      const data = await this.client.get(key)
      if (!data) return null
      return JSON.parse(data) as T
    } catch (error) {
      console.error(`Cache get error for key ${key}:`, error)
      return null
    }
  }

  static async set<T>(key: string, value: T, options?: CacheOptions): Promise<boolean> {
    if (!this.client) return false

    try {
      const serialized = JSON.stringify(value)
      const ttl = options?.ttl || 3600 // Default 1 hour

      if (options?.tags && options.tags.length > 0) {
        // Store tags for invalidation
        await this.client.sadd(`tags:${key}`, ...options.tags)
      }

      await this.client.setex(key, ttl, serialized)
      return true
    } catch (error) {
      console.error(`Cache set error for key ${key}:`, error)
      return false
    }
  }

  static async delete(key: string): Promise<boolean> {
    if (!this.client) return false

    try {
      await this.client.del(key)
      // Also remove tags
      await this.client.del(`tags:${key}`)
      return true
    } catch (error) {
      console.error(`Cache delete error for key ${key}:`, error)
      return false
    }
  }

  static async invalidateByTag(tag: string): Promise<boolean> {
    if (!this.client) return false

    try {
      const pattern = `tags:*`
      const keys = await this.client.keys(pattern)
      
      for (const tagKey of keys) {
        const isMember = await this.client.sismember(tagKey, tag)
        if (isMember) {
          const cacheKey = tagKey.replace('tags:', '')
          await this.delete(cacheKey)
        }
      }
      return true
    } catch (error) {
      console.error(`Cache invalidation error for tag ${tag}:`, error)
      return false
    }
  }

  static async clear(): Promise<boolean> {
    if (!this.client) return false

    try {
      await this.client.flushdb()
      return true
    } catch (error) {
      console.error('Cache clear error:', error)
      return false
    }
  }
}

// In-memory fallback cache for when Redis is not available
class MemoryCache {
  private cache = new Map<string, { value: any; expires: number }>()

  get<T>(key: string): T | null {
    const item = this.cache.get(key)
    if (!item) return null

    if (Date.now() > item.expires) {
      this.cache.delete(key)
      return null
    }

    return item.value as T
  }

  set<T>(key: string, value: T, ttl: number = 3600): void {
    this.cache.set(key, {
      value,
      expires: Date.now() + ttl * 1000,
    })
  }

  delete(key: string): void {
    this.cache.delete(key)
  }

  clear(): void {
    this.cache.clear()
  }
}

export const memoryCache = new MemoryCache()
