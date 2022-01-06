import { ColorModeScript } from '@chakra-ui/react'
import NextDocument, { Head, Html, Main, NextScript } from 'next/document'
import theme from '../lib/theme'
import '../translations/i18n'

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang='fr'>
        <Head />
        <body>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <Main />
        <NextScript />
        </body>
      </Html>
    )
  }
}
