import { Theme, ThemeComponents } from '@chakra-ui/react'

export const textareaTheme: ThemeComponents = {
  Textarea: {
    baseStyle: {
      fontFamily: 'Source Code Pro',
      fontWeight: '400',
      fontStyle: 'normal',
    },
    variants: {
      primary: {
        color: '#ffffff',
        bg: '#102A43',
        borderRadius: '1px',
        _disabled: {
          cursor: 'not-allowed',
          bg: '#394046',
          _hover: {
            bg: '#394046',
          },
        },
        _invalid: {
          borderRight: '5px solid red',
        },
        _hover: {
          bg: '#173a5c',
        },
        _focus: {
          boxShadow: '0 4px 8px 0 #173a5c',
        },
      },
      secondary: {
        color: '#091A2A',
        bg: '#ffffff',
        borderRadius: '1px',
        _disabled: {
          cursor: 'not-allowed',
          bg: '#394046',
          _hover: {
            bg: '#394046',
          },
        },
        _invalid: {
          borderRight: '5px solid red',
        },
        _hover: {
          bg: '#e6e6e6',
        },
        _focus: {
          boxShadow: '0 4px 8px 0 #e6e6e6',
        },
      },
    },
    defaultProps: {
      variant: 'primary',
      size: 'sm',
    },
  },
}

export type TextareaTheme = Theme & typeof textareaTheme

export default textareaTheme
