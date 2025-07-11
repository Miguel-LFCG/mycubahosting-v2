import Head from 'next/head';
import { motion } from 'framer-motion';
import { FaDiscord, FaUsers, FaCrown, FaGamepad, FaExternalLinkAlt } from 'react-icons/fa';
import Header from '@components/Header';
import Footer from '@components/Footer';
import { useTranslation } from '@/hooks/useTranslation';

// Mock data for hosted servers
const hostedServers = [
  {
    id: 1,
    name: "CubaCraft Survival",
    owner: "CubaAdmin",
    discordLink: "https://discord.gg/cubacraft",
    members: 1250,
    type: "Survival",
    description: "The main CubaCraft survival server with custom plugins and an active community.",
    features: [
      "Custom economy system",
      "Player-run shops",
      "Land protection",
      "Weekly events"
    ],
    status: "online",
    playerCount: 45
  },
  {
    id: 2,
    name: "TechnoVerse Modded",
    owner: "TechMaster",
    discordLink: "https://discord.gg/technoverse",
    members: 890,
    type: "Modded",
    description: "Advanced technology modpack server focused on automation and engineering.",
    features: [
      "Industrial automation",
      "Energy systems",
      "Custom recipes",
      "Tech progression"
    ],
    status: "online",
    playerCount: 23
  },
  {
    id: 3,
    name: "MysticRealm RPG",
    owner: "MysticWizard",
    discordLink: "https://discord.gg/mysticroalm",
    members: 2100,
    type: "RPG",
    description: "Fantasy RPG server with custom classes, quests, and immersive storylines.",
    features: [
      "Custom classes",
      "Quest system",
      "Dungeons & raids",
      "Character progression"
    ],
    status: "online",
    playerCount: 67
  },
  {
    id: 4,
    name: "BuildCraft Creative",
    owner: "BuildMaster",
    discordLink: "https://discord.gg/buildcraft",
    members: 560,
    type: "Creative",
    description: "Creative building server with WorldEdit, custom plots, and building competitions.",
    features: [
      "WorldEdit access",
      "Plot system",
      "Building contests",
      "Showcase gallery"
    ],
    status: "online",
    playerCount: 15
  },
  {
    id: 5,
    name: "PvP Warriors Arena",
    owner: "WarriorKing",
    discordLink: "https://discord.gg/pvpwarriors",
    members: 750,
    type: "PvP",
    description: "Competitive PvP server with tournaments, rankings, and custom arenas.",
    features: [
      "Ranked matches",
      "Tournament system",
      "Custom arenas",
      "Leaderboards"
    ],
    status: "maintenance",
    playerCount: 0
  },
  {
    id: 6,
    name: "SkyIsland Adventures",
    owner: "SkyMaster",
    discordLink: "https://discord.gg/skyisland",
    members: 430,
    type: "Skyblock",
    description: "Enhanced skyblock server with custom challenges and cooperative gameplay.",
    features: [
      "Co-op islands",
      "Custom challenges",
      "Island economy",
      "Achievement system"
    ],
    status: "online",
    playerCount: 31
  },
  {
    id: 7,
    name: "RetroPixel Vanilla",
    owner: "PixelGamer",
    discordLink: "https://discord.gg/retropixel",
    members: 320,
    type: "Vanilla",
    description: "Pure vanilla experience with minimal plugins and tight-knit community.",
    features: [
      "100% vanilla gameplay",
      "Community builds",
      "Regular events",
      "Friendly atmosphere"
    ],
    status: "online",
    playerCount: 18
  },
  {
    id: 8,
    name: "HyperCraft Network",
    owner: "HyperAdmin",
    discordLink: "https://discord.gg/hypercraft",
    members: 1800,
    type: "Network",
    description: "Multi-server network with various game modes and cross-server features.",
    features: [
      "Multiple game modes",
      "Cross-server chat",
      "Shared economy",
      "Network-wide events"
    ],
    status: "online",
    playerCount: 95
  }
];

