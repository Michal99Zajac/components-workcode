import { Theme, ThemeComponents } from '@chakra-ui/react'

import color from '../../../colors'

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
            boxShadow: `0 0 0 1px ${
              color(colorMode).primary.input._hover.border
            }`,
          },
          _focus: {
            boxShadow: `0 0 0 2px ${
              color(colorMode).primary.input._focus.border
            }`,
          },
          _invalid: {
            boxShadow: `0 0 0 1px ${
              color(colorMode).primary.input._invalid.border
            }`,
          },
          '&[disabled]': {
            boxShadow: 'none',
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
