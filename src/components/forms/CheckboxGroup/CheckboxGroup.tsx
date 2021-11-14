import React from 'react'
import {
  CheckboxGroup as ChakraCheckboxGroup,
  CheckboxGroupProps as ChakraCheckboxGroupProps,
} from '@chakra-ui/react'

export interface CheckboxGroupProps extends ChakraCheckboxGroupProps {
  variant?:
    | 'primary'
    | 'secondary'
    | 'outline'
    | 'filled'
    | 'flushed'
    | 'unstyled'
}

export function CheckboxGroup(props: CheckboxGroupProps) {
  return <ChakraCheckboxGroup {...props} />
}

export default CheckboxGroup