export default function OurServers() {
  const { t } = useTranslation();

  const getStatusColor = (status) => {
    switch (status) {
      case 'online':
        return 'text-green-400';
      case 'maintenance':
        return 'text-yellow-400';
      case 'offline':
        return 'text-red-400';
      default:
        return 'text-gray-400';
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'online':
        return 'Online';
      case 'maintenance':
        return 'Maintenance';
      case 'offline':
        return 'Offline';
      default:
        return 'Unknown';
    }
  };

  const getTypeIcon = (type) => {
    switch (type) {
      case 'Survival':
        return '⛏️';
      case 'Modded':
        return '⚙️';
      case 'RPG':
        return '🗡️';
      case 'Creative':
        return '🏗️';
      case 'PvP':
        return '⚔️';
      case 'Skyblock':
        return '🏝️';
      case 'Vanilla':
        return '🍦';
      case 'Network':
        return '🌐';
      default:
        return '🎮';
    }
  };

  return (
    <>
      <Head>
        <title>{`${t('ourServersTitle')} - MyCuba Hosting`}</title>
        <meta name="description" content={t('ourServersSubtitle')} />
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
                {t('ourServersTitle')}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xl text-gray-300 max-w-3xl mx-auto"
              >
                {t('ourServersSubtitle')}
              </motion.p>
            </div>
          </section>

          {/* Servers List */}
          <section className="px-4 pb-20">
            <div className="container mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {hostedServers.map((server, index) => (
                  <motion.div
                    key={server.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-gray-800 rounded-lg border border-gray-700 hover:border-minecraft-emerald transition-all duration-300 overflow-hidden"
                  >
                    {/* Server Header */}
                    <div className="bg-gradient-to-r from-minecraft-emerald/20 to-green-600/20 p-6 border-b border-gray-700">
                      <div className="flex items-start justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="text-3xl">
                            {getTypeIcon(server.type)}
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-white">{server.name}</h3>
                            <div className="flex items-center space-x-2 text-sm text-gray-300">
                              <FaCrown className="text-yellow-400" />
                              <span>{server.owner}</span>
                            </div>
                          </div>
                        </div>
                        <div className={`text-sm font-medium ${getStatusColor(server.status)}`}>
                          {getStatusText(server.status)}
                        </div>
                      </div>
                    </div>

                    {/* Server Info */}
                    <div className="p-6">
                      <p className="text-gray-300 mb-4 line-clamp-3">{server.description}</p>

                      {/* Server Stats */}
                      <div className="grid grid-cols-3 gap-4 mb-4">
                        <div className="text-center">
                          <div className="flex items-center justify-center space-x-1 text-minecraft-emerald">
                            <FaUsers />
                            <span className="text-sm">{server.members}</span>
                          </div>
                          <p className="text-xs text-gray-400 mt-1">Members</p>
                        </div>
                        <div className="text-center">
                          <div className="flex items-center justify-center space-x-1 text-blue-400">
                            <FaGamepad />
                            <span className="text-sm">{server.playerCount}</span>
                          </div>
                          <p className="text-xs text-gray-400 mt-1">Online</p>
                        </div>
                        <div className="text-center">
                          <div className="text-purple-400 text-sm font-medium">
                            {server.type}
                          </div>
                          <p className="text-xs text-gray-400 mt-1">Type</p>
                        </div>
                      </div>

                      {/* Features */}
                      <div className="mb-6">
                        <h4 className="text-white font-semibold mb-2 text-sm">Features:</h4>
                        <div className="grid grid-cols-2 gap-1">
                          {server.features.slice(0, 4).map((feature, idx) => (
                            <div key={idx} className="flex items-center space-x-2 text-xs text-gray-300">
                              <span className="w-1 h-1 bg-minecraft-emerald rounded-full"></span>
                              <span className="truncate">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Discord Button */}
                      <motion.a
                        href={server.discordLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-full minecraft-button flex items-center justify-center space-x-2 bg-discord hover:bg-discord-dark"
                      >
                        <FaDiscord />
                        <span>{t('joinDiscordServer')}</span>
                        <FaExternalLinkAlt className="text-xs" />
                      </motion.a>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Call to Action */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="text-center mt-16 p-8 bg-gray-800 rounded-lg border border-gray-700"
              >
                <h2 className="text-3xl font-bold text-white mb-4">Want to host your server with us?</h2>
                <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                  Join the MyCuba Hosting family and get your server featured here! 
                  We provide reliable hosting, 24/7 support, and help you grow your community.
                </p>
                <motion.a
                  href="https://discord.gg/7QEvxcBvBK"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="minecraft-button inline-flex items-center space-x-2"
                >
                  <FaDiscord />
                  <span>Contact Us on Discord</span>
                </motion.a>
              </motion.div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}
