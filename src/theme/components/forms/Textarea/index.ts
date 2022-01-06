import { Theme, ThemeComponents } from '@chakra-ui/react'

export const textareaTheme: ThemeComponents = {
  Textarea: {
    baseStyle: {},
    variants: {
      outline: ({ colorMode }) => ({
        color: colorMode === 'dark' ? '#ffffff' : '#091A2A',
        bg: colorMode === 'dark' ? '#102A43' : '#ffffff',
        borderRadius: '1px',
        border: 'none',
        _disabled: {
          cursor: 'not-allowed',
          bg: '#394046',
          _hover: {
            bg: '#394046',
          },
        },
        _hover: {
          bg: colorMode === 'dark' ? '#173a5c' : '#e6e6e6',
        },
        _focus: {
          bg: colorMode === 'dark' ? '#102A43' : '#ffffff',
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
