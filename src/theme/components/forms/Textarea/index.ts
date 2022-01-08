import { Theme, ThemeComponents } from '@chakra-ui/react'

import { color, shadow } from '../../../styles'

export const textareaTheme: ThemeComponents = {
  Textarea: {
    variants: {
      outline: ({ colorMode }) => ({
        color: color(colorMode).primary.input.text,
        bg: color(colorMode).primary.input.bg,
        borderRadius: '0',
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
      }),
    },
    defaultProps: {
      size: 'sm',
    },
  },
}

export type TextareaTheme = Theme & typeof textareaTheme

export default textareaTheme
