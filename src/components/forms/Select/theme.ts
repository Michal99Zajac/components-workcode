import { Theme, ThemeComponents } from '@chakra-ui/react'

export const selectTheme: ThemeComponents = {
  Select: {
    parts: ['field', 'icon'],
    baseStyle: {},
    variants: {
      outline: ({ colorMode }) => ({
        field: {
          color: colorMode === 'dark' ? '#ffffff' : '#091A2A',
          bg: colorMode === 'dark' ? '#102A43' : '#ffffff',
          borderRadius: '1px',
          border: 'none',
          '& option': {
            bg: colorMode === 'dark' ? '#102A43' : '#ffffff',
          },
          _focus: {
            boxShadow: '0 0 0 1px #63b3ed',
            _hover: {
              bg: colorMode === 'dark' ? '#102A43' : '#ffffff',
            },
          },
          _hover: {
            bg: colorMode === 'dark' ? '#173a5c' : '#e6e6e6',
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
          color: colorMode === 'dark' ? '#ffffff' : '#091A2A',
          _disabled: {
            color: '#ffffff',
          },
        },
      }),
    },
    defaultProps: {
      size: 'sm',
    },
  },
}

export type SelectTheme = Theme & typeof selectTheme

export default selectTheme
