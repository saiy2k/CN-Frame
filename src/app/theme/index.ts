import { defineStyleConfig, ChakraTheme, DeepPartial, extendTheme, withDefaultColorScheme } from '@chakra-ui/react'
import { Dancing_Script, Inter, Raleway } from '@next/font/google';

import { colors } from './colors';
import { components } from './components'
import { styles } from './styles'

const Widget = defineStyleConfig({
  baseStyle: {
    p: 5
  }
});

const theme: DeepPartial<ChakraTheme> = {
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false, // ! important, if true this will override the initialColorMode on client side initial causing a flash
  },
  fonts: {
    body: "'Inter', sans-serif",
    heading: "'Inter', sans-serif",
  },
  styles,
  colors,
  components: {
    ...components,
    Widget
  },
  breakpoints: { // From bootstrap 5.x
    sm: '576pm',
    md: '768px',
    lg: '992px',
    xl: '1200px',
    '2xl': '1600px'
  }
}

export function getBullBitcoinTheme(
  themeAdditions: DeepPartial<ChakraTheme> = {},
): ReturnType<typeof extendTheme> {
  return extendTheme(withDefaultColorScheme({ colorScheme: 'white' }), theme, themeAdditions)
}

export const inter = Inter({
  subsets: ['latin']
})

export * from './customStyles'

