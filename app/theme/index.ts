import { ChakraTheme, DeepPartial, extendTheme, withDefaultColorScheme } from '@chakra-ui/react'

import { colors } from './colors';
/*
import { components } from './components'
import { styles } from './styles'
*/

const theme: DeepPartial<ChakraTheme> = {
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false, // ! important, if true this will override the initialColorMode on client side initial causing a flash
  },
  fonts: {
    body: "'Inter', sans-serif",
    heading: "'Inter', sans-serif",
  },
  // styles,
  colors,
  // components,
}

export function getBullBitcoinTheme(
  themeAdditions: DeepPartial<ChakraTheme> = {},
): ReturnType<typeof extendTheme> {
  return extendTheme(withDefaultColorScheme({ colorScheme: 'white' }), theme, themeAdditions)
}

// export * from './customStyles'


export const theme1 = extendTheme({
  colors: {
    brand: '#C50909',
    brandAlpha: {
      "50": "#FEE7E7",
      "100": "#FCBBBB",
      "200": "#FA8F8F",
      "300": "#F86363",
      "400": "#F63737",
      "500": "#F40B0B",
      "600": "#C30909",
      "700": "#920707",
      "800": "#620404",
      "900": "#310202"
    },
  },
})
