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
          _disabled: {
            bg: '#394046',
          },
        },
        _disabled: {
          bg: '#394046',
          opacity: 1,
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
          bg: '#e6e6e6',
          _disabled: {
            bg: '#394046',
          },
        },
        _disabled: {
          bg: '#394046',
          opacity: 1,
          '& .chakra-spinner': {
            borderTopColor: '#ffffff',
            borderRightColor: '#ffffff',
          },
        },
        _focus: {
          bg: '#e6e6e6',
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
