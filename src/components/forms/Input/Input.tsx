import React from 'react'
import {
  Input as ChakraInput,
  InputProps as ChakraInputProps,
} from '@chakra-ui/react'

export interface InputProps extends ChakraInputProps {
  variant?:
    | 'primary'
    | 'secondary'
    | 'outline'
    | 'filled'
    | 'flushed'
    | 'unstyled'
}

export function Input(props: InputProps) {
  return <ChakraInput {...props} />
}

export default Input