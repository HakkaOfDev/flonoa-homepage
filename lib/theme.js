import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const styles = {
  global: props => ({
    body: {
      bg: mode('#F7F7FF', '#202023')(props)
    }
  })
}

const components = {
  Heading: {
    variants: {
      'section-title': {
        textDecoration: 'underline',
        fontSize: 20,
        textUnderlineOffset: 6,
        textDecorationColor: '#525252',
        textDecorationThickness: 4,
        marginTop: 3,
        marginBottom: 4
      }
    }
  },
  Link: {
    baseStyle: {
      textUnderlineOffset: 3
    }
  },
  Button: {
    variants: {
      'solid-tag': {
        bgColor: 'customPink',
        color: 'white'
      },
      'ghost-tag': {
        bgColor: 'transparent',
        color: 'customPink'
      }
    }
  }
}

const fonts = {
  heading: '\'M PLUS Rounded 1c\''
}

const colors = {
  customPink: '#F472B6'
}

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: true
}

const theme = extendTheme({ config, styles, components, fonts, colors })
export default theme
