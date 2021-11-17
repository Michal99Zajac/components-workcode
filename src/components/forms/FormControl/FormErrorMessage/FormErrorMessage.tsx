import React from 'react'
import {
  FormErrorMessage as ChakraFormErrorMessage,
  FormErrorMessageProps as ChakraFormErrorMessageProps,
} from '@chakra-ui/react'

export interface FormErrorMessageProps extends ChakraFormErrorMessageProps {
  variant?:
    | 'primary'
    | 'secondary'
    | 'outline'
    | 'filled'
    | 'flushed'
    | 'unstyled'
}

export function FormErrorMessage(props: FormErrorMessageProps) {
  return <ChakraFormErrorMessage {...props} />
}

export default FormErrorMessage
