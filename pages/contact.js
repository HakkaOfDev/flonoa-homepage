import Layout from '../components/layouts/article'
import { Heading, HStack, Text, VStack } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'
import { GrMail } from '@react-icons/all-files/gr/GrMail'
import { ImLocation2 } from '@react-icons/all-files/im/ImLocation2'
import SocialMedias from '../components/social-medias'

const Contact = () => {
  const { t } = useTranslation()

  return (
    <Layout title={t('navigation.contact')}>
      <VStack spacing={6}>
        <Heading as='h1'>
          {t('navigation.contact')}
        </Heading>
        <VStack spacing={2}>
          <HStack spacing={2}>
            <GrMail />
            <Text>contact@flonoa.fr</Text>
          </HStack>
          <HStack spacing={2}>
            <ImLocation2 />
            <Text>Marne, France</Text>
          </HStack>
        </VStack>
        <SocialMedias />
      </VStack>
    </Layout>
  )
}

export default Contact