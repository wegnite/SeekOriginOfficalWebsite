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
    title: "Seek Origin AI - Building the Future of Artificial Intelligence",
    description: "Backed by top-tier VCs, Seek Origin is transforming industries with cutting-edge AI tools. $50M+ raised, 100K+ users, operating in 50+ countries.",
    keywords: "AI startup, artificial intelligence, machine learning, unicorn, Silicon Valley, venture capital",
    openGraph: {
      title: "Seek Origin AI - The Future of AI Innovation",
      description: "Join us in building AI tools that empower the world",
      images: ["/seekorigin-og.png"],
    },
    alternates: {
      canonical: canonicalUrl,
    },
  };
}

export default async function ModernLandingPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const page = await getLandingPage(locale);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Modern Hero Section */}
      {page.hero && <HeroModern hero={page.hero} />}
      
      {/* Traction/Metrics Section */}
      {page.traction && <Traction section={page.traction} />}
      
      {/* Products Showcase */}
      {page.products && <Products section={page.products} />}
      
      {/* About/Introduction */}
      {page.introduce && <Feature1 section={page.introduce} />}
      
      {/* Technology Stack */}
      {page.branding && <Branding section={page.branding} />}
      
      {/* Investors & Backing */}
      {page.investors && <Investors section={page.investors} />}
      
      {/* Team Section */}
      {page.team && <Team section={page.team} />}
      
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