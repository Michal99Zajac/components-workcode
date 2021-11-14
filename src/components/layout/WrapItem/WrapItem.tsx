import React from 'react'
import {
  WrapItem as ChakraWrapItem,
  WrapItemProps as ChakraWrapItemProps,
} from '@chakra-ui/react'

export interface WrapItemProps extends ChakraWrapItemProps {
  variant?:
    | 'primary'
    | 'secondary'
    | 'outline'
    | 'filled'
    | 'flushed'
    | 'unstyled'
}

export function WrapItem(props: WrapItemProps) {
  return <ChakraWrapItem {...props} />
}

export default WrapItem
