import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

// GET /api/articles - Fetch all articles with filtering
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const status = searchParams.get('status') || 'PUBLISHED'
    const category = searchParams.get('category')
    const featured = searchParams.get('featured')
    const trending = searchParams.get('trending')
    const limit = parseInt(searchParams.get('limit') || '10')
    const offset = parseInt(searchParams.get('offset') || '0')

    const where: any = {}
    
    if (status) where.status = status
    if (category) where.category = { slug: category }
    if (featured === 'true') where.featured = true
    if (trending === 'true') where.trending = true

    const articles = await prisma.article.findMany({
      where,
      include: {
        author: {
          select: { id: true, name: true, avatar: true }
        },
        category: {
          select: { id: true, name: true, slug: true, color: true }
        },
        company: {
          select: { id: true, name: true, industry: true, logo: true }
        },
        tags: {
          select: { id: true, name: true, slug: true, color: true }
        },
        tools: {
          select: { id: true, name: true, slug: true, logo: true, affiliateUrl: true }
        }
      },
      orderBy: [
        { featured: 'desc' },
        { trending: 'desc' },
        { publishedAt: 'desc' }
      ],
      take: limit,
      skip: offset
    })

    // Increment view count for each article (in a real app, you'd do this more selectively)
    // await prisma.article.updateMany({
    //   where: { id: { in: articles.map(a => a.id) } },
    //   data: { views: { increment: 1 } }
    // })

    return NextResponse.json({ articles, count: articles.length })
  } catch (error) {
    console.error('Error fetching articles:', error)
    return NextResponse.json({ error: 'Failed to fetch articles' }, { status: 500 })
  }
}

// POST /api/articles - Create new article
export async function POST(request: NextRequest) {
  try {
    const data = await request.json()
    
    const {
      title,
      excerpt,
      content,
      authorId,
      categoryId,
      companyId,
      featuredImage,
      challenge,
      solution,
      results,
      savings,
      timeframe,
      roi,
      implementationTime,
      difficulty = 'MEDIUM',
      featured = false,
      trending = false,
      status = 'DRAFT',
      metaTitle,
      metaDescription,
      toolIds = [],
      tagIds = []
    } = data

    // Generate slug from title
    const slug = title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '')

    // Calculate read time (rough estimate: 200 words per minute)
    const wordCount = content.split(' ').length
    const readTime = Math.ceil(wordCount / 200)

    const article = await prisma.article.create({
      data: {
        title,
        slug,
        excerpt,
        content,
        authorId,
        categoryId,
        companyId,
        featuredImage,
        challenge,
        solution,
        results,
        savings,
        timeframe,
        roi,
        implementationTime,
        difficulty,
        featured,
        trending,
        status,
        metaTitle: metaTitle || title,
        metaDescription: metaDescription || excerpt,
        readTime,
        publishedAt: status === 'PUBLISHED' ? new Date() : null,
        tools: {
          connect: toolIds.map((id: string) => ({ id }))
        },
        tags: {
          connect: tagIds.map((id: string) => ({ id }))
        }
      },
      include: {
        author: true,
        category: true,
        company: true,
        tools: true,
        tags: true
      }
    })

    return NextResponse.json({ article }, { status: 201 })
  } catch (error) {
    console.error('Error creating article:', error)
    return NextResponse.json({ error: 'Failed to create article' }, { status: 500 })
  }
} 