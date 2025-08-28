import { Metadata } from 'next';
// @ts-ignore - MDX import
import TermsContent from './content.mdx';

// 生成页面元数据，确保搜索引擎能够正确索引
export const metadata: Metadata = {
  title: 'Terms of Service - Seek Origin AI',
  description: 'Read our terms of service to understand the rules and guidelines for using Seek Origin AI services, including acceptable use, intellectual property, and liability.',
  keywords: 'terms of service, user agreement, legal terms, Seek Origin AI, acceptable use, intellectual property',
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
    title: 'Terms of Service - Seek Origin AI',
    description: 'Read our terms of service to understand the rules and guidelines for using Seek Origin AI services.',
    url: 'https://seekorigin.ai/terms-of-service',
    siteName: 'Seek Origin AI',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary',
    title: 'Terms of Service - Seek Origin AI',
    description: 'Read our terms of service to understand the rules and guidelines for using Seek Origin AI services.',
  },
  alternates: {
    canonical: 'https://seekorigin.ai/terms-of-service',
  },
};

/**
 * 服务条款页面
 * 展示公司的服务条款和使用协议
 */
export default function TermsOfServicePage() {
  return <TermsContent />;
}