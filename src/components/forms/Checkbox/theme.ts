import { Theme, ThemeComponents } from '@chakra-ui/react'

export const checkboxTheme: ThemeComponents = {
  Checkbox: {
    parts: ['control'],
    sizes: {},
    baseStyle: {
      control: {
        borderRadius: '1px',
        border: 'none',
      },
    },
    variants: {
      solid: ({ colorMode }) => ({
        control: {
          bg: colorMode === 'dark' ? '#102A43' : '#ffffff',
          borderColor: colorMode === 'dark' ? '#102A43' : '#ffffff',
          _checked: {
            bg: 'green',
          },
          _focus: {
            boxShadow: '0 0 0 1px #63b3ed',
          },
        },
      }),
    },
    defaultProps: {
      size: 'md',
      variant: 'solid',
    },
  },
}

export type CheckboxTheme = Theme & typeof checkboxTheme

export default checkboxTheme
