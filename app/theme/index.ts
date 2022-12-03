import { ChakraTheme, DeepPartial, extendTheme, withDefaultColorScheme } from '@chakra-ui/react'
import { Dancing_Script, Inter, Raleway } from '@next/font/google';

import { colors } from './colors';
import { components } from './components'
import { styles } from './styles'

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
  components,
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

