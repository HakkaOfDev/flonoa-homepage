import Link from 'next/link'
import Image from 'next/image'
import styled from '@emotion/styled'
import { Skeleton } from '@chakra-ui/react'

const LogoBox = styled.span`
  display: inline-flex;
  align-items: center;
  padding: 2px;

  img {
    transition: 500ms ease;
  }

  &:hover img {
    transform: rotate(5deg);
  }
`

const Logo = () => {
  const pathImg = '/logo.png'

  return (
    <Link href='/'>
      <a>
        <LogoBox>
          <Image src={pathImg}
                 width={150}
                 height={50}
                 fallback={<Skeleton w='full' h='full' />}
                 alt='logo' />
        </LogoBox>
      </a>
    </Link>
  )
}

export default Logo
