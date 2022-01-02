import { useTranslation } from 'react-i18next'
import Layout from '../../components/layouts/article'
import { Heading, Image, SimpleGrid, Skeleton, Text, VStack } from '@chakra-ui/react'
import CustomBreadcrumb from '../../components/custom-breadcrumb'

const SoundLab = () => {
  const { t } = useTranslation()

  const maquettes = [
    '/projects/soundlab/maquette1.png',
    '/projects/soundlab/maquette2.png',
    '/projects/soundlab/maquette3.png',
    '/projects/soundlab/maquette4.png'
  ]

  const mockups = [
    '/projects/soundlab/mockup3.jpg',
    '/projects/soundlab/mockup1.jpg',
    '/projects/soundlab/mockup2.jpg'
  ]

  return (
    <Layout title='Soundlab'>
      <CustomBreadcrumb customPage='Soundlab' />
      <VStack spacing={6}>
        <Heading as='h1'>
          Soundlab
        </Heading>
        <Text align='center'>
          {t('pages.soundlab.introduction')}
        </Text>

        <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }}
                    gap={12}
                    alignItems='stretch'
                    as='section'>
          {maquettes.map((url) => (
            <VStack key={url} spacing={3}>
              <Image
                alt='Maquette'
                src={url}
                layout='fill'
                fallback={<Skeleton w='full' h='full' />}
              />
            </VStack>
          ))}
        </SimpleGrid>
        <Image
          alt='Final'
          src='/projects/soundlab/illu1.png'
          layout='fill'
          fallback={<Skeleton w='full' h='full' />}
        />
        <Text align='center'>
          {t('pages.soundlab.conclusion')}
        </Text>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }}
                    gap={12}
                    alignItems='stretch'
                    as='section'>
          {mockups.map((url) => (
            <VStack key={url} spacing={3}>
              <Image
                alt='Maquette'
                src={url}
                layout='fill'
                fallback={<Skeleton w='full' h='full' />}
              />
            </VStack>
          ))}
        </SimpleGrid>
      </VStack>
    </Layout>
  )
}

export default SoundLab