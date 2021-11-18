import React from 'react'
import {
  PinInput as ChakraPinInput,
  PinInputProps as ChakraPinInputProps,
} from '@chakra-ui/react'

export interface PinInputProps extends ChakraPinInputProps {
  variant?:
    | 'primary'
    | 'secondary'
    | 'outline'
    | 'filled'
    | 'flushed'
    | 'unstyled'
}

export function PinInput(props: PinInputProps) {
  return <ChakraPinInput {...props} />
}

export default PinInput
