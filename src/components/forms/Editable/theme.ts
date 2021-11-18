import { Theme, ThemeComponents } from '@chakra-ui/react'

export const editableTheme: ThemeComponents = {
  Editable: {
    parts: [],
    sizes: {},
    baseStyle: {},
    variants: {},
    defaultProps: {},
  },
}

export type EditableTheme = Theme & typeof editableTheme

export default editableTheme
