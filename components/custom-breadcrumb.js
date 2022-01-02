import { useTranslation } from 'react-i18next'
import { HStack, Link, Text } from '@chakra-ui/react'
import NextLink from 'next/link'


const CustomBreadcrumb = ({ customPage }) => {
  const { t } = useTranslation()

  return (
    <HStack spacing={4}>
      <NextLink href='/portfolio' passHref>
        <Link _hover={{ color: 'customPink', textDecoration: 'underline' }}>
          {t('navigation.portfolio')}
        </Link>
      </NextLink>
      <Text>/</Text>
      <Text>
        {customPage}
      </Text>
    </HStack>
  )
}

export default CustomBreadcrumb