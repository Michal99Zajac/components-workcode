import React from 'react'
import {
  RangeSliderThumb as ChakraRangeSliderThumb,
  RangeSliderThumbProps as ChakraRangeSliderThumbProps,
} from '@chakra-ui/react'

export interface RangeSliderThumbProps extends ChakraRangeSliderThumbProps {
  variant?:
    | 'primary'
    | 'secondary'
    | 'outline'
    | 'filled'
    | 'flushed'
    | 'unstyled'
}

export function RangeSliderThumb(props: RangeSliderThumbProps) {
  return <ChakraRangeSliderThumb {...props} />
}

export default RangeSliderThumb
