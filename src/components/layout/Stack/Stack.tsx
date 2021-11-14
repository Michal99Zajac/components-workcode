import React from 'react'
import {
  Stack as ChakraStack,
  StackProps as ChakraStackProps,
} from '@chakra-ui/react'

export interface StackProps extends ChakraStackProps {
  variant?:
    | 'primary'
    | 'secondary'
    | 'outline'
    | 'filled'
    | 'flushed'
    | 'unstyled'
}

export function Stack(props: StackProps) {
  return <ChakraStack {...props} />
}

export default Stack
