import React from 'react'
import {
  RangeSliderTrack as ChakraRangeSliderTrack,
  RangeSliderTrackProps as ChakraRangeSliderTrackProps,
} from '@chakra-ui/react'

export interface RangeSliderTrackProps extends ChakraRangeSliderTrackProps {
  variant?:
    | 'primary'
    | 'secondary'
    | 'outline'
    | 'filled'
    | 'flushed'
    | 'unstyled'
}

export function RangeSliderTrack(props: RangeSliderTrackProps) {
  return <ChakraRangeSliderTrack {...props} />
}

export default RangeSliderTrack
