import { motion, AnimatePresence } from 'framer-motion';
import { FaDiscord, FaBars, FaTimes } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import LanguageSwitch from './LanguageSwitch';
import Navigation from './Navigation';
import { useTranslation } from '@/hooks/useTranslation';

export default function Header() {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  
  return (
    <motion.header 
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b-4 border-gray-800 border-t-gray-300 border-l-gray-300"
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <motion.div 
          className="flex items-center space-x-3"
          whileHover={{ scale: 1.05 }}
        >
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-minecraft-emerald pixel-border flex items-center justify-center text-white font-bold p-1">
              <Image
                src="/favicon.svg"
                alt="MyCuba Logo"
                width={32}
                height={32}
                className="w-full h-full object-contain"
              />
            </div>
            <h1 className="text-2xl font-bold text-white font-minecraft">
              MyCuba Hosting
            </h1>
          </Link>
        </motion.div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:block">
          <Navigation />
        </div>
        
        <div className="flex items-center space-x-4">
          <LanguageSwitch />
          
          <motion.a
            href="https://discord.gg/7QEvxcBvBK"
            target="_blank"
            rel="noopener noreferrer"
            className="minecraft-button flex items-center space-x-2 text-sm"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaDiscord className="w-5 h-5" />
            <span>{t('joinDiscord')}</span>
          </motion.a>

          {/* Mobile menu toggle */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-white hover:text-minecraft-emerald transition-colors duration-200"
          >
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-black/95 backdrop-blur-md border-t border-gray-700"
          >
            <div className="container mx-auto px-4 py-4">
              <Navigation isMobile={true} onClose={closeMenu} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
