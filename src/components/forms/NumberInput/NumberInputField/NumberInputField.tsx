import React from 'react'
import {
  NumberInputField as ChakraNumberInputField,
  NumberInputFieldProps as ChakraNumberInputFieldProps,
} from '@chakra-ui/react'

export interface NumberInputFieldProps extends ChakraNumberInputFieldProps {
  variant?:
    | 'primary'
    | 'secondary'
    | 'outline'
    | 'filled'
    | 'flushed'
    | 'unstyled'
}

export function NumberInputField(props: NumberInputFieldProps) {
  return <ChakraNumberInputField {...props} />
}

export default NumberInputField
