import { Theme, ThemeComponents } from '@chakra-ui/react'

import { color, shadow } from '../../../styles'

export const selectTheme: ThemeComponents = {
  Select: {
    parts: ['field', 'icon'],
    variants: {
      outline: ({ colorMode }) => ({
        field: {
          color: color(colorMode).primary.input.text,
          bg: color(colorMode).primary.input.bg,
          borderRadius: '0',
          border: 'none',
          _focus: {
            boxShadow: shadow(color(colorMode).primary.input._focus.boxShadow)
              .components._focus,
          },
          _hover: {
            boxShadow: shadow(color(colorMode).primary.input._hover.boxShadow)
              .components._hover,
            cursor: 'pointer',
          },
          _invalid: {
            boxShadow: shadow(color(colorMode).primary.input._invalid.boxShadow)
              .components._invalid,
          },
          '&[disabled]': {
            boxShadow: shadow().components._disabled,
          },
          '& > option': {
            bg: 'inherit',
          },
        },
        icon: {
          color: color(colorMode).primary.input.text,
        },
      }),
    },
    defaultProps: {
      size: 'sm',
    },
  },
}

export type SelectTheme = Theme & typeof selectTheme

export default selectTheme
