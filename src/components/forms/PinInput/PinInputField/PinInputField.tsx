import React from 'react'
import {
  PinInputField as ChakraPinInputField,
  PinInputFieldProps as ChakraPinInputFieldProps,
} from '@chakra-ui/react'

export interface PinInputFieldProps extends ChakraPinInputFieldProps {
  variant?:
    | 'primary'
    | 'secondary'
    | 'outline'
    | 'filled'
    | 'flushed'
    | 'unstyled'
}

export function PinInputField(props: PinInputFieldProps) {
  return <ChakraPinInputField {...props} />
}

export default PinInputField
