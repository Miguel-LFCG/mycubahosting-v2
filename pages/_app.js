import '@styles/globals.css'
import { AnimatePresence } from 'framer-motion'

function Application({ Component, pageProps, router }) {
  return (
    <AnimatePresence mode="wait" initial={false}>
      <Component {...pageProps} key={router.route} />
    </AnimatePresence>
  )
}

export default Application
