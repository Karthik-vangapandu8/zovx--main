import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

// GET /api/articles/[id] - Fetch single article
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params

    const article = await prisma.article.findUnique({
      where: { id },
      include: {
        author: {
          select: { id: true, name: true, avatar: true, bio: true }
        },
        category: {
          select: { id: true, name: true, slug: true, color: true }
        },
        company: {
          select: { id: true, name: true, industry: true, logo: true, size: true }
        },
        tags: {
          select: { id: true, name: true, slug: true, color: true }
        },
        tools: {
          select: { 
            id: true, 
            name: true, 
            slug: true, 
            logo: true, 
            affiliateUrl: true,
            pricing: true,
            rating: true 
          }
        }
      }
    })

    if (!article) {
      return NextResponse.json({ error: 'Article not found' }, { status: 404 })
    }

    // Increment view count
    await prisma.article.update({
      where: { id },
      data: { views: { increment: 1 } }
    })

    return NextResponse.json({ article })
  } catch (error) {
    console.error('Error fetching article:', error)
    return NextResponse.json({ error: 'Failed to fetch article' }, { status: 500 })
  }
}

// PUT /api/articles/[id] - Update article
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params
    const data = await request.json()
    
    const {
      title,
      excerpt,
      content,
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
      metaTitle,
      metaDescription,
      toolIds = [],
      tagIds = []
    } = data

    // Update slug if title changed
    const slug = title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '')

    // Recalculate read time
    const wordCount = content.split(' ').length
    const readTime = Math.ceil(wordCount / 200)

    const article = await prisma.article.update({
      where: { id },
      data: {
        title,
        slug,
        excerpt,
        content,
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
        publishedAt: status === 'PUBLISHED' && !data.publishedAt ? new Date() : undefined,
        tools: {
          set: toolIds.map((toolId: string) => ({ id: toolId }))
        },
        tags: {
          set: tagIds.map((tagId: string) => ({ id: tagId }))
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

    return NextResponse.json({ article })
  } catch (error) {
    console.error('Error updating article:', error)
    return NextResponse.json({ error: 'Failed to update article' }, { status: 500 })
  }
}

// DELETE /api/articles/[id] - Delete article
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params

    await prisma.article.delete({
      where: { id }
    })

    return NextResponse.json({ message: 'Article deleted successfully' })
  } catch (error) {
    console.error('Error deleting article:', error)
    return NextResponse.json({ error: 'Failed to delete article' }, { status: 500 })
  }
} 