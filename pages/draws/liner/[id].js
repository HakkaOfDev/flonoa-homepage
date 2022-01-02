import { useRouter } from 'next/router'
import { Heading, Image, Skeleton, VStack } from '@chakra-ui/react'
import Layout from '../../../components/layouts/article'
import { useTranslation } from 'react-i18next'
import CustomBreadcrumb from '../../../components/custom-breadcrumb'

const Liner = () => {
  const router = useRouter()
  const { id } = router.query
  const { t } = useTranslation()

  const title = t('pages.portfolio.tags.liner') + ' ' + id

  return (
    <Layout title={title}>
      <CustomBreadcrumb customPage={title} />
      <VStack spacing={6}>
        <Heading as='h1'>
          {title}
        </Heading>
        <Image
          w={{ base: '100%', md: '50%' }}
          alt='Draw'
          src={'/draws/liner/' + id + '/draw.jpg'}
          layout='fill'
          fallback={<Skeleton />}
        />
        <Image
          w={{ base: '100%', md: '50%' }}
          alt='Mockup'
          src={'/draws/liner/' + id + '/mockup.jpg'}
          layout='fill'
          fallback={<Skeleton />}
        />
      </VStack>
    </Layout>
  )

}

export default Liner