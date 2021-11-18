import React from 'react'
import {
  Editable as ChakraEditable,
  EditableProps as ChakraEditableProps,
} from '@chakra-ui/react'

export interface EditableProps extends ChakraEditableProps {
  variant?:
    | 'primary'
    | 'secondary'
    | 'outline'
    | 'filled'
    | 'flushed'
    | 'unstyled'
}

export function Editable(props: EditableProps) {
  return <ChakraEditable {...props} />
}

export default Editable
