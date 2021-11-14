import React from 'react'
import {
  SimpleGrid as ChakraSimpleGrid,
  SimpleGridProps as ChakraSimpleGridProps,
} from '@chakra-ui/react'

export interface SimpleGridProps extends ChakraSimpleGridProps {
  variant?:
    | 'primary'
    | 'secondary'
    | 'outline'
    | 'filled'
    | 'flushed'
    | 'unstyled'
}

export function SimpleGrid(props: SimpleGridProps) {
  return <ChakraSimpleGrid {...props} />
}

export default SimpleGrid
