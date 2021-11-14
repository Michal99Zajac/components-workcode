import React from 'react'
import {
  Grid as ChakraGrid,
  GridProps as ChakraGridProps,
} from '@chakra-ui/react'

export interface GridProps extends ChakraGridProps {
  variant?:
    | 'primary'
    | 'secondary'
    | 'outline'
    | 'filled'
    | 'flushed'
    | 'unstyled'
}

export function Grid(props: GridProps) {
  return <ChakraGrid {...props} />
}

export default Grid
