import React from 'react'
import {
  Spacer as ChakraSpacer,
  SpacerProps as ChakraSpacerProps,
} from '@chakra-ui/react'

export interface SpacerProps extends ChakraSpacerProps {
  variant?:
    | 'primary'
    | 'secondary'
    | 'outline'
    | 'filled'
    | 'flushed'
    | 'unstyled'
}

export function Spacer(props: SpacerProps) {
  return <ChakraSpacer {...props} />
}

export default Spacer
