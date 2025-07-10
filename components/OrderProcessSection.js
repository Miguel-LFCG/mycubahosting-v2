import { motion } from 'framer-motion';
import { 
  FaDiscord, 
  FaComments, 
  FaCog, 
  FaServer, 
  FaPlay
} from 'react-icons/fa';
import { useTranslation } from '@/hooks/useTranslation';

export default function OrderProcessSection() {
  const { t } = useTranslation();
  
  const orderSteps = [
    {
      icon: FaDiscord,
      title: t('orderStep1Title'),
      description: t('orderStep1Description'),
      detail: "Simple command-based ordering system"
    },
    {
      icon: FaComments,
      title: t('orderStep2Title'),
      description: t('orderStep2Description'),
      detail: "We support all versions and modpacks"
    },
    {
      icon: FaCog,
      title: t('orderStep3Title'),
      description: t('orderStep3Description'),
      detail: "Personal assistance every step of the way"
    },
    {
      icon: FaServer,
      title: "Server Setup",
      description: "We configure your server with your exact specifications",
      detail: "Custom plugins, mods, and optimizations included"
    },
    {
      icon: FaPlay,
      title: t('orderStep4Title'),
      description: t('orderStep4Description'),
      detail: "Full support and monitoring included"
    }
  ];
  return (
    <section id="order-process" className="py-20 bg-gradient-to-br from-slate-800 to-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {t('orderProcessTitle')}
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            {t('orderProcessSubtitle')}
          </p>
        </motion.div>
        
        <div className="max-w-4xl mx-auto">
          {orderSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`flex items-center mb-12 ${index % 2 === 1 ? 'flex-row-reverse' : ''}`}
            >
              {/* Step content */}
              <div className={`flex-1 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <h3 className="text-2xl font-bold text-white mb-3 flex items-center">
                    <span className="bg-minecraft-emerald text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
                      {index + 1}
                    </span>
                    {step.title}
                  </h3>
                  <p className="text-gray-300 mb-2 text-lg">
                    {step.description}
                  </p>
                  <p className="text-sm text-gray-400 italic">
                    {step.detail}
                  </p>
                </div>
              </div>
              
              {/* Step icon */}
              <div className="flex-shrink-0">
                <motion.div
                  className="w-16 h-16 bg-gradient-to-br from-minecraft-emerald to-green-600 rounded-xl flex items-center justify-center text-white text-2xl shadow-lg"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <step.icon />
                </motion.div>
              </div>
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
            href="https://discord.gg/7QEvxcBvBK"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-minecraft-emerald to-green-600 hover:from-green-500 hover:to-green-700 text-white px-8 py-4 rounded-xl inline-flex items-center space-x-3 text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <FaDiscord className="w-6 h-6" />
            <span>{t('startOrderToday')}</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
