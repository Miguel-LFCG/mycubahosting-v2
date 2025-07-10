import { motion } from 'framer-motion';
import { FaDiscord, FaGamepad, FaServer, FaCube } from 'react-icons/fa';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 z-0">
        {/* Reduced floating elements */}
        <motion.div
          className="absolute top-20 left-10 w-12 h-12 bg-minecraft-emerald/20 backdrop-blur-sm border border-minecraft-emerald/30 rounded-lg"
          animate={{ 
            y: [0, -10, 0],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-32 right-20 w-16 h-16 bg-blue-500/20 backdrop-blur-sm border border-blue-500/30 rounded-lg"
          animate={{ 
            y: [0, -15, 0],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
        
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
              <div className="w-20 h-20 bg-gradient-to-br from-minecraft-emerald to-green-600 rounded-xl flex items-center justify-center text-white text-3xl font-bold shadow-2xl border border-minecraft-emerald/30">
                <FaCube />
              </div>
            </motion.div>
          </div>
          
          <motion.h1
            className="text-5xl md:text-7xl font-bold text-white mb-4 drop-shadow-2xl bg-gradient-to-r from-white to-gray-200 bg-clip-text"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            MyCuba Hosting
          </motion.h1>
          
          <motion.p
            className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed font-light"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            Simple, flexible Minecraft server hosting — now fully managed through Discord.
          </motion.p>
        </motion.div>
        
        <motion.div
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
        >
          <motion.a
            href="https://discord.gg/your-invite-link"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-minecraft-emerald to-green-600 hover:from-green-500 hover:to-green-700 text-white px-8 py-4 rounded-xl flex items-center space-x-3 text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <FaDiscord className="w-6 h-6" />
            <span>Join our Discord</span>
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
            <span>Get Started</span>
          </motion.button>
        </motion.div>
        
        {/* Stats */}
        <motion.div
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3 }}
        >
          <div className="text-center bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
            <div className="text-3xl font-bold text-minecraft-emerald mb-2">24/7</div>
            <div className="text-gray-300 text-sm">Server Uptime</div>
          </div>
          <div className="text-center bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
            <div className="text-3xl font-bold text-blue-400 mb-2">∞</div>
            <div className="text-gray-300 text-sm">Backup Storage</div>
          </div>
          <div className="text-center bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
            <div className="text-3xl font-bold text-yellow-400 mb-2">1-Click</div>
            <div className="text-gray-300 text-sm">Setup Process</div>
          </div>
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-8 h-12 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2" />
        </div>
      </motion.div>
    </section>
  );
}
