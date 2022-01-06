import { Theme, ThemeComponents } from '@chakra-ui/react'

import { dark, light } from '../../../colors'

export const buttonTheme: ThemeComponents = {
  Button: {
    baseStyle: {
      borderRadius: '1px',
    },
    variants: {
      solid: ({ colorMode }) => ({
        bg:
          colorMode === 'dark' ? dark.primary.input.bg : light.primary.input.bg,
        color:
          colorMode === 'dark'
            ? dark.primary.input.text
            : light.primary.input.text,
        _hover: {
          bg:
            colorMode === 'dark'
              ? dark.primary.input._hover.bg
              : light.primary.input._hover.bg,
          _disabled: {
            bg:
              colorMode === 'dark'
                ? dark.primary.input._disabled.bg
                : light.primary.input._disabled.bg,
          },
        },
        _disabled: {
          bg:
            colorMode === 'dark'
              ? dark.primary.input._disabled.bg
              : light.primary.input._disabled.bg,
          opacity: 1,
        },
        _focus: {
          boxShadow: `0 0 0 1px ${
            colorMode === 'dark'
              ? dark.primary.input._focus.border
              : light.primary.input._focus.border
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
