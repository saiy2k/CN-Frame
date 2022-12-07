import { ChakraTheme, cssVar } from '@chakra-ui/react'
import { getColor, mode, StyleFunctionProps, transparentize } from '@chakra-ui/theme-tools'

// import { textStyles } from './customStyles'

const focusBorderColor = '#cdcdcd';
const inputTheme = {
  defaultProps: { focusBorderColor },
  variants: {
    outline: (props: StyleFunctionProps) => ({
      field: {
        rounded: 'full',
        bgColor: mode('white', 'gray.800')(props),
        borderColor: 'gray.300',
        _placeholder: { color: '#cdcdcd' },
        _autofill: {
          boxShadow: '0 0 0px 1000px #F2F2F2 inset',
        },
      },
    }),
  },
}

function getAlertBg(props: StyleFunctionProps): string {
  const { theme, colorScheme: c } = props
  const lightBg = getColor(theme, `${c}.50`, c)
  const darkBg = transparentize(`${c}.200`, 0.16)(theme)
  return mode(lightBg, darkBg)(props)
}

export const components: ChakraTheme['components'] = {

  Alert: {
    baseStyle: { container: { rounded: 8, alignItems: 'start', bg: 'green' } },
    variants: {
      subtle: (props) => ({
        container: { bg: getAlertBg(props) },
      }),
    },
  },
  Button: {
    baseStyle: {
      rounded: 'full',
    },
    sizes: {
      sm: { px: '1.125rem' },
      md: { px: '1.125rem' },
      lg: { px: '1.125rem' },
      xl: { px: '1.5rem', fontSize: '1.5rem', minH: '50px' },
    },
    variants: {
      outline: {
        whiteSpace: 'normal',
        borderWidth: '2px',
        _hover: {
          bg: 'blackAlpha.50',
        },
      },
      solid: ({ colorScheme }) => {
        const base = { whiteSpace: 'normal' }
        if (colorScheme !== 'red') return base
        return {
          ...base,
          paddingX: 100,
          bg: 'gradient.red',
          transition: 'none', // transision between gradient bg and solid bg creates a flash of white
          _hover: {
            bg: '#D21A1A',
          },
          _active: {
            bg: '#C71515',
          },
        }
      },
    },
    defaultProps: {
    }
  },
  NumberInput: {
    ...inputTheme,
    baseStyle: {
      root: { [cssVar('number-input-stepper-width').variable]: '2rem' },
      stepper: { pr: '0.3rem' },
    },
  },
  Input: inputTheme,
  Select: inputTheme,
  Checkbox: {
    baseStyle: { control: { bgColor: 'white' } },
  },
  Textarea: {
    defaultProps: { focusBorderColor },
    variants: {
      outline: {
        rounded: 14,
        bgColor: 'white',
        borderColor: 'gray.300',
        _invalid: { bg: 'red.25' },
      },
    },
  },
  Heading: {
    sizes: {
      xl: {
        lineHeight: [1.5, null, 1.33],
      },
      md: {
        fontWeight: 'semibold',
      },
    },
  },

  'chakra.h3': {
    sizes: {
      sm: { px: '1.125rem' },
      md: { px: '1.125rem' },
      lg: { px: '3.125rem' },
      xl: { px: '3.5rem', fontSize: '3.5rem', minH: '50px' },
    },
  }
}

/*
  FormLabel: {
    baseStyle: textStyles.subText1,
  },
  */
