import { useTranslation } from 'react-i18next'
import Layout from '../../components/layouts/article'
import { Heading, Image, SimpleGrid, Skeleton, Text, VStack } from '@chakra-ui/react'
import CustomBreadcrumb from '../../components/custom-breadcrumb'

const CreativeShapes = () => {
  const { t } = useTranslation()

  const mockups = [
    '/projects/creative-shapes/mockup1.jpg',
    '/projects/creative-shapes/mockup2.jpg',
    '/projects/creative-shapes/mockup3.jpg'
  ]

  return (
    <Layout title='Creative Shapes'>
      <CustomBreadcrumb customPage='Creative Shapes' />
      <VStack spacing={6}>
        <Heading as='h1'>
          Creative Shapes
        </Heading>
        <Text align='center'>
          {t('pages.creative_shapes.introduction')}
        </Text>
        <Image
          alt='Experiences'
          src='/projects/creative-shapes/maquette1.jpg'
          layout='fill'
          fallback={<Skeleton w='full' h='full' />}
        />
        <Text align='center'>
          {t('pages.creative_shapes.text1')}
        </Text>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }}
                    gap={12}
                    alignItems='stretch'
                    as='section'>
          {mockups.map((url) => (
            <VStack key={url} spacing={3}>
              <Image
                alt='Mockup'
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

export default CreativeShapes