import React from 'react'
import {
  FormHelperText as ChakraFormHelperText,
  HelpTextProps as ChakraFormHelperTextProps,
} from '@chakra-ui/react'

export interface FormHelperTextProps extends ChakraFormHelperTextProps {
  variant?:
    | 'primary'
    | 'secondary'
    | 'outline'
    | 'filled'
    | 'flushed'
    | 'unstyled'
}

export function FormHelperText(props: FormHelperTextProps) {
  return <ChakraFormHelperText {...props} />
}

export default FormHelperText
