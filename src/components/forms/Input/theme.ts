import { Theme, ThemeComponents } from '@chakra-ui/react'

export const inputTheme: ThemeComponents = {
  Input: {
    parts: ['addon', 'field', 'element'],
    baseStyle: {},
    variants: {
      outline: ({ colorMode }) => ({
        field: {
          color: colorMode === 'dark' ? '#ffffff' : '#091A2A',
          bg: colorMode === 'dark' ? '#102A43' : '#ffffff',
          borderRadius: '1px',
          border: 'none',
          _focus: {
            _hover: {
              bg: colorMode === 'dark' ? '#102A43' : '#ffffff',
            },
          },
          _disabled: {
            bg: '#394046',
            _hover: {
              bg: '#394046',
            },
          },
          _hover: {
            bg: colorMode === 'dark' ? '#173a5c' : '#e6e6e6',
          },
        },
        addon: {
          color: '#ffffff',
          bg: '#114374',
        },
      }),
    },
    defaultProps: {
      size: 'sm',
    },
  },
}

export type InputTheme = Theme & typeof inputTheme

export default inputTheme
