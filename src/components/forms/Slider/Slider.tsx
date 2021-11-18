import React from 'react'
import {
  Slider as ChakraSlider,
  SliderProps as ChakraSliderProps,
} from '@chakra-ui/react'

export interface SliderProps extends ChakraSliderProps {
  variant?:
    | 'primary'
    | 'secondary'
    | 'outline'
    | 'filled'
    | 'flushed'
    | 'unstyled'
}

export function Slider(props: SliderProps) {
  return <ChakraSlider {...props} />
}

export default Slider
