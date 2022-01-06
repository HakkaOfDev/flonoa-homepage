import { Badge, Box, Heading, HStack, Image, Skeleton, Text, useColorModeValue, VStack } from '@chakra-ui/react'
import NextLink from 'next/link'

const ProjectCard = ({ title, cover, link, tags, date }) => {
  return (
    <Box as='article' cursor='pointer'>
      <NextLink href={link} passHref>
        <VStack
          justifyContent='center'
          alignItems='center'
          rounded='md'
          bg={useColorModeValue('gray.50', 'whiteAlpha.100')}
          overflow='hidden'
          transitionProperty='transform'
          transitionDuration='slow'
          transitionTimingFunction='ease-out'
          _hover={{ transform: 'scale(1.05, 1.05)' }}
        >
          <Image
            w={600}
            h={150}
            alt={title}
            src={cover}
            fit='cover'
            fallback={<Skeleton w={600} h={150} />}
          />
          <VStack p={3} spacing={1} alignItems='flex-start' flex={1} w='full'>
            <HStack spacing={1} w='full' justify='space-between'>
              <Heading isTruncated size='xs'>
                {title}
              </Heading>
              <Badge colorScheme='pink'>{date}</Badge>
            </HStack>
            <Text fontSize='xs' color='customPink' textTransform='uppercase'>
              {tags.join(', ')}
            </Text>
          </VStack>
        </VStack>
      </NextLink>
    </Box>
  )
}

export default ProjectCard