import React from 'react'
import {
  HStack as ChakraHStack,
  StackProps as ChakraHStackProps,
} from '@chakra-ui/react'

export interface HStackProps extends ChakraHStackProps {
  variant?:
    | 'primary'
    | 'secondary'
    | 'outline'
    | 'filled'
    | 'flushed'
    | 'unstyled'
}

export function HStack(props: HStackProps) {
  return <ChakraHStack {...props} />
}

export default HStack
