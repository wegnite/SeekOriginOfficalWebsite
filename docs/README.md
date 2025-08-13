# Seek Origin Official Website Documentation

## Company Information

**Company Name (English):** Hangzhou Seek Origin Intelligent Technology Co., Ltd.  
**Company Name (Chinese):** 杭州寻因智能科技有限公司  
**Domain:** www.seekorigin.ai  
**GitHub Repository:** git@github.com:wegnite/SeekOriginOfficalWebsite.git

## Project Overview

This is the official website for Seek Origin, a globally-minded AI innovator that creates powerful, intuitive AI tools to democratize intelligence and empower individuals and organizations worldwide.

## Key Features

### 1. Multi-language Support
- English (Primary) - `/en`
- Chinese - `/zh`

### 2. Brand Assets
- **Logo:** `/public/seekorigin-logo.svg`
- **Icon:** `/public/seekorigin-icon.svg`
- **Colors:** Green gradient (#10b981 to #047857) - avoiding indigo/blue as per guidelines

### 3. Main Sections
- **Hero Section:** Building AI Tools that Empower the World
- **Solutions:** AI tools for creativity, productivity, and learning
- **Features:** Cutting-edge technology and global accessibility
- **About:** Company vision and approach
- **Contact:** Get in touch and start free trial

## Technical Stack
- Next.js 15.2 with App Router
- TypeScript
- Tailwind CSS
- shadcn/ui components
- NextAuth.js for authentication
- Supabase for database
- Stripe for payments

## Development

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Build for production
pnpm build

# Run production build
pnpm start
```

## Deployment

The website can be deployed to:
- Vercel (recommended for Next.js)
- Cloudflare Workers
- Docker containers

## Content Management

Landing page content is managed through JSON files:
- English: `/i18n/pages/landing/en.json`
- Chinese: `/i18n/pages/landing/zh.json`

## Company Mission

To create powerful, intuitive, and universally valuable AI tools that democratize intelligence, foster creativity, boost productivity, and empower individuals and organizations worldwide to achieve more.

## Contact

- Email: contact@seekorigin.ai
- Website: www.seekorigin.ai