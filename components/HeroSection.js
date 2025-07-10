import { motion } from 'framer-motion';
import { FaDiscord, FaGamepad, FaServer, FaCube } from 'react-icons/fa';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0">
        {/* Floating Minecraft blocks */}
        <motion.div
          className="absolute top-20 left-10 w-16 h-16 bg-minecraft-grass pixel-border floating-element"
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 5, -5, 0]
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-40 right-20 w-12 h-12 bg-minecraft-dirt pixel-border floating-element"
          animate={{ 
            y: [0, -15, 0],
            rotate: [0, -5, 5, 0]
          }}
          transition={{ 
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        <motion.div
          className="absolute bottom-32 left-20 w-20 h-20 bg-minecraft-stone pixel-border floating-element"
          animate={{ 
            y: [0, -25, 0],
            rotate: [0, 10, -10, 0]
          }}
          transition={{ 
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
        
        {/* Parallax Background */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-minecraft-sky via-transparent to-transparent opacity-30"
          animate={{ 
            backgroundPosition: ['0% 0%', '100% 100%']
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
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
                rotate: [0, 360],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                duration: 10,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              <div className="w-24 h-24 bg-minecraft-emerald pixel-border flex items-center justify-center text-white text-4xl font-bold glow-effect">
                <FaCube />
              </div>
            </motion.div>
          </div>
          
          <motion.h1
            className="text-6xl md:text-8xl font-bold text-white font-minecraft mb-4 drop-shadow-2xl"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            MyCuba Hosting
          </motion.h1>
          
          <motion.p
            className="text-xl md:text-2xl text-gray-200 mb-12 max-w-2xl mx-auto leading-relaxed"
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
            className="minecraft-button flex items-center space-x-3 text-lg px-8 py-4 glow-effect"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaDiscord className="w-6 h-6" />
            <span>Join our Discord</span>
          </motion.a>
          
          <motion.button
            className="minecraft-button bg-gradient-to-b from-minecraft-diamond to-blue-600 hover:from-blue-400 hover:to-blue-700 flex items-center space-x-3 text-lg px-8 py-4"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              document.getElementById('how-it-works').scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <FaGamepad className="w-6 h-6" />
            <span>How It Works</span>
          </motion.button>
        </motion.div>
        
        {/* Stats */}
        <motion.div
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3 }}
        >
          <div className="text-center">
            <div className="text-3xl font-bold text-minecraft-emerald mb-2">24/7</div>
            <div className="text-gray-300">Server Uptime</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-minecraft-diamond mb-2">∞</div>
            <div className="text-gray-300">Backup Storage</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-minecraft-gold mb-2">1-Click</div>
            <div className="text-gray-300">Setup Process</div>
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
