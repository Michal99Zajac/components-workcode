import { Theme, ThemeComponents } from '@chakra-ui/react'

import color from '../../../colors'

export const checkboxTheme: ThemeComponents = {
  Checkbox: {
    parts: ['control', 'icon', 'container'],
    baseStyle: {
      control: {
        borderRadius: '0px',
        border: 'none',
      },
    },
    variants: {
      solid: ({ colorMode }) => ({
        container: {
          color: color(colorMode).primary.input.text,
        },
        control: {
          bg: color(colorMode).primary.input.bg,
          '&[data-hover]': {
            boxShadow: `0 0 0 1px ${
              color(colorMode).primary.input._hover.border
            }`,
          },
          '&[data-disabled]': {
            boxShadow: 'none',
          },
          '&[data-checked], &[data-checked][data-hover]': {
            bg: color(colorMode).primary.input._checked.bg,
          },
          '&[data-invalid]': {
            boxShadow: `0 0 0 1px ${
              color(colorMode).primary.input._invalid.border
            }`,
          },
          '&[data-focus]': {
            boxShadow: `0 0 0 2px ${
              color(colorMode).primary.input._focus.border
            }`,
          },
        },
        icon: {
          color: color(colorMode).primary.input.icon,
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
