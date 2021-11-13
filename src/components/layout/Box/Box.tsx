import React from 'react'
import { Box as ChakraBox, BoxProps as ChakraBoxProps } from '@chakra-ui/react'

export interface BoxProps extends ChakraBoxProps {
  variant?:
    | 'primary'
    | 'secondary'
    | 'outline'
    | 'filled'
    | 'flushed'
    | 'unstyled'
}

export function Box(props: BoxProps) {
  return <ChakraBox {...props} />
}

export default Box
