import React from 'react'
import {
  RangeSliderFilledTrack as ChakraRangeSliderFilledTrack,
  RangeSliderInnerTrackProps as ChakraRangeSliderFilledTrackProps,
} from '@chakra-ui/react'

export interface RangeSliderFilledTrackProps
  extends ChakraRangeSliderFilledTrackProps {
  variant?:
    | 'primary'
    | 'secondary'
    | 'outline'
    | 'filled'
    | 'flushed'
    | 'unstyled'
}

export function RangeSliderFilledTrack(props: RangeSliderFilledTrackProps) {
  return <ChakraRangeSliderFilledTrack {...props} />
}

export default RangeSliderFilledTrack
