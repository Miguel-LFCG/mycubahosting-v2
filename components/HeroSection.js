import { motion } from 'framer-motion';
import { FaDiscord, FaGamepad, FaServer } from 'react-icons/fa';
import Image from 'next/image';
import { useTranslation } from '@/hooks/useTranslation';

export default function HeroSection() {
  const { t } = useTranslation();
  
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 z-0">
        {/* Modern gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
      </div>
      
      {/* Main Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mb-8"
        >
          <div className="flex justify-center mb-6">
            <motion.div
              className="relative"
              animate={{ 
                scale: [1, 1.05, 1]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <div className="w-20 h-20 bg-gradient-to-br from-slate-700/50 to-slate-800/50 rounded-xl flex items-center justify-center shadow-2xl border border-slate-600/10 p-2">
                <Image
                  src="/favicon.svg"
                  alt="MyCuba Hosting Logo"
                  width={60}
                  height={60}
                  className="w-full h-full object-contain"
                />
              </div>
            </motion.div>
          </div>
          
          <motion.h1
            className="text-5xl md:text-7xl font-bold text-white mb-4 drop-shadow-2xl bg-gradient-to-r from-white to-gray-200 bg-clip-text"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            {t('heroTitle')}
          </motion.h1>
          
          <motion.p
            className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed font-light"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            {t('heroSubtitle')}
          </motion.p>
        </motion.div>
        
        <motion.div
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
        >
          <motion.a
            href="https://discord.gg/7QEvxcBvBK"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-minecraft-emerald to-green-600 hover:from-green-500 hover:to-green-700 text-white px-8 py-4 rounded-xl flex items-center space-x-3 text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <FaDiscord className="w-6 h-6" />
            <span>{t('joinOurDiscord')}</span>
          </motion.a>
          
          <motion.button
            className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white px-8 py-4 rounded-xl flex items-center space-x-3 text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => {
              document.getElementById('order-process').scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <FaGamepad className="w-6 h-6" />
            <span>{t('getStarted')}</span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
