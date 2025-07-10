import { motion } from 'framer-motion';
import { 
  FaArrowUp, 
  FaSync, 
  FaPuzzlePiece, 
  FaLifeRing, 
  FaShieldAlt,
  FaRocket,
  FaHeart
} from 'react-icons/fa';

const features = [
  {
    icon: FaArrowUp,
    title: "Easy Upgrades",
    description: "Scale your server resources up or down instantly",
    color: "minecraft-emerald",
    detail: "No downtime, no hassle"
  },
  {
    icon: FaSync,
    title: "Version Changes",
    description: "Switch between Minecraft versions effortlessly",
    color: "minecraft-diamond",
    detail: "From 1.8 to latest snapshots"
  },
  {
    icon: FaPuzzlePiece,
    title: "Mod Support",
    description: "Full installation and crash support for all mods",
    color: "minecraft-gold",
    detail: "Forge, Fabric, Quilt supported"
  },
  {
    icon: FaShieldAlt,
    title: "Always Protected",
    description: "Automatic backups ensure your world is never lost",
    color: "minecraft-redstone",
    detail: "Multiple restore points"
  },
  {
    icon: FaRocket,
    title: "Performance Tuned",
    description: "Optimized server configurations for best performance",
    color: "minecraft-grass",
    detail: "Custom JVM flags included"
  },
  {
    icon: FaHeart,
    title: "Friendly Support",
    description: "Discord-based support from real Minecraft enthusiasts",
    color: "red-500",
    detail: "Community-driven assistance"
  }
];

export default function SupportSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-minecraft-stone/20 to-black/40">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white font-minecraft mb-6">
            Support & Flexibility
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We don't just host your server - we become your technical partner in creating the perfect Minecraft experience
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ 
                y: -10,
                scale: 1.05,
                rotateX: 5
              }}
              className="minecraft-card bg-gradient-to-b from-gray-100 to-gray-300 relative group overflow-hidden"
            >
              {/* Animated Background */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br from-${feature.color}/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                initial={{ scale: 0, rotate: 45 }}
                whileHover={{ scale: 1.5, rotate: 0 }}
                transition={{ duration: 0.5 }}
              />
              
              {/* Icon */}
              <div className="relative z-10 flex justify-center mb-6">
                <motion.div
                  className={`w-20 h-20 bg-${feature.color} pixel-border flex items-center justify-center text-white text-3xl`}
                  whileHover={{ 
                    rotate: [0, -10, 10, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <feature.icon />
                </motion.div>
              </div>
              
              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-gray-800 mb-4 font-minecraft">
                  {feature.title}
                </h3>
                <p className="text-gray-700 mb-3 leading-relaxed">
                  {feature.description}
                </p>
                <p className="text-sm text-gray-600 italic">
                  {feature.detail}
                </p>
              </div>
              
              {/* Hover Glow */}
              <motion.div
                className={`absolute inset-0 border-4 border-${feature.color} opacity-0 group-hover:opacity-50 transition-opacity duration-300`}
                style={{ imageRendering: 'pixelated' }}
              />
            </motion.div>
          ))}
        </div>
        
        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-16"
        >
          <div className="minecraft-card bg-gradient-to-r from-minecraft-emerald/20 to-minecraft-diamond/20 max-w-2xl mx-auto p-8">
            <h3 className="text-3xl font-bold text-white mb-4 font-minecraft">
              Ready to Experience the Difference?
            </h3>
            <p className="text-gray-300 mb-6">
              Join thousands of satisfied server owners who chose MyCuba Hosting for their Minecraft adventures.
            </p>
            <motion.a
              href="https://discord.gg/your-invite-link"
              target="_blank"
              rel="noopener noreferrer"
              className="minecraft-button inline-flex items-center space-x-3 text-lg px-8 py-4"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaLifeRing className="w-6 h-6" />
              <span>Get Support Now</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
