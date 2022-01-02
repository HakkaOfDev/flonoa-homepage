import { useTranslation } from 'react-i18next'
import Layout from '../../components/layouts/article'
import { Heading, Image, Skeleton, Text, VStack } from '@chakra-ui/react'
import CustomBreadcrumb from '../../components/custom-breadcrumb'

const PaperCouv = () => {
  const { t } = useTranslation()

  return (
    <Layout title='Paper Couv&apos;'>
      <CustomBreadcrumb customPage='Paper Couv&apos;' />
      <VStack spacing={6}>
        <Heading as='h1'>
          Paper Couv&apos;
        </Heading>
        <Text align='center'>
          {t('pages.paper_couv.introduction')}
        </Text>
        <Image
          alt='Final'
          src='/projects/paper-couv/illu1.jpg'
          layout='fill'
          fallback={<Skeleton />}
        />
        <Text align='center'>
          {t('pages.paper_couv.conclusion')}
        </Text>
      </VStack>
    </Layout>
  )
}

export default PaperCouv