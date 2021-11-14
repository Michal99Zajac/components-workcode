import { Theme, ThemeComponents } from '@chakra-ui/react'

export const editablePreviewTheme: ThemeComponents = {
  EditablePreview: {
    parts: [],
    sizes: {},
    baseStyle: {},
    variants: {},
    defaultProps: {},
  },
}

export type EditablePreviewTheme = Theme & typeof editablePreviewTheme

export default editablePreviewTheme
