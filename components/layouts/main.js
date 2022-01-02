import Head from 'next/head'
import NavBar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
import Footer from '../footer'

const Main = ({ children, router }) => {
  return (
    <Box as='main' pb={8}>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='description'
              content="Bonjour à toi, je suis Florine LEROY, mon site a été creer dans le but que vous puissiez me découvrir autant professionnellement que personnellement. En espérant qu'il vous plaira, une bonne année !" />
        <meta name='author' content='hakkaofdev' />
        <link rel='shortcut icon' href='/favicon.ico' type='image/x-icon' />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@Leroyflorine1' />
        <meta name='twitter:creator' content='@Leroyflorine1' />
        <meta name='twitter:image' content='/images/avatar.jpg' />
        <meta property='og:site_name' content='Florine LEROY | www.flonoa.fr' />
        <meta property='og:type' content='website' />
        <meta property='og:description' content="Bonjour à toi, je suis Florine LEROY, mon site a été creer dans le but que vous puissiez me découvrir autant professionnellement que personnellement. En espérant qu'il vous plaira, une bonne année !" />
        <meta property='og:image' content='/images/avatar.png' />
        <title>www.flonoa.fr</title>
      </Head>

      <NavBar path={router.asPath} />

      <Container maxW='container.lg' pt={14}>

        {children}

        <Footer />
      </Container>
    </Box>
  )
}

export default Main
