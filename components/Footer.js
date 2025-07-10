import { motion } from 'framer-motion';
import { FaDiscord, FaHeart } from 'react-icons/fa';
import Image from 'next/image';
import { useTranslation } from '@/hooks/useTranslation';

export default function Footer() {
  const { t } = useTranslation();
  
  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="bg-black/90 text-white py-12 border-t-4 border-gray-800 border-t-gray-300"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-minecraft-emerald pixel-border flex items-center justify-center text-white font-bold text-lg p-1">
              <Image
                src="/favicon.svg"
                alt="MyCuba Logo"
                width={40}
                height={40}
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <h3 className="text-xl font-bold font-minecraft">MyCuba Hosting</h3>
              <p className="text-gray-400 text-sm">{t('footerTagline')}</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-6">
            <motion.a
              href="https://discord.gg/7QEvxcBvBK"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-minecraft-emerald hover:text-green-400 transition-colors"
              whileHover={{ scale: 1.1 }}
            >
              <FaDiscord className="w-6 h-6" />
              <span>{t('support')}</span>
            </motion.a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
          <p className="flex items-center justify-center space-x-2">
            <span>© 2025 MyCuba Hosting. Made with</span>
            <FaHeart className="text-red-500 w-4 h-4" />
            <span>for the Minecraft community</span>
          </p>
        </div>
      </div>
    </motion.footer>
  );
}
