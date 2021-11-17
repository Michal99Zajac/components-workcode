import React from 'react'
import {
  FormLabel as ChakraFormLabel,
  FormLabelProps as ChakraFormLabelProps,
} from '@chakra-ui/react'

export interface FormLabelProps extends ChakraFormLabelProps {
  variant?:
    | 'primary'
    | 'secondary'
    | 'outline'
    | 'filled'
    | 'flushed'
    | 'unstyled'
}

export function FormLabel(props: FormLabelProps) {
  return <ChakraFormLabel {...props} />
}

export default FormLabel
