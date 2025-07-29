# ZOVX.PRO - AI Success Stories & Content Management Platform

A modern, media-centric platform for showcasing AI implementation success stories with a powerful content management system.

## 🚀 Features

### Frontend
- **Modern Media Publication Design** - Dark theme with interactive elements
- **Hero Story Carousel** - Auto-sliding featured stories like Economic Times
- **Interactive Story Cards** - Hover effects, trending badges, engagement metrics
- **Advanced Filtering** - Search, category filters, and sorting options
- **ROI Calculator** - Interactive tool for lead generation
- **Mobile-First Design** - Responsive across all devices

### Backend & CMS
- **Complete Content Management System** - Write, edit, and publish articles
- **Database Schema** - PostgreSQL with Prisma ORM
- **API Routes** - RESTful endpoints for all content operations
- **Admin Dashboard** - Professional interface for content management
- **Dynamic Content** - All stories, tools, and content fetched from database

## 🛠️ Tech Stack

- **Frontend**: Next.js 15, TypeScript, Tailwind CSS 4
- **Backend**: Next.js API Routes, Prisma ORM
- **Database**: PostgreSQL (local or hosted)
- **Authentication**: NextAuth.js (for admin access)
- **Icons**: Lucide React
- **Styling**: Tailwind CSS with custom components

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Karthik-vangapandu8/zovx--main.git
   cd zovx--main/zovx
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   # Create .env file
   DATABASE_URL="postgresql://username:password@localhost:5432/zovx_cms?schema=public"
   NEXTAUTH_URL="http://localhost:3000"
   NEXTAUTH_SECRET="your-secret-key-here"
   ADMIN_EMAIL="admin@zovx.pro"
   ADMIN_PASSWORD="admin123"
   ```

4. **Set up the database**
   ```bash
   # Generate Prisma client
   npx prisma generate
   
   # Run database migrations
   npx prisma migrate dev --name init
   
   # (Optional) Seed with sample data
   npx prisma db seed
   ```

5. **Start the development server**
   ```bash
   npm run dev
   ```

## 📊 Database Schema

### Core Models
- **Articles** - AI success stories with full metadata
- **Categories** - Industry classifications (Manufacturing, Healthcare, etc.)
- **Tools** - AI tools with affiliate links and ratings
- **Companies** - Client companies featured in stories
- **Users** - Admin users and authors
- **Tags** - Flexible tagging system
- **Analytics** - Track views, clicks, and engagement

### Article Fields
- Basic info (title, excerpt, content, status)
- Business metrics (savings, ROI, implementation time)
- Challenge/Solution/Results structure
- SEO metadata (meta title, description)
- Engagement metrics (views, read time)
- Relationships (author, category, company, tools, tags)

## 🎯 Content Management

### Admin Dashboard (`/admin`)
- **Article Management** - Create, edit, delete, and publish articles
- **Real-time Stats** - Views, articles count, performance metrics
- **Search & Filter** - Find articles by title, status, category
- **Bulk Operations** - Toggle status, feature articles
- **Content Preview** - View articles before publishing

### Writing Articles
1. Navigate to `/admin/articles/new`
2. Fill in article details (title, excerpt, content)
3. Add business metrics (savings, ROI, timeframe)
4. Structure content (challenge, solution, results)
5. Associate with tools and companies
6. Publish or save as draft

### API Endpoints
- `GET /api/articles` - Fetch articles with filtering
- `POST /api/articles` - Create new article
- `GET /api/articles/[id]` - Get single article
- `PUT /api/articles/[id]` - Update article
- `DELETE /api/articles/[id]` - Delete article

## 🎨 Frontend Integration

### Dynamic Content Loading
The frontend automatically fetches content from the database:

```typescript
// Fetch articles for homepage
const response = await fetch('/api/articles?featured=true&limit=3');
const { articles } = await response.json();

// Fetch by category
const response = await fetch('/api/articles?category=manufacturing');
```

### Story Display
Stories are dynamically rendered with:
- Auto-generated slugs for SEO-friendly URLs
- Real-time view counting
- Interactive elements (save, share, convert)
- Related tools and affiliate links

## 💰 Monetization Integration

### Affiliate Revenue
- Tool links with tracking
- Commission tracking per click
- Revenue attribution to articles

### Lead Generation
- ROI calculator with email capture
- Newsletter signups throughout site
- Consultation booking integration

### Content Multiplication
- Each article becomes multiple social media posts
- Email sequences from story content
- Tool reviews and comparisons

## 🚀 Deployment

### Database Setup
1. **Local Development**: PostgreSQL on localhost
2. **Production**: Use Railway, Neon, or Supabase PostgreSQL

### Hosting Options
1. **Vercel** (Recommended for Next.js)
2. **Railway** (Full-stack with database)
3. **Netlify** with external database

### Environment Setup
```bash
# Production environment variables
DATABASE_URL="your-production-database-url"
NEXTAUTH_URL="https://zovx.pro"
NEXTAUTH_SECRET="secure-production-secret"
```

## 📈 Content Strategy

### Article Structure
1. **Compelling Title** - Focus on specific results
2. **Business Context** - Company size, industry, challenge
3. **Implementation Details** - Tools used, timeline, process
4. **Measurable Results** - Before/after metrics, ROI
5. **Call to Action** - Calculator, consultation, tools

### SEO Optimization
- Auto-generated meta titles and descriptions
- Slug generation from titles
- Internal linking between related content
- Schema markup for rich snippets

## 🔧 Customization

### Adding New Content Types
1. Update Prisma schema in `prisma/schema.prisma`
2. Run migration: `npx prisma migrate dev`
3. Create API routes in `src/app/api/`
4. Add admin interface components

### Styling Customization
- Modify `tailwind.config.js` for theme changes
- Update color schemes in components
- Add custom CSS in `globals.css`

## 📊 Analytics & Tracking

### Built-in Analytics
- Article view counts
- Tool click tracking
- Email signup conversions
- ROI calculator usage

### External Integration
- Google Analytics for detailed insights
- Social media tracking
- Email marketing metrics

## 🤝 Contributing

1. Fork the repository
2. Create feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

For support and questions:
- Create an issue on GitHub
- Email: admin@zovx.pro
- Documentation: [docs.zovx.pro](https://docs.zovx.pro)

---

**Built with ❤️ by the ZOVX Team**
