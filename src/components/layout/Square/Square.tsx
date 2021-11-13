import React from 'react'
import {
  Square as ChakraSquare,
  SquareProps as ChakraSquareProps,
} from '@chakra-ui/react'

export interface SquareProps extends ChakraSquareProps {
  variant?:
    | 'primary'
    | 'secondary'
    | 'outline'
    | 'filled'
    | 'flushed'
    | 'unstyled'
}

export function Square(props: SquareProps) {
  return <ChakraSquare {...props} />
}

export default Square
