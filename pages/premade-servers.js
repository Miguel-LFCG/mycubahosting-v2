import Head from 'next/head';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { FaSearch, FaDownload, FaUsers, FaCog, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import Header from '@components/Header';
import Footer from '@components/Footer';
import { useTranslation } from '@/hooks/useTranslation';

// Mock data for premade servers
const mockServers = [
  {
    id: 1,
    name: "Vanilla Survival",
    image: "/server-thumbnails/vanilla.jpg",
    version: "1.20.1",
    maxPlayers: 20,
    mods: 0,
    category: "Vanilla",
    description: "Pure vanilla Minecraft survival experience with no modifications. Perfect for players who want the authentic Minecraft experience.",
    features: [
      "100% Vanilla gameplay",
      "Anti-grief protection",
      "Regular backups",
      "24/7 uptime"
    ],
    requirements: {
      ram: "2GB",
      storage: "5GB",
      players: "Up to 20"
    }
  },
  {
    id: 2,
    name: "Modded Tech Pack",
    image: "/server-thumbnails/tech.jpg",
    version: "1.19.2",
    maxPlayers: 15,
    mods: 150,
    category: "Modded",
    description: "Advanced technology-focused modpack featuring industrial automation, energy systems, and complex machinery.",
    features: [
      "Industrial Craft 2",
      "Thermal Expansion",
      "Applied Energistics 2",
      "Mekanism",
      "Tinkers' Construct"
    ],
    requirements: {
      ram: "6GB",
      storage: "15GB",
      players: "Up to 15"
    }
  },
  {
    id: 3,
    name: "Magic & Adventure",
    image: "/server-thumbnails/magic.jpg",
    version: "1.20.1",
    maxPlayers: 25,
    mods: 80,
    category: "Magic",
    description: "Mystical adventure pack with magic mods, dungeons, and RPG elements for an enchanting experience.",
    features: [
      "Botania",
      "Thaumcraft",
      "Dungeon crawling",
      "Custom quests",
      "RPG progression"
    ],
    requirements: {
      ram: "4GB",
      storage: "10GB",
      players: "Up to 25"
    }
  },
  {
    id: 4,
    name: "Creative Building",
    image: "/server-thumbnails/creative.jpg",
    version: "1.20.1",
    maxPlayers: 50,
    mods: 30,
    category: "Creative",
    description: "Ultimate building experience with architectural mods, decoration blocks, and creative tools.",
    features: [
      "Chisel & Bits",
      "ArchitectureCraft",
      "Decocraft",
      "WorldEdit",
      "Building gadgets"
    ],
    requirements: {
      ram: "3GB",
      storage: "8GB",
      players: "Up to 50"
    }
  },
  {
    id: 5,
    name: "PvP Arena",
    image: "/server-thumbnails/pvp.jpg",
    version: "1.20.1",
    maxPlayers: 30,
    mods: 20,
    category: "PvP",
    description: "Competitive PvP server with custom arenas, balanced combat, and tournament systems.",
    features: [
      "Custom PvP arenas",
      "Balanced weapons",
      "Tournament system",
      "Ranking system",
      "Anti-cheat protection"
    ],
    requirements: {
      ram: "4GB",
      storage: "6GB",
      players: "Up to 30"
    }
  },
  {
    id: 6,
    name: "Skyblock Adventures",
    image: "/server-thumbnails/skyblock.jpg",
    version: "1.20.1",
    maxPlayers: 20,
    mods: 40,
    category: "Skyblock",
    description: "Enhanced skyblock experience with custom challenges, economy, and island features.",
    features: [
      "Custom challenges",
      "Island economy",
      "Co-op islands",
      "Regular events",
      "Achievement system"
    ],
    requirements: {
      ram: "3GB",
      storage: "7GB",
      players: "Up to 20"
    }
  }
];

export default function PremadeServers() {
  const { t } = useTranslation();
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedServer, setExpandedServer] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Vanilla', 'Modded', 'Magic', 'Creative', 'PvP', 'Skyblock'];

  const filteredServers = mockServers.filter(server => {
    const matchesSearch = server.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         server.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || server.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const toggleExpanded = (serverId) => {
    setExpandedServer(expandedServer === serverId ? null : serverId);
  };

  return (
    <>
      <Head>
        <title>{`${t('premadeServersTitle')} - MyCuba Hosting`}</title>
        <meta name="description" content={t('premadeServersSubtitle')} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
        <Header />
        
        <main className="pt-20">
          {/* Hero Section */}
          <section className="py-20 px-4">
            <div className="container mx-auto text-center">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-5xl md:text-6xl font-bold text-white font-minecraft mb-6"
              >
                {t('premadeServersTitle')}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xl text-gray-300 max-w-3xl mx-auto"
              >
                {t('premadeServersSubtitle')}
              </motion.p>
            </div>
          </section>

          {/* Search and Filter Section */}
          <section className="px-4 pb-8">
            <div className="container mx-auto">
              <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-8">
                {/* Search Bar */}
                <div className="relative flex-1 max-w-md">
                  <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder={t('searchPlaceholder')}
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-minecraft-emerald focus:outline-none"
                  />
                </div>

                {/* Category Filter */}
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                        selectedCategory === category
                          ? 'bg-minecraft-emerald text-white'
                          : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Servers Grid */}
          <section className="px-4 pb-20">
            <div className="container mx-auto">
              {filteredServers.length === 0 ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-20"
                >
                  <p className="text-xl text-gray-400">{t('noServersFound')}</p>
                </motion.div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredServers.map((server, index) => (
                    <motion.div
                      key={server.id}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700 hover:border-minecraft-emerald transition-all duration-300"
                    >
                      {/* Server Image */}
                      <div className="h-48 bg-gradient-to-r from-minecraft-emerald to-green-600 flex items-center justify-center">
                        <div className="text-white text-6xl">
                          {server.category === 'Vanilla' && '⛏️'}
                          {server.category === 'Modded' && '⚙️'}
                          {server.category === 'Magic' && '🔮'}
                          {server.category === 'Creative' && '🏗️'}
                          {server.category === 'PvP' && '⚔️'}
                          {server.category === 'Skyblock' && '🏝️'}
                        </div>
                      </div>

                      {/* Server Info */}
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-white mb-2">{server.name}</h3>
                        <p className="text-gray-400 mb-4 line-clamp-2">{server.description}</p>

                        {/* Server Stats */}
                        <div className="flex items-center justify-between text-sm text-gray-300 mb-4">
                          <div className="flex items-center space-x-1">
                            <FaCog className="text-minecraft-emerald" />
                            <span>{server.version}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <FaUsers className="text-minecraft-emerald" />
                            <span>{server.maxPlayers}</span>
                          </div>
                          <div className="text-minecraft-emerald">
                            {server.mods} mods
                          </div>
                        </div>

                        {/* Expand Button */}
                        <button
                          onClick={() => toggleExpanded(server.id)}
                          className="w-full flex items-center justify-center space-x-2 py-2 text-minecraft-emerald hover:text-white transition-colors duration-200 mb-4"
                        >
                          <span>{expandedServer === server.id ? t('showLess') : t('showMore')}</span>
                          {expandedServer === server.id ? <FaChevronUp /> : <FaChevronDown />}
                        </button>

                        {/* Expanded Content */}
                        <AnimatePresence>
                          {expandedServer === server.id && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                              className="overflow-hidden"
                            >
                              <div className="border-t border-gray-700 pt-4 mb-4">
                                <h4 className="text-white font-semibold mb-2">Features:</h4>
                                <ul className="text-gray-300 text-sm space-y-1">
                                  {server.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-center space-x-2">
                                      <span className="w-1 h-1 bg-minecraft-emerald rounded-full"></span>
                                      <span>{feature}</span>
                                    </li>
                                  ))}
                                </ul>

                                <h4 className="text-white font-semibold mt-4 mb-2">Requirements:</h4>
                                <div className="text-gray-300 text-sm space-y-1">
                                  <p>RAM: {server.requirements.ram}</p>
                                  <p>Storage: {server.requirements.storage}</p>
                                  <p>Players: {server.requirements.players}</p>
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>

                        {/* Install Button */}
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="w-full minecraft-button flex items-center justify-center space-x-2"
                        >
                          <FaDownload />
                          <span>{t('installServer')}</span>
                        </motion.button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}
