import { Heading, Image, Skeleton, VStack } from '@chakra-ui/react'
import Layout from '../../../components/layouts/article'
import { useTranslation } from 'react-i18next'
import CustomBreadcrumb from '../../../components/custom-breadcrumb'

const Draw = ({ drawtype, id }) => {
  const { t } = useTranslation()
  const title = t('pages.portfolio.tags.' + drawtype) + ' ' + id

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
          src={'/draws/' + drawtype + '/' + id + '/draw.jpg'}
          layout='fill'
          fallback={<Skeleton w='full' h='full' />}
        />
        <Image
          w={{ base: '100%', md: '50%' }}
          alt='Mockup'
          src={'/draws/' + drawtype + '/' + id + '/mockup.jpg'}
          layout='fill'
          fallback={<Skeleton w='full' h='full' />}
        />
      </VStack>
    </Layout>
  )

}

export async function getStaticPaths() {
  const paths = [
    { params: { drawtype: 'illustration', id: '1' } },
    { params: { drawtype: 'illustration', id: '2' } },
    { params: { drawtype: 'illustration', id: '3' } },
    { params: { drawtype: 'pencil', id: '1' } },
    { params: { drawtype: 'pencil', id: '2' } },
    { params: { drawtype: 'pencil', id: '3' } },
    { params: { drawtype: 'liner', id: '1' } },
    { params: { drawtype: 'liner', id: '2' } },
    { params: { drawtype: 'liner', id: '3' } }
  ]

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  return {
    props: {
      ...params
    }
  }
}

export default Draw