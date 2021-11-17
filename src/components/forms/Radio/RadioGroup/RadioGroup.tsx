import React from 'react'
import {
  RadioGroup as ChakraRadioGroup,
  RadioGroupProps as ChakraRadioGroupProps,
} from '@chakra-ui/react'

export interface RadioGroupProps extends ChakraRadioGroupProps {
  variant?:
    | 'primary'
    | 'secondary'
    | 'outline'
    | 'filled'
    | 'flushed'
    | 'unstyled'
}

export function RadioGroup(props: RadioGroupProps) {
  return <ChakraRadioGroup {...props} />
}

export default RadioGroup
