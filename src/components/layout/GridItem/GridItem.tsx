import React from 'react'
import {
  GridItem as ChakraGridItem,
  GridItemProps as ChakraGridItemProps,
} from '@chakra-ui/react'

export interface GridItemProps extends ChakraGridItemProps {
  variant?:
    | 'primary'
    | 'secondary'
    | 'outline'
    | 'filled'
    | 'flushed'
    | 'unstyled'
}

export function GridItem(props: GridItemProps) {
  return <ChakraGridItem {...props} />
}

export default GridItem
