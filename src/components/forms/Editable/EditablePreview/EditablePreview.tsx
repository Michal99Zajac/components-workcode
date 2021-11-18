import React from 'react'
import {
  EditablePreview as ChakraEditablePreview,
  EditablePreviewProps as ChakraEditablePreviewProps,
} from '@chakra-ui/react'

export interface EditablePreviewProps extends ChakraEditablePreviewProps {
  variant?:
    | 'primary'
    | 'secondary'
    | 'outline'
    | 'filled'
    | 'flushed'
    | 'unstyled'
}

export function EditablePreview(props: EditablePreviewProps) {
  return <ChakraEditablePreview {...props} />
}

export default EditablePreview
