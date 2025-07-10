import { motion } from 'framer-motion';
import { 
  FaArrowUp, 
  FaSync, 
  FaPuzzlePiece, 
  FaLifeRing, 
  FaUsers,
  FaClock
} from 'react-icons/fa';

const supportFeatures = [
  {
    icon: FaLifeRing,
    title: "Discord Support",
    description: "Get help directly through Discord from real Minecraft enthusiasts",
    color: "minecraft-emerald",
    detail: "Dedicated support channels"
  },
  {
    icon: FaArrowUp,
    title: "Easy Upgrades",
    description: "Scale your server resources up or down instantly with no downtime",
    color: "blue-500",
    detail: "Seamless resource scaling"
  },
  {
    icon: FaSync,
    title: "Version Changes",
    description: "Switch between Minecraft versions effortlessly through support",
    color: "purple-500",
    detail: "From 1.8 to latest snapshots"
  },
  {
    icon: FaPuzzlePiece,
    title: "Mod & Plugin Support",
    description: "Full installation and crash support for all mods and plugins",
    color: "yellow-500",
    detail: "Forge, Fabric, Quilt supported"
  },
  {
    icon: FaUsers,
    title: "Community Help",
    description: "Get assistance from other server owners in our community",
    color: "green-500",
    detail: "Peer-to-peer support"
  },
  {
    icon: FaClock,
    title: "Fast Response",
    description: "Quick response times during peak hours",
    color: "red-500",
    detail: "Usually under 30 minutes"
  }
];

export default function SupportSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 to-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Support & Community
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            We don't just host your server - we become your technical partner in creating the perfect Minecraft experience
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {supportFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 group"
            >
              {/* Icon */}
              <div className="flex justify-center mb-6">
                <motion.div
                  className={`w-16 h-16 bg-${feature.color} rounded-xl flex items-center justify-center text-white text-2xl shadow-lg group-hover:shadow-xl transition-shadow duration-300`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <feature.icon />
                </motion.div>
              </div>
              
              {/* Content */}
              <div>
                <h3 className="text-xl font-bold text-white mb-4 text-center">
                  {feature.title}
                </h3>
                <p className="text-gray-300 mb-3 leading-relaxed text-center">
                  {feature.description}
                </p>
                <p className="text-sm text-gray-400 italic text-center">
                  {feature.detail}
                </p>
              </div>
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
          <div className="bg-gradient-to-r from-minecraft-emerald/20 to-blue-500/20 backdrop-blur-sm rounded-xl max-w-2xl mx-auto p-8 border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Experience the Difference?
            </h3>
            <p className="text-gray-300 mb-6">
              Join thousands of satisfied server owners who chose MyCuba Hosting for their Minecraft adventures.
            </p>
            <motion.a
              href="https://discord.gg/your-invite-link"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-minecraft-emerald to-green-600 hover:from-green-500 hover:to-green-700 text-white px-8 py-4 rounded-xl inline-flex items-center space-x-3 text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
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
