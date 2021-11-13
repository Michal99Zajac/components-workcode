import React from 'react'
import {
  Circle as ChakraCircle,
  CenterProps as ChakraCircleProps,
} from '@chakra-ui/react'

export interface CircleProps extends ChakraCircleProps {
  variant?:
    | 'primary'
    | 'secondary'
    | 'outline'
    | 'filled'
    | 'flushed'
    | 'unstyled'
}

export function Circle(props: CircleProps) {
  return <ChakraCircle {...props} />
}

export default Circle
