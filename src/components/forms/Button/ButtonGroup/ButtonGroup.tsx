import React from 'react'
import {
  ButtonGroup as ChakraButtonGroup,
  ButtonGroupProps as ChakraButtonGroupProps,
} from '@chakra-ui/react'

export interface ButtonGroupProps extends ChakraButtonGroupProps {
  variant?:
    | 'primary'
    | 'secondary'
    | 'outline'
    | 'filled'
    | 'flushed'
    | 'unstyled'
}

export function ButtonGroup(props: ButtonGroupProps) {
  return <ChakraButtonGroup {...props} />
}

export default ButtonGroup
