import React from 'react'
import {
  NumberInputStepper as ChakraNumberInputStepper,
  NumberInputStepperProps as ChakraNumberInputStepperProps,
} from '@chakra-ui/react'

export interface NumberInputStepperProps extends ChakraNumberInputStepperProps {
  variant?:
    | 'primary'
    | 'secondary'
    | 'outline'
    | 'filled'
    | 'flushed'
    | 'unstyled'
}

export function NumberInputStepper(props: NumberInputStepperProps) {
  return <ChakraNumberInputStepper {...props} />
}

export default NumberInputStepper
