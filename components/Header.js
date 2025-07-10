import { motion } from 'framer-motion';
import { FaDiscord } from 'react-icons/fa';

export default function Header() {
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
          <div className="w-10 h-10 bg-minecraft-emerald pixel-border flex items-center justify-center text-white font-bold">
            MC
          </div>
          <h1 className="text-2xl font-bold text-white font-minecraft">
            MyCuba Hosting
          </h1>
        </motion.div>
        
        <motion.a
          href="https://discord.gg/your-invite-link"
          target="_blank"
          rel="noopener noreferrer"
          className="minecraft-button flex items-center space-x-2 text-sm"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaDiscord className="w-5 h-5" />
          <span>Join Discord</span>
        </motion.a>
      </div>
    </motion.header>
  );
}
