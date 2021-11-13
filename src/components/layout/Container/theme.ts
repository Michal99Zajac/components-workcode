import { Theme, ThemeComponents } from '@chakra-ui/react'

export const containerTheme: ThemeComponents = {
  Container: {
    parts: [],
    sizes: {},
    baseStyle: {},
    variants: {},
    defaultProps: {},
  },
}

export type ContainerTheme = Theme & typeof containerTheme

export default containerTheme
