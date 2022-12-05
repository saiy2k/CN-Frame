import { SystemStyleObjectRecord } from '@chakra-ui/react'

// Helps with typing
const stylesMap = <T extends SystemStyleObjectRecord>(map: T) => map

const baseTextStyles = stylesMap({
  extra: {
    fontSize: 'clamp(3rem, 6vw, 7rem)',
    fontWeight: 'extrabold',
    lineHeight: 1.1,
    color: 'gray.800',
  },
  h1: {
    fontSize: 'clamp(2rem, 3.5vw, 3rem)',
    fontWeight: 'bold',
    lineHeight: 1.1,
    letterSpacing: 0,
    color: 'gray.800',
  },
  h2: {
    fontSize: 'clamp(1.75rem, 2.5vw, 2rem)',
    fontWeight: 'bold',
    lineHeight: 1.16,
    letterSpacing: 0,
    color: 'gray.800',
  },
  h4: {
    fontSize: 'clamp(1.25rem, 1.5vw, 1.5rem)',
    fontWeight: 'bold',
    lineHeight: 1.16,
    letterSpacing: 0,
  },
  bodyLarge: {
    fontSize: 'clamp(1.25rem, 1.5vw, 1.5rem)',
    lineHeight: 1.4,
    fontWeight: 'normal',
  },
  body: {
    fontSize: 'clamp(1rem, 1.2vw, 1.2rem)',
    lineHeight: 1.5,
    fontWeight: 'normal',
  },
  subText1: {
    fontSize: '1rem',
    lineHeight: 1.5,
    fontWeight: 'normal',
  },
  subText2: {
    fontSize: '0.85rem',
    lineHeight: 1.5,
  },
  caption: {
    fontSize: '0.75rem',
    lineHeight: 1.33,
  },

  h3: {
    color: 'black',
    fontSize: { base: '18px', lg: '24px' },
    fontWeight: 300,
    lineHeight: { base: '24px', lg: '36px'},
  },
 
  h3b: {
    color: 'black',
    fontSize: { base: '24px', lg: '24px' },
    fontWeight: 700,
    lineHeight: { base: '40px', lg: '36px'},
  },

  actionButtonTitle: {
    fontSize: { base: '16px', lg: '18px' },
    fontWeight: '600',
    lineHeight: '24px',
  },
  actionButtonText: {
    color: 'gray.600',
    fontSize: { base: '16px', lg: '18px' },
    fontWeight: '300',
    lineHeight: '16px',
  }
})

export const textStyles = stylesMap({
  ...baseTextStyles,
  bodySemibold: {
    ...baseTextStyles.body,
    fontWeight: 'semibold',
  },
  bodyLargeMedium: {
    ...baseTextStyles.bodyLarge,
    fontWeight: 'medium',
  },
  subText1Medium: {
    ...baseTextStyles.subText1,
    fontWeight: 'medium',
  },
  subText1SemiBold: {
    ...baseTextStyles.subText1,
    fontWeight: 'semibold',
  },
  subText2Medium: {
    ...baseTextStyles.subText2,
    fontWeight: 'medium',
  },
  captionRegular: {
    ...baseTextStyles.caption,
    fontWeight: 'regular',
  },
})

const baseStyles = stylesMap({
  bevelShadow: {
    rounded: 0,
    border: '2px',
    borderColor: 'gray.300',
    boxShadow: `6px 6px #BDB9B9`,
  },
  redBevelShadow: {
    rounded: 0,
    border: '1px',
    borderColor: 'red.500',
    boxShadow: `6px 6px #E21924`,
  },
  mediumPill: {
    px: 4,
    py: 1,
    color: 'white',
    bgColor: 'gray.500',
    rounded: 'full',
    display: 'inline-block',
    ...textStyles.bodySemibold,
  },
  smallPill: {
    px: 3,
    py: 0.5,
    color: 'white',
    bgColor: 'gray.500',
    rounded: 'full',
    display: 'inline-block',
    ...textStyles.subText1SemiBold,
  },
  secondaryGhostButton: {
    variant: 'ghost',
    colorScheme: 'gray',
    size: 'lg',
    fontWeight: 'normal',
  },
})

export const styles = stylesMap({
  ...baseStyles,
  bevelBox: {
    ...baseStyles.bevelShadow,
    bg: 'gray.50',
  },
})