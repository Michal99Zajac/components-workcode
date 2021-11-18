import React from 'react'
import {
  NumberDecrementStepper as ChakraNumberDecrementStepper,
  NumberDecrementStepperProps as ChakraNumberDecrementStepperProps,
} from '@chakra-ui/react'

export interface NumberDecrementStepperProps
  extends ChakraNumberDecrementStepperProps {
  variant?:
    | 'primary'
    | 'secondary'
    | 'outline'
    | 'filled'
    | 'flushed'
    | 'unstyled'
}

export function NumberDecrementStepper(props: NumberDecrementStepperProps) {
  return <ChakraNumberDecrementStepper {...props} />
}

export default NumberDecrementStepper
