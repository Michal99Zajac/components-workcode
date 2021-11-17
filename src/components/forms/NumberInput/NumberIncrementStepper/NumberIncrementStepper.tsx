import React from 'react'
import {
  NumberIncrementStepper as ChakraNumberIncrementStepper,
  NumberIncrementStepperProps as ChakraNumberIncrementStepperProps,
} from '@chakra-ui/react'

export interface NumberIncrementStepperProps
  extends ChakraNumberIncrementStepperProps {
  variant?:
    | 'primary'
    | 'secondary'
    | 'outline'
    | 'filled'
    | 'flushed'
    | 'unstyled'
}

export function NumberIncrementStepper(props: NumberIncrementStepperProps) {
  return <ChakraNumberIncrementStepper {...props} />
}

export default NumberIncrementStepper
