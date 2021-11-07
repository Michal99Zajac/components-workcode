import { Theme, ThemeComponents } from '@chakra-ui/react'

export const buttonTheme: ThemeComponents = {
  Button: {
    baseStyle: {
      fontFamily: 'Source Code Pro',
      fontWeight: '400',
      fontStyle: 'normal',
      borderRadius: '1px',
    },
    variants: {
      primary: {
        bg: '#102A43',
        color: '#FFFFFF',
        _hover: {
          bg: '#173a5c',
        },
        _focus: {
          bg: '#173a5c',
          shadow: 'none',
        },
      },
      secondary: {
        bg: '#ffffff',
        color: '#091A2A',
        _hover: {
          bg: '#f2f2f2',
        },
        _focus: {
          bg: '#f2f2f2',
          shadow: 'none',
        },
      },
    },
    defaultProps: {
      size: 'sm',
      variant: 'primary',
    },
  },
}

export type ButtonTheme = Theme & typeof buttonTheme

export default buttonTheme
