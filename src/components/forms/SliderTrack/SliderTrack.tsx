import React from 'react'
import {
  SliderTrack as ChakraSliderTrack,
  SliderTrackProps as ChakraSliderTrackProps,
} from '@chakra-ui/react'

export interface SliderTrackProps extends ChakraSliderTrackProps {
  variant?:
    | 'primary'
    | 'secondary'
    | 'outline'
    | 'filled'
    | 'flushed'
    | 'unstyled'
}

export function SliderTrack(props: SliderTrackProps) {
  return <ChakraSliderTrack {...props} />
}

export default SliderTrack
