import { useTranslation } from 'react-i18next'
import Layout from '../../components/layouts/article'
import { Heading, Image, Skeleton, Text, VStack } from '@chakra-ui/react'
import CustomBreadcrumb from '../../components/custom-breadcrumb'

const TheGreatestShowman = () => {
  const { t } = useTranslation()

  return (
    <Layout title='The Greatest Showman'>
      <CustomBreadcrumb customPage='The Greatest Showman' />
      <VStack spacing={6}>
        <Heading as='h1'>
          The Greatest Showman
        </Heading>
        <Text align='center'>
          {t('pages.the_greatest_showman.introduction')}
        </Text>
        <Image
          alt='Final'
          src='/projects/the-greatest-showman/illu1.jpg'
          layout='fill'
          fallback={<Skeleton w='full' h='full' />}
        />
        <Text align='center'>
          {t('pages.the_greatest_showman.conclusion')}
        </Text>
        <Image
          alt='Mockup'
          src='/projects/the-greatest-showman/mockup.jpg'
          layout='fill'
          fallback={<Skeleton w='full' h='full' />}
        />
      </VStack>
    </Layout>
  )
}

export default TheGreatestShowman