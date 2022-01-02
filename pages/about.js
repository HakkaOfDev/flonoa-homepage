import Layout from '../components/layouts/article'
import {
  AspectRatio,
  Box,
  Button,
  Divider,
  Heading,
  Image,
  Link,
  Skeleton,
  Stack,
  Text,
  VStack
} from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'
import SocialMedias from '../components/social-medias'
import Qualities from '../components/qualities'
import Langs from '../components/langs'
import Skills from '../components/skills/skills'

const About = () => {
  const { t } = useTranslation()

  return (
    <Layout title={t('navigation.about')}>
      <VStack spacing={20}>
        <Stack direction={{ base: 'column', md: 'row' }} spacing={{ base: 6, md: 12 }} p={{ base: 0, md: 6 }}
               justify='center'
               align='center'>
          <Box w={{ base: '100%', md: '50%' }}>
            <AspectRatio ratio={16 / 9} w='full'>
              <Image
                alt='Avatar'
                src='/images/avatar.jpg'
                layout='cover'
                rounded='md'
                w={200} h={200}
                fallback={<Skeleton w='full' h='full' />}
              />
            </AspectRatio>
          </Box>
          <VStack spacing={3} w={{ base: '100%', md: '50%' }}>
            <Heading as='h1'>
              Florine <Text as={'span'} color='customPink'>LEROY</Text>
            </Heading>
            <Divider orientation='horizontal' w={10} h={1} rounded='lg' bgColor='customPink' />
            <Text align='center'>
              {t('pages.home.introduction')}
            </Text>
            <SocialMedias />
          </VStack>
        </Stack>
        <Stack direction={{ base: 'column', md: 'row' }} spacing={{ base: 6, md: 12 }} px={{ base: 0, md: 6 }}>
          <Skills />
          <VStack spacing={3}>
            <Link href='/lib/CV.pdf' isExternal>
              <Button colorScheme='pink' variant='solid'>
                {t('pages.about.cv')}
              </Button>
            </Link>
            <Qualities />
            <Langs />
          </VStack>
        </Stack>
      </VStack>
    </Layout>
  )
}

export default About