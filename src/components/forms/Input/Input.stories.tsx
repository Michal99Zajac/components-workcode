import React from 'react'
import { Meta, Story } from '@storybook/react'
import { Stack, InputGroup, InputLeftAddon } from '@chakra-ui/react'

import Input from './Input'

export const primaryInput: Story = () => <Input placeholder="type something" />
export const secondaryInput: Story = () => (
  <Input placeholder="type something" variant="secondary" />
)
export const invalidInput: Story = () => (
  <Stack>
    <Input isInvalid placeholder="type something" />
    <Input placeholder="type something" variant="secondary" isInvalid />
  </Stack>
)
export const passwordInput: Story = () => (
  <Stack>
    <Input type="password" placeholder="password" />
    <Input placeholder="password" variant="secondary" type="password" />
  </Stack>
)
export const primaryDisabled: Story = () => (
  <Stack>
    <Input isDisabled placeholder="type something" />
    <Input isDisabled placeholder="type something" variant="secondary" />
  </Stack>
)
export const sizes: Story = () => (
  <Stack>
    <Input size="xs" placeholder="type something" />
    <Input size="sm" placeholder="type something" />
    <Input size="md" placeholder="type something" />
    <Input size="lg" placeholder="type something" />
    <Input size="xs" placeholder="type something" variant="secondary" />
    <Input size="sm" placeholder="type something" variant="secondary" />
    <Input size="md" placeholder="type something" variant="secondary" />
    <Input size="lg" placeholder="type something" variant="secondary" />
  </Stack>
)
export const inputWithAddon: Story = () => (
  <Stack>
    <InputGroup>
      <InputLeftAddon>primary</InputLeftAddon>
      <Input placeholder="type something" />
    </InputGroup>
    <InputGroup>
      <InputLeftAddon>secondary</InputLeftAddon>
      <Input placeholder="type something" variant="secondary" />
    </InputGroup>
  </Stack>
)

export default {
  title: 'Input',
} as Meta
