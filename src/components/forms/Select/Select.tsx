import React from 'react'
import {
  Select as ChakraSelect,
  SelectProps as ChakraSelectProps,
} from '@chakra-ui/react'

export interface SelectProps extends ChakraSelectProps {
  variant?:
    | 'primary'
    | 'secondary'
    | 'outline'
    | 'filled'
    | 'flushed'
    | 'unstyled'
}

export function Select(props: SelectProps) {
  return <ChakraSelect {...props} />
}

export default Select
