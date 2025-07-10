import { motion } from 'framer-motion';
import { 
  FaTools, 
  FaServer, 
  FaCloudDownloadAlt, 
  FaHeadset,
  FaCube,
  FaShieldAlt,
  FaRocket,
  FaHeart
} from 'react-icons/fa';

const features = [
  {
    icon: FaTools,
    title: "Custom Setup",
    description: "We help with plugins, Geyser, mods, maps, and more",
    detail: "Full technical support included"
  },
  {
    icon: FaServer,
    title: "Tailored Resources",
    description: "RAM, CPU, and storage adjusted to your needs",
    detail: "Scalable and flexible hosting"
  },
  {
    icon: FaCube,
    title: "Smart Management",
    description: "Modded servers auto-sleep, vanilla runs 24/7",
    detail: "Optimized for performance and cost"
  },
  {
    icon: FaCloudDownloadAlt,
    title: "Automatic Backups",
    description: "Regular backups included and downloadable anytime",
    detail: "Your worlds are always safe"
  },
  {
    icon: FaShieldAlt,
    title: "Always Protected",
    description: "DDoS protection and security monitoring included",
    detail: "Multiple security layers"
  },
  {
    icon: FaRocket,
    title: "Performance Tuned",
    description: "Optimized server configurations for best performance",
    detail: "Custom JVM flags included"
  },
  {
    icon: FaHeart,
    title: "Community Driven",
    description: "Built by Minecraft enthusiasts for the community",
    detail: "We understand your needs"
  },
  {
    icon: FaHeadset,
    title: "24/7 Support",
    description: "Continuous support available through your channel",
    detail: "We're here when you need us"
  }
];

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-20 bg-gradient-to-br from-gray-900 to-slate-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            What Makes Us Different
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            We don't just host servers - we create tailored Minecraft experiences
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 group"
            >
              {/* Icon */}
              <div className="flex justify-center mb-4">
                <motion.div
                  className="w-14 h-14 bg-gradient-to-br from-minecraft-emerald to-green-600 rounded-xl flex items-center justify-center text-white text-xl shadow-lg group-hover:shadow-xl transition-shadow duration-300"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <feature.icon />
                </motion.div>
              </div>
              
              {/* Content */}
              <h3 className="text-lg font-bold text-white mb-3 text-center">
                {feature.title}
              </h3>
              <p className="text-gray-300 mb-3 text-sm leading-relaxed text-center">
                {feature.description}
              </p>
              <p className="text-xs text-gray-400 italic text-center">
                {feature.detail}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
