import React from 'react'
import {
  Textarea as ChakraTextarea,
  TextareaProps as ChakraTextareaProps,
} from '@chakra-ui/react'

export interface TextareaProps extends ChakraTextareaProps {
  variant?:
    | 'primary'
    | 'secondary'
    | 'outline'
    | 'filled'
    | 'flushed'
    | 'unstyled'
}

export function Textarea(props: TextareaProps) {
  return <ChakraTextarea {...props} />
}

export default Textarea
