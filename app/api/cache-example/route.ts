import { NextRequest, NextResponse } from 'next/server'
import { CacheManager } from '@/lib/cache'

// Example API route with Redis caching
export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const key = searchParams.get('key') || 'default'

  // Try to get from cache first
  const cacheKey = `api:cache-example:${key}`
  const cached = await CacheManager.get(cacheKey)

  if (cached) {
    return NextResponse.json({
      data: cached,
      cached: true,
      timestamp: new Date().toISOString(),
    })
  }

  // Simulate data fetching (replace with actual data source)
  const data = {
    message: 'This is cached data',
    key,
    generatedAt: new Date().toISOString(),
  }

  // Store in cache with 1 hour TTL
  await CacheManager.set(cacheKey, data, {
    ttl: 3600,
    tags: ['api', 'example'],
  })

  return NextResponse.json({
    data,
    cached: false,
    timestamp: new Date().toISOString(),
  })
}
