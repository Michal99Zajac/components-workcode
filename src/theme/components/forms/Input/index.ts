import { Theme, ThemeComponents } from '@chakra-ui/react'

import { color, shadow } from '../../../styles'

export const inputTheme: ThemeComponents = {
  Input: {
    parts: ['addon', 'field', 'element'],
    variants: {
      outline: ({ colorMode }) => ({
        field: {
          borderRadius: '0',
          color: color(colorMode).primary.input.text,
          bg: color(colorMode).primary.input.bg,
          border: 'none',
          _hover: {
            boxShadow: shadow(color(colorMode).primary.input._hover.boxShadow)
              .components._hover,
          },
          _focus: {
            boxShadow: shadow(color(colorMode).primary.input._focus.boxShadow)
              .components._focus,
          },
          _invalid: {
            boxShadow: shadow(color(colorMode).primary.input._invalid.boxShadow)
              .components._invalid,
          },
          '&[disabled]': {
            boxShadow: shadow().components._disabled,
          },
        },
        addon: {
          border: 'none',
          color: color(colorMode).primary.input.text,
          bg: color(colorMode).primary.input.addon.bg,
        },
      }),
    },
    defaultProps: {
      size: 'sm',
      variant: 'outline',
    },
  },
}

export type InputTheme = Theme & typeof inputTheme

export default inputTheme
