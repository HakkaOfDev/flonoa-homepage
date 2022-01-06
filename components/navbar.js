import Logo from './logo'
import NextLink from 'next/link'
import {
  Box,
  Container,
  Flex,
  IconButton,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Spacer,
  Stack,
  useColorModeValue
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import LangSwitcherButton from './lang-switcher-button'
import ThemeToggleButton from './theme-toggle-button'
import { useTranslation } from 'react-i18next'
import { FcHome } from '@react-icons/all-files/fc/FcHome'
import { FcCloseUpMode } from '@react-icons/all-files/fc/FcCloseUpMode'
import { FcEditImage } from '@react-icons/all-files/fc/FcEditImage'
import { FcFeedback } from '@react-icons/all-files/fc/FcFeedback'


const LinkItem = ({ href, path, icon, _target, children, ...props }) => {
  const active = path === href
  const inactiveColor = useColorModeValue('gray200', 'whiteAlpha.900')
  return (
    <NextLink href={href} passHref>
      <Link
        p={2}
        textDecoration={'none'}
        display='flex'
        alignItems='center'
        _hover={active ? '' : { color: 'customPink' }}
        color={active ? 'customPink' : inactiveColor}
        _target={_target}
        {...props}
      >
        {icon}
        <Spacer width={1} />
        {children}
      </Link>
    </NextLink>
  )
}

const Navbar = props => {
  const { path } = props
  const { t } = useTranslation()

  return (
    <Box
      position='fixed'
      as='nav'
      w='100%'
      px={6}
      bg={useColorModeValue('#ffffff90', '#20202390')}
      sx={{ backdropFilter: 'blur(10px)' }}
      borderBottom='2px'
      borderColor='customPink'
      zIndex={1}
      {...props}
    >
      <Container
        display='flex'
        p={2}
        maxW='container.lg'
        wrap='wrap'
        align='center'
        justify='space-between'
      >
        <Flex mr={6}>
          <Logo />
        </Flex>

        <Stack
          direction={{ base: 'column', md: 'row' }}
          display={{ base: 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          alignItems='center'
          justifyContent='center'
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
        >
          <LinkItem href='/' path={path} icon={<FcHome />}>
            {t('navigation.home')}
          </LinkItem>
          <LinkItem href='/portfolio' path={path} icon={<FcEditImage />}>
            {t('navigation.portfolio')}
          </LinkItem>
          <LinkItem href='/about' path={path} icon={<FcCloseUpMode />}>
            {t('navigation.about')}
          </LinkItem>
          <LinkItem href='/contact' path={path} icon={<FcFeedback />}>
            {t('navigation.contact')}
          </LinkItem>
        </Stack>

        <Box flex={1} display='inline-flex' justifyContent='end'
             alignItems='center'>
          <LangSwitcherButton />
          <ThemeToggleButton />

          <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
            <Menu isLazy id='navbar-menu'>
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant='outline'
                aria-label='Options'
              />
              <MenuList>
                <NextLink href='/' passHref>
                  <MenuItem as={Link} icon={<FcHome />}>{t('navigation.home')}</MenuItem>
                </NextLink>
                <NextLink href='/portfolio' passHref>
                  <MenuItem as={Link} icon={<FcEditImage />}>{t('navigation.portfolio')}</MenuItem>
                </NextLink>
                <NextLink href='/about' passHref>
                  <MenuItem as={Link} icon={<FcCloseUpMode />}>{t('navigation.about')}</MenuItem>
                </NextLink>
                <NextLink href='/contact' passHref>
                  <MenuItem as={Link} icon={<FcFeedback />}>{t('navigation.contact')}</MenuItem>
                </NextLink>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Navbar
