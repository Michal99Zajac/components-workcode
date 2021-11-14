import React from 'react'
import {
  Wrap as ChakraWrap,
  WrapProps as ChakraWrapProps,
} from '@chakra-ui/react'

export interface WrapProps extends ChakraWrapProps {
  variant?:
    | 'primary'
    | 'secondary'
    | 'outline'
    | 'filled'
    | 'flushed'
    | 'unstyled'
}

export function Wrap(props: WrapProps) {
  return <ChakraWrap {...props} />
}

export default Wrap
