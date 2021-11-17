import React from 'react'
import {
  SliderFilledTrack as ChakraSliderFilledTrack,
  SliderInnerTrackProps as ChakraSliderFilledTrackProps,
} from '@chakra-ui/react'

export interface SliderFilledTrackProps extends ChakraSliderFilledTrackProps {
  variant?:
    | 'primary'
    | 'secondary'
    | 'outline'
    | 'filled'
    | 'flushed'
    | 'unstyled'
}

export function SliderFilledTrack(props: SliderFilledTrackProps) {
  return <ChakraSliderFilledTrack {...props} />
}

export default SliderFilledTrack
