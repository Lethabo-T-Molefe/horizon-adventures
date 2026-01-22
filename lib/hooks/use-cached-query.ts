"use client"

import { useQuery, UseQueryOptions } from "@tanstack/react-query"
import { CacheManager } from "@/lib/cache"

interface CachedQueryOptions<T> extends Omit<UseQueryOptions<T>, 'queryFn'> {
  queryKey: string[]
  queryFn: () => Promise<T>
  cacheKey?: string
  cacheTTL?: number
  cacheTags?: string[]
}

/**
 * Custom hook for React Query with Redis caching support
 * Falls back to React Query's built-in cache when Redis is unavailable
 */
export function useCachedQuery<T>({
  queryKey,
  queryFn,
  cacheKey,
  cacheTTL = 3600,
  cacheTags,
  ...options
}: CachedQueryOptions<T>) {
  const finalCacheKey = cacheKey || `query:${queryKey.join(':')}`

  const enhancedQueryFn = async () => {
    // Try to get from Redis cache first (server-side only)
    if (typeof window === 'undefined') {
      const cached = await CacheManager.get<T>(finalCacheKey)
      if (cached) {
        return cached
      }
    }

    // Fetch fresh data
    const data = await queryFn()

    // Store in Redis cache (server-side only)
    if (typeof window === 'undefined') {
      await CacheManager.set(finalCacheKey, data, {
        ttl: cacheTTL,
        tags: cacheTags,
      })
    }

    return data
  }

  return useQuery({
    ...options,
    queryKey,
    queryFn: enhancedQueryFn,
    staleTime: cacheTTL * 1000, // Convert to milliseconds
    gcTime: cacheTTL * 5 * 1000, // 5x TTL for garbage collection
  })
}
