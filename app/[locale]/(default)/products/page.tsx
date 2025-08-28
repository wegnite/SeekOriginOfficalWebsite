import Products from "@/components/blocks/products";
import { getProductsPage } from "@/services/page";

/**
 * 为 products 页面生成 SEO 元数据
 * 支持国际化，包含完整的 SEO 优化配置
 */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  let canonicalUrl = `${process.env.NEXT_PUBLIC_WEB_URL}/products`;

  if (locale !== "en") {
    canonicalUrl = `${process.env.NEXT_PUBLIC_WEB_URL}/${locale}/products`;
  }

  const isZh = locale === "zh" || locale === "zh-CN";

  return {
    title: isZh ? "我们的产品 - Seek Origin" : "Our Products - Seek Origin",
    description: isZh 
      ? "探索 Seek Origin 创新的数字产品套件，包含摩诃毗瑟挐动画电影、TikTok评论生成器等娱乐和社交媒体工具。" 
      : "Discover Seek Origin's innovative digital products including Mahavatar Narsimha animated film, TikTok Comment Generator, and more entertainment and social media tools.",
    keywords: isZh
      ? "Seek Origin, 数字产品, 摩诃毗瑟挐, TikTok评论生成器, 动画电影, 社交媒体工具, 数字娱乐"
      : "Seek Origin, digital products, Mahavatar Narsimha, TikTok Comment Generator, animated film, social media tools, digital entertainment",
    openGraph: {
      title: isZh ? "我们的产品 - Seek Origin" : "Our Products - Seek Origin",
      description: isZh 
        ? "创新的娱乐和社交媒体数字产品" 
        : "Innovative entertainment and social media digital products",
      type: "website",
      url: canonicalUrl,
      siteName: "Seek Origin",
      images: [
        {
          url: "/seekorigin-og.png",
          width: 1200,
          height: 630,
          alt: "Seek Origin Products",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: isZh ? "我们的产品 - Seek Origin" : "Our Products - Seek Origin",
      description: isZh 
        ? "创新的娱乐和社交媒体数字产品" 
        : "Innovative entertainment and social media digital products",
      images: ["/seekorigin-og.png"],
    },
    alternates: {
      canonical: canonicalUrl,
    },
  };
}

/**
 * 产品展示页面组件
 * 展示公司所有数字产品的详细信息
 */
export default async function ProductsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const page = await getProductsPage(locale);

  return (
    <div className="min-h-screen">
      {/* 产品展示区域 */}
      {page.products && <Products section={page.products} />}
    </div>
  );
}