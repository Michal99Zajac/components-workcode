import { Theme, ThemeComponents } from '@chakra-ui/react'

export const inputTheme: ThemeComponents = {
  Input: {
    parts: ['addon', 'field', 'element'],
    baseStyle: {
      field: {
        fontFamily: 'Source Code Pro',
        fontWeight: '400',
        fontStyle: 'normal',
      },
      addon: {
        fontFamily: 'Source Code Pro',
        fontWeight: '400',
        fontStyle: 'normal',
      },
    },
    variants: {
      primary: {
        field: {
          color: '#ffffff',
          bg: '#102A43',
          borderRadius: '1px',
          _disabled: {
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
        },
        addon: {
          color: '#ffffff',
          bg: '#114374',
        },
      },
      secondary: {
        field: {
          color: '#091A2A',
          bg: '#ffffff',
          borderRadius: '1px',
          _disabled: {
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
        },
        addon: {
          color: '#ffffff',
          bg: '#114374',
        },
      },
    },
    defaultProps: {
      variant: 'primary',
      size: 'sm',
    },
  },
}

export type InputTheme = Theme & typeof inputTheme

export default inputTheme
