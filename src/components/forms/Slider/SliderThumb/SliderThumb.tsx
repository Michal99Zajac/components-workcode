import React from 'react'
import {
  SliderThumb as ChakraSliderThumb,
  SliderThumbProps as ChakraSliderThumbProps,
} from '@chakra-ui/react'

export interface SliderThumbProps extends ChakraSliderThumbProps {
  variant?:
    | 'primary'
    | 'secondary'
    | 'outline'
    | 'filled'
    | 'flushed'
    | 'unstyled'
}

export function SliderThumb(props: SliderThumbProps) {
  return <ChakraSliderThumb {...props} />
}

export default SliderThumb
