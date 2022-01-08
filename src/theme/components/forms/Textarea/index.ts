import { Theme, ThemeComponents } from '@chakra-ui/react'

import color from '../../../colors'

export const textareaTheme: ThemeComponents = {
  Textarea: {
    variants: {
      outline: ({ colorMode }) => ({
        color: color(colorMode).primary.input.text,
        bg: color(colorMode).primary.input.bg,
        borderRadius: '0',
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
      }),
    },
    defaultProps: {
      size: 'sm',
    },
  },
}

export type TextareaTheme = Theme & typeof textareaTheme

export default textareaTheme
