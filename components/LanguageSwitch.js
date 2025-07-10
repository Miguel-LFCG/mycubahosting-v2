import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

export default function LanguageSwitch() {
  const { language, toggleLanguage } = useLanguage();
  
  return (
    <motion.button
      onClick={toggleLanguage}
      className="relative bg-gray-800/80 backdrop-blur-sm border border-gray-700 rounded-full p-1 w-16 h-8 flex items-center transition-all duration-300 hover:bg-gray-700/80"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Toggle indicator */}
      <motion.div
        className="bg-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold text-gray-800 shadow-lg"
        animate={{
          x: language === 'en' ? 0 : 32
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 30
        }}
      >
        {language.toUpperCase()}
      </motion.div>
      
      {/* Background labels */}
      <div className="absolute inset-0 flex items-center justify-between px-2 text-xs font-medium text-gray-300 pointer-events-none">
        <span className={`transition-opacity duration-200 ${language === 'en' ? 'opacity-0' : 'opacity-100'}`}>
          EN
        </span>
        <span className={`transition-opacity duration-200 ${language === 'fr' ? 'opacity-0' : 'opacity-100'}`}>
          FR
        </span>
      </div>
    </motion.button>
  );
}
