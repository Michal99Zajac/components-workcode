import React from 'react'
import {
  IconButton as ChakraIconButton,
  IconButtonProps as ChakraIconButtonProps,
} from '@chakra-ui/react'

import { RingIcon, ChatIcon } from '../../icons'

const styles = {
  _hover: {
    transform: 'scale(1.1)',
    _focus: {
      transform: 'scale(1)',
    },
    _disabled: {
      transform: 'scale(1)',
    },
  },
  _disabled: {
    opacity: '0.5',
    cursor: 'not-allowed',
  },
  borderRadius: '100%',
  bg: 'transparent',
}

export interface IconButtonProps extends ChakraIconButtonProps {
  variant?:
    | 'ghost'
    | 'link'
    | 'outline'
    | 'solid'
    | 'unstyled'
    | 'primary'
    | 'secondary'
}

export function RingIconButton(props: IconButtonProps) {
  return <ChakraIconButton icon={<RingIcon />} {...styles} {...props} />
}

export function ChatIconButton(props: IconButtonProps) {
  return <ChakraIconButton icon={<ChatIcon />} {...styles} {...props} />
}

export default {
  RingIconButton,
  ChatIconButton,
}
