import { Theme, ThemeComponents } from '@chakra-ui/react'

export const editableInputTheme: ThemeComponents = {
  EditableInput: {
    parts: [],
    sizes: {},
    baseStyle: {},
    variants: {},
    defaultProps: {},
  },
}

export type EditableTheme = Theme & typeof editableInputTheme

export default editableInputTheme
