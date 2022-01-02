import { useTranslation } from 'react-i18next'
import { BiDumbbell } from '@react-icons/all-files/bi/BiDumbbell'
import { FaGavel } from '@react-icons/all-files/fa/FaGavel'
import { FaHandshake } from '@react-icons/all-files/fa/FaHandshake'
import { FaLightbulb } from '@react-icons/all-files/fa/FaLightbulb'
import { FaPodcast } from '@react-icons/all-files/fa/FaPodcast'
import { FaPaintBrush } from '@react-icons/all-files/fa/FaPaintBrush'
import { BiSmile } from '@react-icons/all-files/bi/BiSmile'
import { Heading, HStack, Text, VStack } from '@chakra-ui/react'

const Qualities = () => {
  const { t } = useTranslation()

  const qualities = [
    {
      text: 'pages.about.qualities.athletic',
      icon: <BiDumbbell />
    },
    {
      text: 'pages.about.qualities.persistent',
      icon: <FaGavel />
    },
    {
      text: 'pages.about.qualities.teamwork',
      icon: <FaHandshake />
    },
    {
      text: 'pages.about.qualities.quick_witted',
      icon: <FaLightbulb />
    },
    {
      text: 'pages.about.qualities.attentive',
      icon: <FaPodcast />
    },
    {
      text: 'pages.about.qualities.creative',
      icon: <FaPaintBrush />
    },
    {
      text: 'pages.about.qualities.cheerful',
      icon: <BiSmile />
    }
  ]

  return (
    <VStack as='article' spacing={1}>
      <Heading key='Qualities Title' as='h3'>
        {t('pages.about.qualities.title')}
      </Heading>
      {qualities.map(({ text, icon }) => (
        <HStack key={t(text)} spacing={2} align='center'>
          {icon}
          <Text>{t(text)}</Text>
        </HStack>
      ))}
    </VStack>
  )
}

export default Qualities