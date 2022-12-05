import { ChakraTheme } from '@chakra-ui/react'

export const styles: ChakraTheme['styles'] = {
  global: {
    body: {
      color: 'gray.700',
      fontSize: ['1rem', '1.125rem'],
    }
  }
}

/*
export const styles: ChakraTheme['styles'] = {
  global: {
    body: {
      color: 'gray.700',
      fontSize: ['1rem', '1.125rem'],
    },
    // @chakra-ui/css-reset includes styles to hide hugly focus rings for mouse users
    // when focus-visible polyfill is installed. See: https://github.com/chakra-ui/chakra-ui/tree/main/packages/css-reset#disabling-border-for-non-keyboard-interactions
    // But the included styles does not cover the custom checkboxes and radio. This is a hackish solution fixes it.
    '[data-js-focus-visible] [data-focus]:not([data-focus-visible-added])': {
      outline: 'none',
      boxShadow: 'none',
    },
    '[data-js-focus-visible] [data-focus-visible-added]+[data-focus]': {
      outline: 'none',
      boxShadow: 'var(--chakra-shadows-outline)',
    },
    '@media print': {
      '.noPrint': { display: 'none' },
    },
  },
}
*/
