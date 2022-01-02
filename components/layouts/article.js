import { motion } from 'framer-motion'
import Head from 'next/head'
import { Container } from '@chakra-ui/react'

const variants = {
  hidden: { opacity: 0, x: 0, y: 20 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: -0, y: 20 }
}

const Layout = ({ children, title }) => (
  <motion.article
    initial='hidden'
    animate='enter'
    exit='exit'
    variants={variants}
    transition={{ duration: 0.4, type: 'easeInOut' }}
    style={{ position: 'relative' }}
  >
    <>
      {title && (
        <Head>
          <title>{title} | Flonoa</title>
          <meta name='twitter:title' content={title} />
          <meta property='og:title' content={title} />
        </Head>
      )}
      <Container mt={20} maxW='container.lg' centerContent>
        {children}
      </Container>
    </>
  </motion.article>
)

export default Layout
