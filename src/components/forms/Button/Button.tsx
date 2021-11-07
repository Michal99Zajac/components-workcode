import React from 'react'
import {
  Button as ChakraButton,
  ButtonProps as ChakraButtonProps,
} from '@chakra-ui/react'
export interface ButtonProps extends ChakraButtonProps {
  variant?: 'primary' | 'secondary' | 'ghost' | 'solid' | 'outline' | 'link'
}

export function Button(props: ButtonProps) {
  return <ChakraButton {...props} />
}

export default Button
