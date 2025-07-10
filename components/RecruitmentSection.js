import { motion } from 'framer-motion';
import { FaDiscord, FaUserShield, FaCrown, FaUsers, FaHandshake } from 'react-icons/fa';

const positions = [
  {
    icon: FaUserShield,
    title: "Community Moderator",
    count: "1 Position",
    description: "Help maintain a positive and helpful Discord community",
    responsibilities: [
      "Monitor community channels for helpful discussions",
      "Welcome new members and guide them to resources",
      "Assist with general questions and community support",
      "Help maintain community guidelines"
    ],
    requirements: [
      "Active Discord user with good communication skills",
      "Patient and helpful personality",
      "Experience with Minecraft servers preferred",
      "Available for a few hours weekly"
    ],
    color: "minecraft-emerald"
  },
  {
    icon: FaCrown,
    title: "Technical Support Volunteer",
    count: "2 Positions",
    description: "Provide technical assistance to server owners",
    responsibilities: [
      "Help clients troubleshoot server issues",
      "Assist with mod and plugin installations",
      "Guide users through server configuration",
      "Document common issues and solutions"
    ],
    requirements: [
      "Strong knowledge of Minecraft servers",
      "Experience with plugins, mods, or server administration",
      "Problem-solving mindset",
      "Commitment to helping community members"
    ],
    color: "blue-500"
  }
];

export default function RecruitmentSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-800 to-slate-900">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Join Our Team
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            We're looking for passionate individuals to help us support the Minecraft community
          </p>
        </motion.div>
        
        {/* Recruitment Notice */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 backdrop-blur-sm rounded-xl border border-yellow-500/20 max-w-4xl mx-auto p-6 mb-12 text-center"
        >
          <div className="flex justify-center mb-4">
            <div className="w-12 h-12 bg-yellow-500 rounded-xl flex items-center justify-center text-white text-xl font-bold">
              ✨
            </div>
          </div>
          <h3 className="text-2xl font-bold text-white mb-3">
            Volunteer Opportunities Available
          </h3>
          <p className="text-gray-300 mb-2">
            These are <strong>volunteer positions</strong> perfect for gaining experience in community management and technical support
          </p>
          <p className="text-sm text-gray-400">
            Great way to contribute to the Minecraft community while building valuable skills
          </p>
        </motion.div>
        
        {/* Position Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {positions.map((position, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ y: -5 }}
              className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300 overflow-hidden"
            >
              {/* Header */}
              <div className={`bg-gradient-to-r from-${position.color} to-${position.color}/80 p-6 text-white`}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <motion.div
                      className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center text-2xl backdrop-blur-sm"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <position.icon />
                    </motion.div>
                    <div>
                      <h3 className="text-xl font-bold">{position.title}</h3>
                      <p className="text-white/80 text-sm">{position.count}</p>
                    </div>
                  </div>
                </div>
                <p className="mt-4 text-white/90">{position.description}</p>
              </div>
              
              {/* Content */}
              <div className="p-6 space-y-6">
                <div>
                  <h4 className="text-lg font-bold text-white mb-3">Responsibilities:</h4>
                  <ul className="space-y-2">
                    {position.responsibilities.map((item, i) => (
                      <li key={i} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-minecraft-emerald rounded-full mt-2 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-lg font-bold text-white mb-3">Requirements:</h4>
                  <ul className="space-y-2">
                    {position.requirements.map((item, i) => (
                      <li key={i} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{item}</span>
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
          <div className="bg-gradient-to-r from-minecraft-emerald/20 to-blue-500/20 backdrop-blur-sm rounded-xl max-w-2xl mx-auto p-8 border border-white/10">
            <motion.div
              className="flex justify-center mb-6"
              animate={{ 
                scale: [1, 1.05, 1]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <FaHandshake className="w-12 h-12 text-minecraft-emerald" />
            </motion.div>
            
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Make a Difference?
            </h3>
            <p className="text-gray-300 mb-6">
              Help us build the best Minecraft hosting community! Apply today and become part of our support team.
            </p>
            
            <motion.a
              href="https://discord.gg/your-invite-link"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-minecraft-emerald to-green-600 hover:from-green-500 hover:to-green-700 text-white px-8 py-4 rounded-xl inline-flex items-center space-x-3 text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <FaDiscord className="w-6 h-6" />
              <span>Apply on Discord</span>
            </motion.a>
            
            <p className="text-xs text-gray-400 mt-4">
              Volunteer positions • Build valuable experience • Support the community
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
