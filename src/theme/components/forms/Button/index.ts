import { Theme, ThemeComponents } from '@chakra-ui/react'

import color from '../../../colors'

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
          boxShadow: `0 0 0 1px ${
            color(colorMode).primary.input._hover.border
          }`,
        },
        '&:hover[disabled]': {
          bg: color(colorMode).primary.input.bg,
        },
        '&:focus:enabled': {
          boxShadow: `0 0 0 2px ${
            color(colorMode).primary.input._focus.border
          }`,
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
