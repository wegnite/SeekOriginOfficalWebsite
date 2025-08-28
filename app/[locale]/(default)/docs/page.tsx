import Docs from "@/components/blocks/docs";
import { getDocsPage } from "@/services/page";

/**
 * 为 docs 页面生成 SEO 元数据
 * 支持国际化，包含完整的 SEO 优化配置
 */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  let canonicalUrl = `${process.env.NEXT_PUBLIC_WEB_URL}/docs`;

  if (locale !== "en") {
    canonicalUrl = `${process.env.NEXT_PUBLIC_WEB_URL}/${locale}/docs`;
  }

  const isZh = locale === "zh" || locale === "zh-CN";

  return {
    title: isZh ? "文档中心 - Seek Origin" : "Documentation - Seek Origin",
    description: isZh 
      ? "Seek Origin 产品和服务的综合指南和API文档，包含快速开始指南、API参考、开发者教程等。" 
      : "Comprehensive guides and API documentation for Seek Origin products and services, including getting started guides, API references, and developer tutorials.",
    keywords: isZh
      ? "Seek Origin, 文档, API, 开发者指南, SDK, 技术文档, 集成指南"
      : "Seek Origin, documentation, API, developer guides, SDK, technical docs, integration guides",
    openGraph: {
      title: isZh ? "文档中心 - Seek Origin" : "Documentation - Seek Origin",
      description: isZh 
        ? "完整的产品文档和开发者资源" 
        : "Complete product documentation and developer resources",
      type: "website",
      url: canonicalUrl,
      siteName: "Seek Origin",
      images: [
        {
          url: "/seekorigin-og.png",
          width: 1200,
          height: 630,
          alt: "Seek Origin Documentation",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: isZh ? "文档中心 - Seek Origin" : "Documentation - Seek Origin",
      description: isZh 
        ? "完整的产品文档和开发者资源" 
        : "Complete product documentation and developer resources",
      images: ["/seekorigin-og.png"],
    },
    alternates: {
      canonical: canonicalUrl,
    },
  };
}

/**
 * 文档中心页面组件
 * 展示产品文档、API参考、开发者指南等内容的导航
 */
export default async function DocsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const page = await getDocsPage(locale);

  return (
    <div className="min-h-screen">
      {/* 文档导航和内容展示 */}
      {page.docs && <Docs section={page.docs} />}
    </div>
  );
}