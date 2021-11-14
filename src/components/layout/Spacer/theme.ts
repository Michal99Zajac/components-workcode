import { Theme, ThemeComponents } from '@chakra-ui/react'

export const spacerTheme: ThemeComponents = {
  Spacer: {
    parts: [],
    sizes: {},
    baseStyle: {},
    variants: {},
    defaultProps: {},
  },
}

export type SpacerTheme = Theme & typeof spacerTheme

export default spacerTheme
