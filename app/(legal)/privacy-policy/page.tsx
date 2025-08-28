import { Metadata } from 'next';
// @ts-ignore - MDX import
import PrivacyContent from './content.mdx';

// 生成页面元数据，确保搜索引擎能够正确索引
export const metadata: Metadata = {
  title: 'Privacy Policy - Seek Origin AI',
  description: 'Learn how Seek Origin AI collects, uses, and protects your personal information. Our privacy policy explains our data practices and your rights.',
  keywords: 'privacy policy, data protection, personal information, Seek Origin AI, GDPR, CCPA, data security',
  // 明确允许搜索引擎索引此页面
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'Privacy Policy - Seek Origin AI',
    description: 'Learn how Seek Origin AI collects, uses, and protects your personal information.',
    url: 'https://seekorigin.ai/privacy-policy',
    siteName: 'Seek Origin AI',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary',
    title: 'Privacy Policy - Seek Origin AI',
    description: 'Learn how Seek Origin AI collects, uses, and protects your personal information.',
  },
  alternates: {
    canonical: 'https://seekorigin.ai/privacy-policy',
  },
};

/**
 * 隐私政策页面
 * 展示公司的隐私政策和数据处理实践
 */
export default function PrivacyPolicyPage() {
  return <PrivacyContent />;
}