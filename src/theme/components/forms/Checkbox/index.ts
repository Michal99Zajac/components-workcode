import { Theme, ThemeComponents } from '@chakra-ui/react'

import { dark, light } from '../../../colors'

export const checkboxTheme: ThemeComponents = {
  Checkbox: {
    parts: ['control', 'icon', 'container'],
    baseStyle: {
      control: {
        borderRadius: '1px',
        border: 'none',
      },
    },
    variants: {
      solid: ({ colorMode }) => ({
        container: {
          color:
            colorMode === 'dark'
              ? dark.primary.input.text
              : light.primary.input.text,
        },
        control: {
          bg:
            colorMode === 'dark'
              ? dark.primary.input.bg
              : dark.primary.input.bg,
          borderColor:
            colorMode === 'dark'
              ? dark.primary.input.border
              : light.primary.input.border,
          _checked: {
            bg:
              colorMode === 'dark'
                ? dark.primary.input._checked.bg
                : light.primary.input._checked.bg,
          },
          _focus: {
            boxShadow: `0 0 0 1px ${
              colorMode === 'dark'
                ? dark.primary.input._focus.border
                : light.primary.input._focus.border
            }`,
          },
          _disabled: {
            bg:
              colorMode === 'dark'
                ? `${dark.primary.input._disabled.bg} !important`
                : light.primary.input._disabled.bg,
          },
          _hover: {
            bg:
              colorMode === 'dark'
                ? dark.primary.input._hover.bg
                : light.primary.input._hover.bg,
          },
        },
        icon: {
          color:
            colorMode === 'dark'
              ? dark.primary.input.icon
              : light.primary.input.icon,
        },
      }),
    },
    defaultProps: {
      size: 'md',
      variant: 'solid',
    },
  },
}

export type CheckboxTheme = Theme & typeof checkboxTheme

export default checkboxTheme
