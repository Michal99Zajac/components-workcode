import React from 'react'
import {
  FormControl as ChakraFormControl,
  FormControlProps as ChakraFormControlProps,
} from '@chakra-ui/react'

export interface FormControlProps extends ChakraFormControlProps {
  variant?:
    | 'primary'
    | 'secondary'
    | 'outline'
    | 'filled'
    | 'flushed'
    | 'unstyled'
}

export function FormControl(props: FormControlProps) {
  return <ChakraFormControl {...props} />
}

export default FormControl
