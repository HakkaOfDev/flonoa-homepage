import { Button, HStack, Link } from '@chakra-ui/react'
import { RiBehanceFill } from '@react-icons/all-files/ri/RiBehanceFill'
import { RiLinkedinFill } from '@react-icons/all-files/ri/RiLinkedinFill'
import { RiPinterestFill } from '@react-icons/all-files/ri/RiPinterestFill'
import { RiTwitterFill } from '@react-icons/all-files/ri/RiTwitterFill'
import { RiInstagramFill } from '@react-icons/all-files/ri/RiInstagramFill'

const SocialMedias = () => {
  return (
    <HStack spacing={3}>
      <Link href='https://www.behance.net/leroyfleroy'
            isExternal
      >
        <Button colorScheme='pink' size='lg' variant='outline'>
          <RiBehanceFill />
        </Button>
      </Link>
      <Link href='https://www.linkedin.com/in/florine-leroy/'
            isExternal
      >
        <Button colorScheme='linkedin' size='lg' variant='outline'>
          <RiLinkedinFill />
        </Button>
      </Link>
      <Link href='https://www.pinterest.fr/leroyflorine22'
            isExternal
      >
        <Button colorScheme='red' size='lg' variant='outline'>
          <RiPinterestFill />
        </Button>
      </Link>
      <Link href='https://twitter.com/Leroyflorine1'
            isExternal
      >
        <Button colorScheme='twitter' size='lg' variant='outline'>
          <RiTwitterFill />
        </Button>
      </Link>
      <Link href='https://www.instagram.com/floorineegr/'
            isExternal
      >
        <Button colorScheme='pink' size='lg' variant='outline'>
          <RiInstagramFill />
        </Button>
      </Link>
    </HStack>
  )
}

export default SocialMedias