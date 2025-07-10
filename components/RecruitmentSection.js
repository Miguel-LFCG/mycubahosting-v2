import { motion } from 'framer-motion';
import { FaDiscord, FaUserShield, FaCrown, FaUsers, FaHandshake } from 'react-icons/fa';

const positions = [
  {
    icon: FaUserShield,
    title: "Moderator",
    count: "1 Position",
    description: "Keep our Discord community safe and friendly",
    responsibilities: [
      "Monitor chat for inappropriate content",
      "Help enforce community guidelines",
      "Assist new members with questions",
      "Report issues to administrators"
    ],
    requirements: [
      "Active Discord user",
      "Good communication skills",
      "Patient and helpful attitude",
      "Available for a few hours daily"
    ],
    color: "minecraft-emerald"
  },
  {
    icon: FaCrown,
    title: "Administrator",
    count: "2 Positions",
    description: "Provide technical support and server assistance",
    responsibilities: [
      "Help clients with server setup",
      "Troubleshoot technical issues",
      "Assist with mod installations",
      "Guide users through processes"
    ],
    requirements: [
      "Strong Minecraft server knowledge",
      "Experience with plugins/mods",
      "Problem-solving skills",
      "Commitment to helping others"
    ],
    color: "minecraft-gold"
  }
];

export default function RecruitmentSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-black/40 to-minecraft-dirt/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-block minecraft-card bg-gradient-to-r from-minecraft-gold/20 to-minecraft-emerald/20 p-6 mb-8">
            <motion.div
              className="flex justify-center mb-4"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <FaUsers className="w-16 h-16 text-minecraft-gold" />
            </motion.div>
            <h2 className="text-5xl md:text-6xl font-bold text-white font-minecraft mb-4">
              Join the Guild!
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We're expanding our team and looking for passionate Minecraft enthusiasts to help our community grow
            </p>
          </div>
        </motion.div>
        
        {/* Recruitment Notice */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="minecraft-card bg-gradient-to-b from-yellow-200 to-yellow-400 max-w-4xl mx-auto p-8 mb-12 text-center"
        >
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-minecraft-redstone pixel-border flex items-center justify-center text-white text-2xl font-bold">
              !
            </div>
          </div>
          <h3 className="text-3xl font-bold text-gray-800 mb-4 font-minecraft">
            🎮 NOW RECRUITING 🎮
          </h3>
          <p className="text-lg text-gray-700 mb-4">
            These are <strong>volunteer positions</strong> for community members who want to make a difference
          </p>
          <p className="text-gray-600">
            Perfect for building experience in community management and technical support
          </p>
        </motion.div>
        
        {/* Position Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {positions.map((position, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="minecraft-card bg-gradient-to-b from-gray-100 to-gray-300 relative overflow-hidden"
            >
              {/* Header */}
              <div className={`bg-gradient-to-r from-${position.color} to-${position.color}/80 -mx-6 -mt-6 mb-6 p-6 text-white`}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <motion.div
                      className="w-16 h-16 bg-white/20 pixel-border flex items-center justify-center text-3xl"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <position.icon />
                    </motion.div>
                    <div>
                      <h3 className="text-2xl font-bold font-minecraft">{position.title}</h3>
                      <p className="text-white/80">{position.count}</p>
                    </div>
                  </div>
                </div>
                <p className="mt-4 text-white/90">{position.description}</p>
              </div>
              
              {/* Content */}
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-bold text-gray-800 mb-3 font-minecraft">Responsibilities:</h4>
                  <ul className="space-y-2">
                    {position.responsibilities.map((item, i) => (
                      <li key={i} className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-minecraft-emerald mt-2 flex-shrink-0" style={{ imageRendering: 'pixelated' }} />
                        <span className="text-gray-700 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-lg font-bold text-gray-800 mb-3 font-minecraft">Requirements:</h4>
                  <ul className="space-y-2">
                    {position.requirements.map((item, i) => (
                      <li key={i} className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-minecraft-diamond mt-2 flex-shrink-0" style={{ imageRendering: 'pixelated' }} />
                        <span className="text-gray-700 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Application CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-16"
        >
          <div className="minecraft-card bg-gradient-to-r from-minecraft-emerald/20 to-minecraft-gold/20 max-w-2xl mx-auto p-8">
            <motion.div
              className="flex justify-center mb-6"
              animate={{ 
                scale: [1, 1.1, 1],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <FaHandshake className="w-16 h-16 text-minecraft-emerald" />
            </motion.div>
            
            <h3 className="text-3xl font-bold text-white mb-4 font-minecraft">
              Ready to Join Our Team?
            </h3>
            <p className="text-gray-300 mb-6">
              Help us build the best Minecraft hosting community! Apply today and become part of something awesome.
            </p>
            
            <motion.a
              href="https://discord.gg/your-invite-link"
              target="_blank"
              rel="noopener noreferrer"
              className="minecraft-button inline-flex items-center space-x-3 text-lg px-8 py-4 glow-effect"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaDiscord className="w-6 h-6" />
              <span>Apply on Discord</span>
            </motion.a>
            
            <p className="text-xs text-gray-400 mt-4">
              All volunteer positions • Great for building experience • Community-focused roles
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
