import React from 'react'
import {
  Checkbox as ChakraCheckbox,
  CheckboxProps as ChakraCheckboxProps,
} from '@chakra-ui/react'

export interface CheckboxProps extends ChakraCheckboxProps {
  variant?:
    | 'primary'
    | 'secondary'
    | 'outline'
    | 'filled'
    | 'flushed'
    | 'unstyled'
}

export function Checkbox(props: CheckboxProps) {
  return <ChakraCheckbox {...props} />
}

export default Checkbox
