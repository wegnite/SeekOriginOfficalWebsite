import Blog from "@/components/blocks/blog";
import { Blog as BlogType } from "@/types/blocks/blog";
import { getPostsByLocale } from "@/models/post";
import { getTranslations } from "next-intl/server";

/**
 * 为 blog 页面生成 SEO 元数据
 * 这是 posts 页面的别名，提供更友好的 URL
 */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations();

  let canonicalUrl = `${process.env.NEXT_PUBLIC_WEB_URL}/blog`;

  if (locale !== "en") {
    canonicalUrl = `${process.env.NEXT_PUBLIC_WEB_URL}/${locale}/blog`;
  }

  const isZh = locale === "zh" || locale === "zh-CN";

  return {
    title: isZh ? "博客 - Seek Origin" : "Blog - Seek Origin",
    description: isZh 
      ? "Seek Origin 最新资讯、技术分享和行业洞察。了解数字娱乐、AI技术和产品开发的最新趋势。"
      : "Latest news, tech insights, and industry perspectives from Seek Origin. Stay updated with digital entertainment, AI technology, and product development trends.",
    keywords: isZh
      ? "Seek Origin, 博客, 技术分享, 行业资讯, AI技术, 数字娱乐, 产品开发"
      : "Seek Origin, blog, tech insights, industry news, AI technology, digital entertainment, product development",
    openGraph: {
      title: isZh ? "博客 - Seek Origin" : "Blog - Seek Origin",
      description: isZh 
        ? "最新的技术分享和行业洞察" 
        : "Latest tech insights and industry perspectives",
      type: "website",
      url: canonicalUrl,
      siteName: "Seek Origin",
      images: [
        {
          url: "/seekorigin-og.png",
          width: 1200,
          height: 630,
          alt: "Seek Origin Blog",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: isZh ? "博客 - Seek Origin" : "Blog - Seek Origin",
      description: isZh 
        ? "最新的技术分享和行业洞察" 
        : "Latest tech insights and industry perspectives",
      images: ["/seekorigin-og.png"],
    },
    alternates: {
      canonical: canonicalUrl,
    },
  };
}

/**
 * 博客页面组件 (posts 页面的别名)
 * 展示所有博客文章和最新资讯
 */
export default async function BlogPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations();

  const posts = await getPostsByLocale(locale);

  const blog: BlogType = {
    title: t("blog.title"),
    description: t("blog.description"),
    items: posts,
    read_more_text: t("blog.read_more_text"),
  };

  return <Blog blog={blog} />;
}