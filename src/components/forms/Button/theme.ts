import { Theme, ThemeComponents } from '@chakra-ui/react'

export const buttonTheme: ThemeComponents = {
  Button: {
    baseStyle: {},
    variants: {
      solid: ({ colorMode }) => ({
        borderRadius: '1px',
        bg: colorMode === 'dark' ? '#102A43' : '#ffffff',
        color: colorMode === 'dark' ? '#FFFFFF' : '#091A2A',
        _hover: {
          bg: colorMode === 'dark' ? '#173a5c' : '#e6e6e6',
          _disabled: {
            bg: '#394046',
          },
        },
        _disabled: {
          bg: '#394046',
          color: '#FFFFFF',
          opacity: 1,
          '& .chakra-spinner': {
            borderTopColor: '#ffffff',
            borderRightColor: '#ffffff',
          },
        },
        _focus: {
          boxShadow: '0 0 0 1px #63b3ed',
        },
      }),
    },
    defaultProps: {
      size: 'sm',
    },
  },
}

export type ButtonTheme = Theme & typeof buttonTheme

export default buttonTheme
