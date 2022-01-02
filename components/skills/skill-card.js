import { Box, Heading, HStack, Text, useColorModeValue, VStack } from '@chakra-ui/react'
import NextLink from 'next/link'

const SkillCard = ({ title, description, icon, link, tags }) => {
  return (
    <Box as='article' cursor='pointer'>
      <NextLink href={link} passHref>
        <VStack
          spacing={0}
          justifyContent={{ base: 'center', md: 'flex-start' }}
          alignItems='center'
          rounded='md'
          bg={useColorModeValue('gray.50', 'whiteAlpha.100')}
          overflow='hidden'
          transitionProperty='transform'
          transitionDuration='slow'
          transitionTimingFunction='ease-out'
          _hover={{ transform: 'scale(1.05, 1.05)' }}
        >
          <VStack p={3} spacing={1} alignItems='flex-start' flex={1} w='full'>
            <HStack spacing={2} color='customPink'>
              {icon}
              <Heading size='sm'>
                {title}
              </Heading>
            </HStack>
            <Text fontSize='xs'>{description}</Text>
            <Text fontSize='xs' color='customPink' textTransform='uppercase'>
              {tags.join(', ')}
            </Text>
          </VStack>
        </VStack>
      </NextLink>
    </Box>
  )
}

export default SkillCard