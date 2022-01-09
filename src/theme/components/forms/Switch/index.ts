import { Theme, ThemeComponents } from '@chakra-ui/react'

import { color, shadow } from '../../../styles'

export const switchTheme: ThemeComponents = {
  Switch: {
    parts: ['thumb', 'track'],
    variants: {
      outline: ({ colorMode }) => ({
        thumb: {
          bg: color(colorMode).primary.input.icon,
        },
        track: {
          bg: color(colorMode).primary.input.bg,
          borderRadius: '0',
          '&[data-checked]': {
            bg: color(colorMode).primary.input._checked.bg,
          },
          '&[data-hover]': {
            boxShadow: shadow(color(colorMode).primary.input._hover.boxShadow)
              .components._hover,
          },
          '&[data-focus]': {
            boxShadow: shadow(color(colorMode).primary.input._focus.boxShadow)
              .components._focus,
          },
        },
      }),
    },
    defaultProps: {
      size: 'md',
      variant: 'outline',
    },
  },
}

export type SwitchTheme = Theme & typeof switchTheme

export default switchTheme
