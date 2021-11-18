import React from 'react'
import {
  Radio as ChakraRadio,
  RadioProps as ChakraRadioProps,
} from '@chakra-ui/react'

export interface RadioProps extends ChakraRadioProps {
  variant?:
    | 'primary'
    | 'secondary'
    | 'outline'
    | 'filled'
    | 'flushed'
    | 'unstyled'
}

export function Radio(props: RadioProps) {
  return <ChakraRadio {...props} />
}

export default Radio
