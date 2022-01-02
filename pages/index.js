import Layout from '../components/layouts/article'
import { Box, Button, Heading, Image, Text, VStack } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'
import Section from '../components/section'
import { BiArrowToRight } from '@react-icons/all-files/bi/BiArrowToRight'
import NextLink from 'next/link'

const Home = () => {
  const { t } = useTranslation()

  return (
    <Layout title={t('navigation.home')}>
      <VStack alignItems='center' flexGrow={1}>
        <Section delay='0.3'>
          <Box display='flex'
               flexDirection={{ base: 'column', md: 'row' }}
               justifyContent='center'
               alignItems='center'>
            <VStack spacing={4} textAlign='center' w={{ base: '100%', md: '50%', lg: '65%' }}>
              <Heading as='h1'>
                Florine <Text as={'span'} color='customPink'>LEROY</Text>
              </Heading>
              <Text>
                {t('pages.home.introduction')}
              </Text>
              <NextLink href='/portfolio' passHref>
                <Button rightIcon={<BiArrowToRight />}
                        borderRadius='full'
                        color='customPink'
                        bgColor='transparent'
                        border='2px solid'
                        borderColor='customPink'
                        _hover={{ bgColor: 'customPink', color: 'white' }}>
                  {t('various.discover_me')}
                </Button>
              </NextLink>
            </VStack>
            <Box p={8} w={{ base: '100%', md: '50%', lg: '35%' }} display='flex' justifyContent='center'>
              <Image src='/images/home3.jpg' height='50vh' alt='Thumbnail Home' shadow='lg' rounded='lg' />
            </Box>
          </Box>
        </Section>
      </VStack>
    </Layout>
  )
}

export default Home
