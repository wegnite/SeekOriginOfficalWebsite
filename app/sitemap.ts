import { MetadataRoute } from 'next'

/**
 * 动态生成 sitemap
 * Next.js 13+ 的 sitemap 文件，包含所有主要页面的国际化版本
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_WEB_URL || 'https://seekorigin.ai';
  const currentDate = new Date();
  
  // 定义所有可用的页面路由
  const routes = [
    { path: '', priority: 1.0, changeFrequency: 'weekly' as const }, // 主页
    { path: 'products', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: 'showcase', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: 'pricing', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: 'docs', priority: 0.7, changeFrequency: 'weekly' as const },
    { path: 'blog', priority: 0.7, changeFrequency: 'daily' as const },
    { path: 'posts', priority: 0.7, changeFrequency: 'daily' as const }, // blog 别名
    { path: 'careers', priority: 0.6, changeFrequency: 'weekly' as const },
    { path: 'privacy-policy', priority: 0.3, changeFrequency: 'yearly' as const },
    { path: 'terms-of-service', priority: 0.3, changeFrequency: 'yearly' as const },
  ];

  // 支持的语言
  const locales = ['en', 'zh'];

  // 生成 sitemap 条目
  const sitemapEntries: MetadataRoute.Sitemap = [];

  routes.forEach(route => {
    locales.forEach(locale => {
      const url = locale === 'en' 
        ? `${baseUrl}${route.path ? `/${route.path}` : ''}`
        : `${baseUrl}/${locale}${route.path ? `/${route.path}` : ''}`;
      
      sitemapEntries.push({
        url,
        lastModified: currentDate,
        changeFrequency: route.changeFrequency,
        priority: route.priority,
      });
    });
  });

  return sitemapEntries;
}