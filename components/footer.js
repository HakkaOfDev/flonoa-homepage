import Section from './section'
import { Box, Text } from '@chakra-ui/react'

import { useTranslation } from 'react-i18next'

const Footer = () => {
  const { t } = useTranslation()

  return (
    <Section delay='0.3'>
      <Box align='center' opacity={0.7} fontSize='sm' p={6}>
        &copy; {new Date().getFullYear()} <Text as={'span'} color='customPink'>Florine
        LEROY</Text>. {t('footer.copyright')}
      </Box>
    </Section>
  )
}

export default Footer
