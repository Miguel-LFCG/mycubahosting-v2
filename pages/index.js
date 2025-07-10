import Head from 'next/head';
import { motion } from 'framer-motion';
import Header from '@components/Header';
import Footer from '@components/Footer';
import HeroSection from '@components/HeroSection';
import OrderProcessSection from '@components/OrderProcessSection';
import HowItWorksSection from '@components/HowItWorksSection';
import SupportSection from '@components/SupportSection';
import RecruitmentSection from '@components/RecruitmentSection';

export default function Home() {
  return (
    <>
      <Head>
        <title>MyCuba Hosting - Premium Minecraft Server Hosting</title>
        <meta name="description" content="Simple, flexible Minecraft server hosting managed through Discord. Get 24/7 support, automatic backups, and custom server setups." />
        <meta name="keywords" content="minecraft server hosting, minecraft hosting, discord minecraft, server hosting, minecraft servers" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        
        {/* Open Graph */}
        <meta property="og:title" content="MyCuba Hosting - Premium Minecraft Server Hosting" />
        <meta property="og:description" content="Simple, flexible Minecraft server hosting managed through Discord" />
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
          <HowItWorksSection />
          <SupportSection />
          <RecruitmentSection />
        </main>

        <Footer />
      </div>
    </>
  );
}
