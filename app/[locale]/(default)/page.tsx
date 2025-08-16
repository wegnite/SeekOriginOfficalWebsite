import HeroModern from "@/components/blocks/hero-modern";
import Traction from "@/components/blocks/traction";
import Products from "@/components/blocks/products";
import Investors from "@/components/blocks/investors";
import Team from "@/components/blocks/team";
import Branding from "@/components/blocks/branding";
import CTA from "@/components/blocks/cta";
import FAQ from "@/components/blocks/faq";
import Feature from "@/components/blocks/feature";
import Feature1 from "@/components/blocks/feature1";
import Feature2 from "@/components/blocks/feature2";
import Feature3 from "@/components/blocks/feature3";
import Testimonial from "@/components/blocks/testimonial";
import { getLandingPage } from "@/services/page";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  let canonicalUrl = `${process.env.NEXT_PUBLIC_WEB_URL}`;

  if (locale !== "en") {
    canonicalUrl = `${process.env.NEXT_PUBLIC_WEB_URL}/${locale}`;
  }

  return {
    title: "Seek Origin - Digital Products & Entertainment",
    description: "Discover Mahavatar Narsimha animated film and TikTok Comment Generator - innovative digital experiences for entertainment and social media.",
    keywords: "Mahavatar Narsimha, TikTok Comment Generator, animated film, social media tools, viral comments, Indian animation",
    openGraph: {
      title: "Seek Origin - Digital Products",
      description: "Explore our entertainment and social media tools designed for modern digital experiences.",
      type: "website",
      url: canonicalUrl,
      siteName: "Seek Origin AI",
      images: [
        {
          url: "/seekorigin-og.png",
          width: 1200,
          height: 630,
          alt: "Seek Origin AI",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Seek Origin - Products",
      description: "Entertainment and social media tools for everyone.",
      images: ["/seekorigin-og.png"],
    },
    alternates: {
      canonical: canonicalUrl,
    },
  };
}

export default async function LandingPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const page = await getLandingPage(locale);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Modern Hero Section with animations */}
      {page.hero && <HeroModern hero={page.hero} />}
      
      {/* Traction/Metrics for Investors */}
      {page.traction && <Traction section={page.traction} />}
      
      {/* Products Showcase */}
      {page.products && <Products section={page.products} />}
      
      {/* Technology Partners/Stack */}
      {page.branding && <Branding section={page.branding} />}
      
      {/* About/Introduction */}
      {page.introduce && <Feature1 section={page.introduce} />}
      
      {/* Investors & Backing */}
      {page.investors && <Investors section={page.investors} />}
      
      {/* Benefits/Solutions */}
      {page.benefit && <Feature2 section={page.benefit} />}
      
      {/* Team Section */}
      {page.team && <Team section={page.team} />}
      
      {/* Usage/Process */}
      {page.usage && <Feature3 section={page.usage} />}
      
      {/* Features Grid */}
      {page.feature && <Feature section={page.feature} />}
      
      {/* Testimonials */}
      {page.testimonial && <Testimonial section={page.testimonial} />}
      
      {/* FAQ */}
      {page.faq && <FAQ section={page.faq} />}
      
      {/* Final CTA */}
      {page.cta && <CTA section={page.cta} />}
    </div>
  );
}