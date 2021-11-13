import React from 'react'
import {
  Flex as ChakraFlex,
  FlexProps as ChakraFlexProps,
} from '@chakra-ui/react'

export interface FlexProps extends ChakraFlexProps {
  variant?:
    | 'primary'
    | 'secondary'
    | 'outline'
    | 'filled'
    | 'flushed'
    | 'unstyled'
}

export function Flex(props: FlexProps) {
  return <ChakraFlex {...props} />
}

export default Flex
