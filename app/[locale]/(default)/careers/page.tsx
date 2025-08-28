import Careers from "@/components/blocks/careers";
import { getCareersPage } from "@/services/page";

/**
 * 为 careers 页面生成 SEO 元数据
 * 支持国际化，包含完整的 SEO 优化配置
 */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  let canonicalUrl = `${process.env.NEXT_PUBLIC_WEB_URL}/careers`;

  if (locale !== "en") {
    canonicalUrl = `${process.env.NEXT_PUBLIC_WEB_URL}/${locale}/careers`;
  }

  const isZh = locale === "zh" || locale === "zh-CN";

  return {
    title: isZh ? "加入我们 - Seek Origin" : "Careers - Seek Origin",
    description: isZh 
      ? "加入 Seek Origin 团队，参与创建创新的数字娱乐和社交媒体产品。我们提供远程工作、有竞争力的薪资和成长机会。" 
      : "Join the Seek Origin team and help create innovative digital entertainment and social media products. We offer remote work, competitive compensation, and growth opportunities.",
    keywords: isZh
      ? "Seek Origin, 招聘, 职业机会, 远程工作, 前端开发, AI工程师, 产品经理, 3D动画师"
      : "Seek Origin, careers, job opportunities, remote work, frontend developer, AI engineer, product manager, 3D animator",
    openGraph: {
      title: isZh ? "加入我们 - Seek Origin" : "Careers - Seek Origin",
      description: isZh 
        ? "加入创新团队，塑造数字娱乐的未来" 
        : "Join an innovative team shaping the future of digital entertainment",
      type: "website",
      url: canonicalUrl,
      siteName: "Seek Origin",
      images: [
        {
          url: "/seekorigin-og.png",
          width: 1200,
          height: 630,
          alt: "Seek Origin Careers",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: isZh ? "加入我们 - Seek Origin" : "Careers - Seek Origin",
      description: isZh 
        ? "加入创新团队，塑造数字娱乐的未来" 
        : "Join an innovative team shaping the future of digital entertainment",
      images: ["/seekorigin-og.png"],
    },
    alternates: {
      canonical: canonicalUrl,
    },
  };
}

/**
 * 职业招聘页面组件
 * 展示所有开放职位和公司文化信息
 */
export default async function CareersPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const page = await getCareersPage(locale);

  return (
    <div className="min-h-screen">
      {/* 职位招聘和公司文化展示 */}
      {page.careers && <Careers section={page.careers} />}
    </div>
  );
}