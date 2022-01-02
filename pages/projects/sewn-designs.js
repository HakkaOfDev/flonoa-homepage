import { useTranslation } from 'react-i18next'
import Layout from '../../components/layouts/article'
import { Heading, Image, SimpleGrid, Skeleton, Text, VStack } from '@chakra-ui/react'
import CustomBreadcrumb from '../../components/custom-breadcrumb'

const SewnDesigns = () => {
  const { t } = useTranslation()

  const designs = [
    {
      text: 'pages.sewn_designs.text1',
      cover: '/projects/sewn-designs/illu2.png'
    },
    {
      text: 'pages.sewn_designs.text2',
      cover: '/projects/sewn-designs/illu3.png'
    },
    {
      text: 'pages.sewn_designs.text3',
      cover: '/projects/sewn-designs/illu1.png'
    }
  ]

  return (
    <Layout title='Sewn Designs'>
      <CustomBreadcrumb customPage='Sewn Designs' />
      <VStack spacing={6}>
        <Heading as='h1'>
          Sewn Designs
        </Heading>
        <Text align='center'>
          {t('pages.sewn_designs.introduction')}
        </Text>

        <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }}
                    gap={12}
                    alignItems='stretch'
                    as='section'>
          {designs.map(({ text, cover }) => (
            <VStack key={t(text)} spacing={3}>
              <Image
                alt='Design'
                src={cover}
                layout='fill'
                fallback={<Skeleton w='full' h='full' />}
              />
              <Text align='center'>{t(text)}</Text>
            </VStack>
          ))}
        </SimpleGrid>
      </VStack>
    </Layout>
  )
}

export default SewnDesigns