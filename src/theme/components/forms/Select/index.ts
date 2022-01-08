import { Theme, ThemeComponents } from '@chakra-ui/react'

import color from '../../../colors'

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
            boxShadow: `0 0 0 2px ${
              color(colorMode).primary.input._focus.border
            }`,
          },
          _hover: {
            boxShadow: `0 0 0 1px ${
              color(colorMode).primary.input._hover.border
            }`,
            cursor: 'pointer',
          },
          _invalid: {
            boxShadow: `0 0 0 1px ${
              color(colorMode).primary.input._invalid.border
            }`,
          },
          '&[disabled]': {
            boxShadow: 'none',
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
