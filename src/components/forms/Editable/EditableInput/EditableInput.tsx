import React from 'react'
import {
  EditableInput as ChakraEditableInput,
  EditableInputProps as ChakraEditableInputProps,
} from '@chakra-ui/react'

export interface EditableInputProps extends ChakraEditableInputProps {
  variant?:
    | 'primary'
    | 'secondary'
    | 'outline'
    | 'filled'
    | 'flushed'
    | 'unstyled'
}

export function EditableInput(props: EditableInputProps) {
  return <ChakraEditableInput {...props} />
}

export default EditableInput
