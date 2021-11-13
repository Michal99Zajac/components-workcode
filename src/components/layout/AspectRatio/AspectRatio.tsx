import React from 'react'
import {
  AspectRatio as ChakraAspectRatio,
  AspectRatioProps as ChakraAspectRatioProps,
} from '@chakra-ui/react'

export interface AspectRatioProps extends ChakraAspectRatioProps {
  variant?:
    | 'primary'
    | 'secondary'
    | 'outline'
    | 'filled'
    | 'flushed'
    | 'unstyled'
}

export function AspectRatio(props: AspectRatioProps) {
  return <ChakraAspectRatio {...props} />
}

export default AspectRatio
