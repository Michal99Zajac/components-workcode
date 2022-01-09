import { Theme, ThemeComponents } from '@chakra-ui/react'

import { color, shadow } from '../../../styles'

export const buttonTheme: ThemeComponents = {
  Button: {
    baseStyle: {
      borderRadius: '0px',
    },
    variants: {
      solid: ({ colorMode }) => ({
        bg: color(colorMode).primary.input.bg,
        color: color(colorMode).primary.input.text,
        '&:hover:enabled': {
          bg: color(colorMode).primary.input._hover.bg,
          boxShadow: shadow(color(colorMode).primary.input._hover.boxShadow)
            .components._hover,
        },
        '&:hover[disabled]': {
          bg: color(colorMode).primary.input.bg,
        },
        '&:focus:enabled': {
          boxShadow: shadow(color(colorMode).primary.input._focus.boxShadow)
            .components._focus,
        },
      }),
    },
    defaultProps: {
      size: 'sm',
      variant: 'solid',
    },
  },
}

export type ButtonTheme = Theme & typeof buttonTheme

export default buttonTheme
