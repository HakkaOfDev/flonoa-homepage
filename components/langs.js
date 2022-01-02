import { useTranslation } from 'react-i18next'
import { Heading, HStack, Image, Text, VStack } from '@chakra-ui/react'

const Langs = () => {
  const { t } = useTranslation()

  const langs = [
    {
      flag: '/images/flags/fr.png',
      text: 'pages.about.langs.french.text',
      level: 'pages.about.langs.french.level'
    },
    {
      flag: '/images/flags/en.png',
      text: 'pages.about.langs.english.text',
      level: 'pages.about.langs.english.level'
    }
  ]

  return (
    <VStack>
      <Heading as='h3'>
        {t('pages.about.langs.title')}
      </Heading>
      {langs.map(({ flag, text, level }) => (
        <HStack as='article' key={t(text)}>
          <Image src={flag} width={50} height={50} alt={t(text)} rounded='full' />
          <VStack spacing={0} align='start'>
            <Text>{t(text)}</Text>
            <Text fontSize='xs' color='customPink' textTransform='uppercase'>{t(level)}</Text>
          </VStack>
        </HStack>
      ))}
    </VStack>
  )
}

export default Langs