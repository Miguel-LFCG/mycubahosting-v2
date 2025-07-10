import Head from 'next/head';
import { motion } from 'framer-motion';
import Header from '@components/Header';
import Footer from '@components/Footer';
import HeroSection from '@components/HeroSection';
import OrderProcessSection from '@components/OrderProcessSection';
import ServerSpecsSection from '@components/ServerSpecsSection';
import RecruitmentSection from '@components/RecruitmentSection';
import { useTranslation } from '@/hooks/useTranslation';

export default function Home() {
  const { t } = useTranslation();
  
  return (
    <>
      <Head>
        <title>{t('metaTitle')}</title>
        <meta name="description" content={t('metaDescription')} />
        <meta name="keywords" content={t('metaKeywords')} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.ico" />
        
        {/* Open Graph */}
        <meta property="og:title" content={t('metaTitle')} />
        <meta property="og:description" content={t('metaDescription')} />
        <meta property="og:type" content="website" />
        
        {/* Additional Meta */}
        <meta name="robots" content="index, follow" />
        <meta name="author" content="MyCuba Hosting" />
      </Head>

      <div className="min-h-screen">
        <Header />
        
        <main>
          <HeroSection />
          <OrderProcessSection />
          <ServerSpecsSection />
          <RecruitmentSection />
        </main>

        <Footer />
      </div>
    </>
  );
}
