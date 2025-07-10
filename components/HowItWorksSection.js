import { motion } from 'framer-motion';
import { 
  FaDiscord, 
  FaCog, 
  FaTools, 
  FaServer, 
  FaCloudDownloadAlt, 
  FaHeadset,
  FaComments,
  FaCube
} from 'react-icons/fa';

const steps = [
  {
    icon: FaDiscord,
    title: "Join & Order",
    description: "Join our Discord and use /order to get started",
    detail: "Simple command-based ordering system"
  },
  {
    icon: FaComments,
    title: "Provide Details",
    description: "Tell us your server name, Minecraft version, and setup preferences",
    detail: "We support all versions and modpacks"
  },
  {
    icon: FaCog,
    title: "Private Channel",
    description: "Get your own dedicated Discord channel for direct support",
    detail: "Personal assistance every step of the way"
  },
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
    icon: FaHeadset,
    title: "Ongoing Support",
    description: "Continuous support available through your channel",
    detail: "We're here when you need us"
  }
];

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-20 bg-gradient-to-b from-minecraft-dirt/20 to-minecraft-stone/20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white font-minecraft mb-6">
            How It Works
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Getting your Minecraft server up and running is easier than crafting a wooden pickaxe
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.05,
                rotateY: 5,
                z: 50
              }}
              className="minecraft-card bg-gradient-to-b from-gray-100 to-gray-300 relative group"
            >
              {/* Step Number */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-minecraft-emerald pixel-border flex items-center justify-center text-white font-bold text-sm z-10">
                {index + 1}
              </div>
              
              {/* Icon */}
              <div className="flex justify-center mb-4">
                <motion.div
                  className="w-16 h-16 bg-minecraft-diamond pixel-border flex items-center justify-center text-blue-600 text-2xl"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <step.icon />
                </motion.div>
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-bold text-gray-800 mb-3 font-minecraft">
                {step.title}
              </h3>
              <p className="text-gray-700 mb-3 text-sm leading-relaxed">
                {step.description}
              </p>
              <p className="text-xs text-gray-600 italic">
                {step.detail}
              </p>
              
              {/* Hover Effect */}
              <motion.div
                className="absolute inset-0 bg-minecraft-emerald/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pixel-border"
                initial={{ scale: 0 }}
                whileHover={{ scale: 1 }}
              />
            </motion.div>
          ))}
        </div>
        
        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-16"
        >
          <motion.a
            href="https://discord.gg/your-invite-link"
            target="_blank"
            rel="noopener noreferrer"
            className="minecraft-button inline-flex items-center space-x-3 text-lg px-8 py-4 glow-effect"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaDiscord className="w-6 h-6" />
            <span>Start Your Server Today</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
