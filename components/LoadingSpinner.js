import { motion } from 'framer-motion';
import Image from 'next/image';

export default function LoadingSpinner() {
  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
      <div className="text-center">
        <motion.div
          className="w-16 h-16 bg-minecraft-emerald pixel-border flex items-center justify-center text-white text-2xl font-bold mb-4 mx-auto p-2"
          animate={{ 
            rotate: 360,
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 1,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Image
            src="/favicon.svg"
            alt="MyCuba Logo"
            width={48}
            height={48}
            className="w-full h-full object-contain"
          />
        </motion.div>
        <motion.p
          className="text-white font-minecraft text-lg"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ 
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          Loading MyCuba Hosting...
        </motion.p>
      </div>
    </div>
  );
}
