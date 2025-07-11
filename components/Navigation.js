import Link from 'next/link';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { useTranslation } from '@/hooks/useTranslation';

export default function Navigation({ isMobile = false, onClose = null }) {
  const { t } = useTranslation();
  const router = useRouter();

  const menuItems = [
    { href: '/', label: t('home'), icon: '🏠' },
    { href: '/premade-servers', label: t('premadeServers'), icon: '⚙️' },
    { href: '/our-servers', label: t('ourServers'), icon: '🌐' }
  ];

  const isActive = (href) => {
    return router.pathname === href;
  };

  const handleClick = () => {
    if (onClose) {
      onClose();
    }
  };

  const linkClasses = isMobile 
    ? "block text-white hover:text-minecraft-emerald transition-colors duration-200 font-medium py-3 px-4 rounded-lg hover:bg-gray-700/50"
    : "text-white hover:text-minecraft-emerald transition-colors duration-200 font-medium relative";

  const activeLinkClasses = isMobile
    ? "text-minecraft-emerald bg-gray-700/50"
    : "text-minecraft-emerald";

  return (
    <nav className={isMobile ? "space-y-2" : "flex items-center space-x-6"}>
      {menuItems.map((item) => (
        <motion.div 
          key={item.href} 
          whileHover={!isMobile ? { scale: 1.05 } : {}}
          className="relative"
        >
          <Link 
            href={item.href}
            className={`${linkClasses} ${isActive(item.href) ? activeLinkClasses : ''} flex items-center space-x-2`}
            onClick={handleClick}
          >
            {isMobile && <span className="text-lg">{item.icon}</span>}
            <span>{item.label}</span>
            {!isMobile && isActive(item.href) && (
              <motion.div
                layoutId="activeTab"
                className="absolute -bottom-1 left-0 right-0 h-0.5 bg-minecraft-emerald"
                initial={false}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            )}
          </Link>
        </motion.div>
      ))}
    </nav>
  );
}
