import { motion } from 'framer-motion';
import { FaDiscord } from 'react-icons/fa';
import { useTranslation } from '@/hooks/useTranslation';

export default function PricingPlansSection() {
  const { t } = useTranslation();

  const plans = [
    {
      key: 'group',
      name: t('groupPlanName'),
      subtitle: t('groupPlanSubtitle'),
      specs: [t('groupPlanCores'), t('groupPlanRam')],
      features: [t('groupFeatureSSD'), t('groupFeatureDDoS'), t('groupFeatureUpgrade')],
      accent: 'from-minecraft-emerald/20 to-green-600/10',
    },
    {
      key: 'community',
      name: t('communityPlanName'),
      subtitle: t('communityPlanSubtitle'),
      specs: [t('communityPlanCores'), t('communityPlanRam')],
      features: [t('communityPlanScales'), t('communityFeaturePriority'), t('communityFeatureCustomSetup')],
      note: t('communityRequirement'),
      accent: 'from-purple-500/20 to-fuchsia-500/10',
    },
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white font-minecraft mb-4">
            {t('plansTitle')}
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">{t('plansSubtitle')}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {plans.map((plan, idx) => (
            <motion.div
              key={plan.key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-gray-800/60 rounded-lg border border-gray-700 overflow-hidden hover:border-minecraft-emerald transition-colors"
            >
              <div className={`bg-gradient-to-r ${plan.accent} p-6 border-b border-gray-700`}>
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-white">{plan.name}</h3>
                    <p className="text-gray-300 mt-1">{plan.subtitle}</p>
                  </div>
                </div>
              </div>

              <div className="p-6">
                {/* Specs */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {plan.specs.map((s, i) => (
                    <div key={i} className="bg-gray-900/60 border border-gray-700 rounded-md p-3 text-center text-gray-200">
                      {s}
                    </div>
                  ))}
                </div>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {plan.features.map((f, i) => (
                    <li key={i} className="flex items-start space-x-2 text-gray-300">
                      <span className="mt-1 w-2 h-2 bg-minecraft-emerald rounded-full"></span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                {plan.note && (
                  <div className="text-sm text-yellow-300/90 bg-yellow-900/20 border border-yellow-700/50 rounded-md p-3 mb-6">
                    {plan.note}
                  </div>
                )}

                <a
                  href="https://discord.gg/7QEvxcBvBK"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full minecraft-button flex items-center justify-center space-x-2"
                >
                  <FaDiscord />
                  <span>{t('orderOnDiscord')}</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-gray-400 text-sm mt-10">{t('plansDisclaimer')}</p>
      </div>
    </section>
  );
}
