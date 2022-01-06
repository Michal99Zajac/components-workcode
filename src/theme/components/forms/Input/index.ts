import { Theme, ThemeComponents } from '@chakra-ui/react'

import { dark, light } from '../../../colors'

export const inputTheme: ThemeComponents = {
  Input: {
    parts: ['addon', 'field', 'element'],
    variants: {
      outline: ({ colorMode }) => ({
        field: {
          borderRadius: '1px',
          color:
            colorMode === 'dark'
              ? dark.primary.input.text
              : light.primary.input.text,
          bg:
            colorMode === 'dark'
              ? dark.primary.input.bg
              : light.primary.input.bg,
          border: 'none',
          _focus: {
            bg:
              colorMode === 'dark'
                ? dark.primary.input._hover.bg
                : light.primary.input._hover.bg,
          },
          _disabled: {
            bg:
              colorMode === 'dark'
                ? dark.primary.input._disabled.bg
                : light.primary.input._disabled.bg,
          },
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
          _invalid: {
            boxShadow: `0 0 0 1px ${dark.warning}`,
          },
        },
        addon: {
          border: 'none',
          color:
            colorMode === 'dark'
              ? dark.primary.input.text
              : light.primary.input.text,
          bg:
            colorMode === 'dark'
              ? dark.primary.input.addon.bg
              : light.primary.input.addon.bg,
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
