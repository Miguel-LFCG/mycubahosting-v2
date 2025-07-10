import { motion } from 'framer-motion';
import { 
  FaServer, 
  FaMemory, 
  FaMicrochip, 
  FaShieldAlt, 
  FaClock,
  FaUsers,
  FaInfoCircle,
  FaRobot,
  FaDiscord
} from 'react-icons/fa';
import { useTranslation } from '@/hooks/useTranslation';

const serverSpecs = [
  {
    type: "Vanilla Server",
    subtitle: "Perfect for friends",
    icon: FaServer,
    specs: [
      { icon: FaMemory, label: "RAM", value: "4-8GB" },
      { icon: FaMicrochip, label: "CPU", value: "1-2 cores" },
      { icon: FaShieldAlt, label: "Backups", value: "2 daily" },
      { icon: FaClock, label: "Uptime", value: "24/7" }
    ],
    color: "minecraft-emerald",
    bgGradient: "from-green-500/10 to-emerald-500/10"
  },
  {
    type: "Modded Server",
    subtitle: "For enhanced gameplay",
    icon: FaUsers,
    specs: [
      { icon: FaMemory, label: "RAM", value: "4-12GB" },
      { icon: FaMicrochip, label: "CPU", value: "1-2 cores" },
      { icon: FaShieldAlt, label: "Backups", value: "2 daily" },
      { icon: FaClock, label: "Uptime", value: "Auto-sleep" }
    ],
    color: "blue-500",
    bgGradient: "from-blue-500/10 to-purple-500/10"
  }
];

export default function ServerSpecsSection() {
  const { t } = useTranslation();
  
  const serverSpecs = [
    {
      type: "Vanilla Server",
      subtitle: "Perfect for friends",
      icon: FaServer,
      specs: [
        { icon: FaMemory, label: "RAM", value: "4-8GB" },
        { icon: FaMicrochip, label: "CPU", value: "1-2 cores" },
        { icon: FaShieldAlt, label: "Backups", value: "2 daily" },
        { icon: FaClock, label: "Uptime", value: "24/7" }
      ],
      color: "minecraft-emerald",
      bgGradient: "from-green-500/10 to-emerald-500/10"
    },
    {
      type: "Modded Server",
      subtitle: "For enhanced gameplay",
      icon: FaUsers,
      specs: [
        { icon: FaMemory, label: "RAM", value: "4-12GB" },
        { icon: FaMicrochip, label: "CPU", value: "1-2 cores" },
        { icon: FaShieldAlt, label: "Backups", value: "2 daily" },
        { icon: FaClock, label: "Uptime", value: "Auto-sleep" }
      ],
      color: "blue-500",
      bgGradient: "from-blue-500/10 to-purple-500/10"
    }
  ];
  
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-slate-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {t('serverSpecsTitle')}
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            {t('serverSpecsSubtitle')}
          </p>
        </motion.div>
        
        {/* Server Types */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
          {serverSpecs.map((server, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`bg-gradient-to-br ${server.bgGradient} backdrop-blur-sm rounded-xl border border-white/10 overflow-hidden hover:border-white/20 transition-all duration-300`}
            >
              {/* Header */}
              <div className={`bg-gradient-to-r from-${server.color} to-${server.color}/80 p-6 text-white`}>
                <div className="flex items-center space-x-4">
                  <motion.div
                    className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center text-2xl backdrop-blur-sm"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <server.icon />
                  </motion.div>
                  <div>
                    <h3 className="text-2xl font-bold">{server.type}</h3>
                    <p className="text-white/80">{server.subtitle}</p>
                  </div>
                </div>
              </div>
              
              {/* Specs */}
              <div className="p-6">
                <div className="grid grid-cols-2 gap-4">
                  {server.specs.map((spec, specIndex) => (
                    <div key={specIndex} className="flex items-center space-x-3 p-3 bg-white/5 rounded-lg">
                      <spec.icon className={`w-5 h-5 text-${server.color}`} />
                      <div>
                        <div className="text-sm text-gray-400">{spec.label}</div>
                        <div className="text-white font-semibold">{spec.value}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Important Information */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 backdrop-blur-sm rounded-xl border border-yellow-500/20 p-8">
            <div className="flex items-center mb-6">
              <FaInfoCircle className="w-8 h-8 text-yellow-400 mr-3" />
              <h3 className="text-2xl font-bold text-white">Important Information</h3>
            </div>
            
            <div className="space-y-6">
              {/* Community Benefits */}
              <div className="bg-white/5 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <FaDiscord className="w-6 h-6 text-blue-400 mr-3" />
                  <h4 className="text-lg font-bold text-white">Community Benefits</h4>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  You can send us your Discord server for verification! We'll review your community activity, 
                  member count, and engagement to potentially provide better server specifications based on 
                  your community size and other aspects.
                </p>
              </div>
              
              {/* Auto-Sleep Explanation */}
              <div className="bg-white/5 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <FaRobot className="w-6 h-6 text-purple-400 mr-3" />
                  <h4 className="text-lg font-bold text-white">Auto-Sleep System</h4>
                </div>
                <p className="text-gray-300 leading-relaxed mb-3">
                  <strong className="text-yellow-400">Auto-sleep</strong> means your server automatically 
                  shuts down when no players are online to save resources and costs.
                </p>
                <div className="text-sm text-gray-400 space-y-2">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-minecraft-emerald rounded-full mr-3"></div>
                    <span>Restart instantly via Discord bot when players want to join</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-minecraft-emerald rounded-full mr-3"></div>
                    <span>Schedule server start times through your private channel</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-minecraft-emerald rounded-full mr-3"></div>
                    <span>Perfect for modded servers with intermittent usage</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
