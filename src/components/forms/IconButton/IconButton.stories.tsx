import React from 'react'
import { ButtonGroup } from '@chakra-ui/react'
import { Story, Meta } from '@storybook/react'

import { RingIconButton, ChatIconButton } from './IconButton'

export const ringIconButton: Story = () => (
  <ButtonGroup>
    <RingIconButton aria-label="ring-button" />
    <RingIconButton variant="secondary" aria-label="ring-button" />
    <RingIconButton aria-label="ring-button" disabled />
    <RingIconButton variant="secondary" aria-label="ring-button" disabled />
  </ButtonGroup>
)
export const chatIcoonButton: Story = () => (
  <ButtonGroup>
    <ChatIconButton aria-label="chat-button" />
    <ChatIconButton variant="secondary" aria-label="chat-button" />
    <ChatIconButton aria-label="chat-button" disabled />
    <ChatIconButton variant="secondary" aria-label="chat-button" disabled />
  </ButtonGroup>
)

export default {
  title: 'components/forms/IconButtton',
} as Meta
