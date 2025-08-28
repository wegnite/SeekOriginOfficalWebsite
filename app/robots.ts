import { MetadataRoute } from 'next'

/**
 * 生成 robots.txt
 * Next.js 13+ 的 robots 文件配置
 */
export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_WEB_URL || 'https://seekorigin.ai';

  return {
    rules: [
      {
        userAgent: '*',
        allow: [
          '/',
          '/en/',
          '/zh/',
          '/products',
          '/showcase', 
          '/pricing',
          '/docs',
          '/blog',
          '/posts',
          '/careers',
          '/privacy-policy',
          '/terms-of-service',
        ],
        disallow: [
          '/api/',
          '/admin/',
          '/auth/',
          '/_next/',
          '/*.json$',
          '/console/',
          '/my-*',
          '/api-keys/',
          '/pay-success/',
          '/i/', // 邀请链接，避免被索引
        ],
      },
      {
        userAgent: 'GPTBot',
        allow: ['/'],
        disallow: ['/api/', '/admin/', '/auth/'],
      },
      {
        userAgent: 'Google-Extended',
        disallow: ['/'],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}