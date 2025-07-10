import '@styles/globals.css'
import { AnimatePresence } from 'framer-motion'
import { LanguageProvider } from '@/contexts/LanguageContext'

function Application({ Component, pageProps, router }) {
  return (
    <LanguageProvider>
      <AnimatePresence mode="wait" initial={false}>
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
    </LanguageProvider>
  )
}

export default Application
