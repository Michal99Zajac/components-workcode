import { Theme, ThemeComponents } from '@chakra-ui/react'

import { color, shadow } from '../../../styles'

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
            boxShadow: shadow(color(colorMode).primary.input._hover.boxShadow)
              .components._hover,
          },
          '&[data-disabled]': {
            boxShadow: shadow().components._disabled,
          },
          '&[data-checked], &[data-checked][data-hover]': {
            bg: color(colorMode).primary.input._checked.bg,
          },
          '&[data-invalid]': {
            boxShadow: shadow(color(colorMode).primary.input._invalid.boxShadow)
              .components._invalid,
          },
          '&[data-focus]': {
            boxShadow: shadow(color(colorMode).primary.input._focus.boxShadow)
              .components._focus,
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
