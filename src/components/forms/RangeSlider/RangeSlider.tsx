import React from 'react'
import {
  RangeSlider as ChakraRangeSlider,
  RangeSliderProps as ChakraRangeSliderProps,
} from '@chakra-ui/react'

export interface RangeSliderProps extends ChakraRangeSliderProps {
  variant?:
    | 'primary'
    | 'secondary'
    | 'outline'
    | 'filled'
    | 'flushed'
    | 'unstyled'
}

export function RangeSlider(props: RangeSliderProps) {
  return <ChakraRangeSlider {...props} />
}

export default RangeSlider
