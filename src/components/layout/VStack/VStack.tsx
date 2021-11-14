import React from 'react'
import {
  VStack as ChakraVStack,
  StackProps as ChakraVStackProps,
} from '@chakra-ui/react'

export interface VStackProps extends ChakraVStackProps {
  variant?:
    | 'primary'
    | 'secondary'
    | 'outline'
    | 'filled'
    | 'flushed'
    | 'unstyled'
}

export function VStack(props: VStackProps) {
  return <ChakraVStack {...props} />
}

export default VStack
