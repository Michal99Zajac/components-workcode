import React from 'react'
import {
  Container as ChakraContainer,
  ContainerProps as ChakraContainerProps,
} from '@chakra-ui/react'

export interface ContainerProps extends ChakraContainerProps {
  variant?:
    | 'primary'
    | 'secondary'
    | 'outline'
    | 'filled'
    | 'flushed'
    | 'unstyled'
}

export function Container(props: ContainerProps) {
  return <ChakraContainer {...props} />
}

export default Container
