import { Theme, ThemeComponents } from '@chakra-ui/react'

export const selectTheme: ThemeComponents = {
  Select: {
    parts: ['field', 'icon'],
    baseStyle: {
      field: {
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
          '& option': {
            bg: '#102A43',
          },
          _focus: {
            boxShadow: '0 4px 8px 0 #173a5c',
            _hover: {
              bg: '#102A43',
            },
          },
          _hover: {
            bg: '#173a5c',
            cursor: 'pointer',
          },
          _disabled: {
            bg: '#394046',
            cursor: 'not-allowed',
            _hover: {
              bg: '#394046',
            },
          },
        },
        icon: {
          color: '#ffffff',
        },
      },
      secondary: {
        field: {
          color: '#091A2A',
          bg: '#ffffff',
          borderRadius: '1px',
          '& option': {
            bg: '#ffffff',
          },
          _focus: {
            boxShadow: '0 4px 8px 0 #e6e6e6',
            _hover: {
              bg: '#ffffff',
            },
          },
          _hover: {
            bg: '#e6e6e6',
            cursor: 'pointer',
          },
          _disabled: {
            bg: '#394046',
            cursor: 'not-allowed',
            _hover: {
              bg: '#394046',
            },
            color: '#ffffff',
          },
        },
        icon: {
          color: '#091A2A',
          _disabled: {
            color: '#ffffff',
          },
        },
      },
    },
    defaultProps: {
      variant: 'primary',
      size: 'sm',
    },
  },
}

export type SelectTheme = Theme & typeof selectTheme

export default selectTheme
