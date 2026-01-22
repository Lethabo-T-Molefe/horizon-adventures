# Scalability & Performance Guide

This document outlines the scalability features, caching strategies, and performance optimizations implemented in the Horizon Adventures website.

## Table of Contents

1. [Redis Caching](#redis-caching)
2. [State Management](#state-management)
3. [Progressive Enhancement](#progressive-enhancement)
4. [GDPR/CCPA Compliance](#gdprccpa-compliance)
5. [Performance Optimizations](#performance-optimizations)

## Redis Caching

### Setup

1. **Install Redis** (choose one):
   - **Local Development**: Install Redis locally or use Docker
   - **Production**: Use a managed Redis service (Redis Cloud, Upstash, etc.)

2. **Environment Variables**:
   Add to your `.env.local` file:
   ```env
   REDIS_URL=redis://localhost:6379
   # OR for production
   REDIS_URL=rediss://username:password@host:port
   ```

3. **Usage**:
   ```typescript
   import { CacheManager } from '@/lib/cache'
   
   // Get from cache
   const data = await CacheManager.get('my-key')
   
   // Set cache with TTL
   await CacheManager.set('my-key', data, { ttl: 3600 })
   
   // Invalidate by tag
   await CacheManager.invalidateByTag('tours')
   ```

### Cache Strategy

- **API Routes**: Cache responses for 1 hour (configurable)
- **Static Data**: Cache for 24 hours
- **User-specific Data**: Cache for 15 minutes
- **Tag-based Invalidation**: Use tags for related data invalidation

## State Management

### Zustand Store

The application uses Zustand for client-side state management:

```typescript
import { useAppStore } from '@/lib/store'

// Access state
const { preferences, cookieConsent } = useAppStore()

// Update state
const { setTheme, setCookieConsent } = useAppStore()
setTheme('dark')
```

### Store Structure

- **User Preferences**: Theme, language, currency
- **Cookie Consent**: GDPR/CCPA compliance
- **UI State**: Menu open/closed, loading states
- **Form Data**: Temporary form state

## Progressive Enhancement

The website is designed to work without JavaScript:

1. **No-JS Classes**: Elements requiring JS are hidden with `.no-js .js-only`
2. **Form Fallbacks**: Forms work with native HTML submission
3. **Image Loading**: Progressive image loading with fallbacks
4. **Link Prefetching**: Automatic route prefetching for better performance

## GDPR/CCPA Compliance

### Cookie Consent

- **Automatic Banner**: Shows on first visit
- **Granular Controls**: Users can customize cookie preferences
- **Persistent Storage**: Consent stored in cookies and localStorage
- **Privacy Policy**: Full privacy policy page available

### Data Rights

Users can exercise their rights:
- Right to access
- Right to rectification
- Right to erasure
- Right to data portability
- Right to object
- Right to opt-out (CCPA)

Contact: Horizonadventuresza@gmail.com

## Performance Optimizations

### React Query

- **Automatic Caching**: Query results cached automatically
- **Background Refetching**: Stale data refetched in background
- **Request Deduplication**: Multiple requests for same data are deduplicated

### Next.js Optimizations

- **Image Optimization**: Automatic image optimization with Next.js Image
- **Code Splitting**: Automatic code splitting per route
- **Static Generation**: ISR (Incremental Static Regeneration) where applicable
- **API Route Caching**: Server-side caching for API routes

### Scalability Features

1. **Horizontal Scaling**: Stateless design allows multiple instances
2. **CDN Ready**: Static assets optimized for CDN delivery
3. **Database Optimization**: Efficient queries with proper indexing
4. **Caching Layers**: Multiple caching layers (Redis, React Query, Next.js)

## Environment Setup

### Required Environment Variables

```env
# Redis (optional, falls back to memory cache)
REDIS_URL=redis://localhost:6379

# Analytics (optional)
NEXT_PUBLIC_ANALYTICS_ID=your-analytics-id
```

### Production Checklist

- [ ] Redis instance configured
- [ ] Environment variables set
- [ ] Cookie consent tested
- [ ] Privacy policy reviewed
- [ ] Performance monitoring enabled
- [ ] Error tracking configured

## Monitoring & Analytics

- **Vercel Analytics**: Built-in performance monitoring
- **Error Tracking**: Error boundaries for graceful error handling
- **Cache Monitoring**: Redis cache hit/miss rates
- **Performance Metrics**: Core Web Vitals tracking

## Support

For questions about scalability or performance:
- Email: Horizonadventuresza@gmail.com
- Documentation: See code comments in `/lib` directory
