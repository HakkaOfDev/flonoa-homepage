import { useTranslation } from 'react-i18next'
import Layout from '../../components/layouts/article'
import { Heading, Image, SimpleGrid, Skeleton, Text, VStack } from '@chakra-ui/react'
import CustomBreadcrumb from '../../components/custom-breadcrumb'

const InsectStyle = () => {
  const { t } = useTranslation()

  const maquettes = [
    {
      text: 'pages.insect_style.maquette1',
      cover: '/projects/insect-style/maquette1.png'
    },
    {
      text: 'pages.insect_style.maquette2',
      cover: '/projects/insect-style/maquette2.png'
    },
    {
      text: 'pages.insect_style.maquette3',
      cover: '/projects/insect-style/maquette3.png'
    }
  ]

  return (
    <Layout title='Insect Style'>
      <CustomBreadcrumb customPage='Insect Style' />
      <VStack spacing={6}>
        <Heading as='h1'>
          Insect Style
        </Heading>
        <Text align='center'>
          {t('pages.insect_style.introduction')}
        </Text>

        <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }}
                    gap={12}
                    alignItems='stretch'
                    as='section'>
          {maquettes.map(({ text, cover }) => (
            <VStack key={t(text)} spacing={3}>
              <Image
                alt='Maquette'
                src={cover}
                layout='fill'
                fallback={<Skeleton w='full' h='full' />}
              />
              <Text align='center'>{t(text)}</Text>
            </VStack>
          ))}
        </SimpleGrid>
        <Image
          alt='Final'
          src='/projects/insect-style/illu1.jpg'
          layout='fill'
          fallback={<Skeleton w='full' h='full' />}
        />
        <Text align='center'>
          {t('pages.insect_style.conclusion')}
        </Text>
        <Image
          alt='Mockup'
          src='/projects/insect-style/mockup.jpg'
          layout='fill'
          fallback={<Skeleton w='full' h='full' />}
        />
      </VStack>
    </Layout>
  )
}

export default InsectStyle