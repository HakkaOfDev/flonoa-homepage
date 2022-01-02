import NextLink from 'next/link'
import { Box, Button, Divider, Heading, Text } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'
import Layout from '../components/layouts/article'
import Section from '../components/section'

const NotFound = () => {
  const { t } = useTranslation()

  return (
    <Layout title={t('pages.not_found.title')}>
      <Section delay={0.3}>
        <Heading as='h1'>{t('pages.not_found.title')}</Heading>
        <Text>{t('pages.not_found.message')}</Text>
        <Divider my={6} />

        <Box my={6} align='center'>
          <NextLink href='/'>
            <Button colorScheme='pink'>{t('various.return_to_home')}</Button>
          </NextLink>
        </Box>
      </Section>
    </Layout>
  )
}

export default NotFound
