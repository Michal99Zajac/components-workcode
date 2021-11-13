import React from 'react'
import {
  Center as ChakraCenter,
  CenterProps as ChakraCenterProps,
} from '@chakra-ui/react'

export interface CenterProps extends ChakraCenterProps {
  variant?:
    | 'primary'
    | 'secondary'
    | 'outline'
    | 'filled'
    | 'flushed'
    | 'unstyled'
}

export function Center(props: CenterProps) {
  return <ChakraCenter {...props} />
}

export default Center
