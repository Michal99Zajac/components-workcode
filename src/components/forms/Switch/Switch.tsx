import React from 'react'
import {
  Switch as ChakraSwitch,
  SwitchProps as ChakraSwitchProps,
} from '@chakra-ui/react'

export interface SwitchProps extends ChakraSwitchProps {
  variant?:
    | 'primary'
    | 'secondary'
    | 'outline'
    | 'filled'
    | 'flushed'
    | 'unstyled'
}

export function Switch(props: SwitchProps) {
  return <ChakraSwitch {...props} />
}

export default Switch
