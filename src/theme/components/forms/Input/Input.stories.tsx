import React from 'react'
import { Meta, Story } from '@storybook/react'
import { Stack, InputGroup, InputLeftAddon, Input } from '@chakra-ui/react'

export const primaryInput: Story = () => <Input placeholder="type something" />
export const invalidInput: Story = () => (
  <Input isInvalid placeholder="type something" />
)
export const passwordInput: Story = () => (
  <Input type="password" placeholder="password" />
)
export const primaryDisabled: Story = () => (
  <Input isDisabled placeholder="type something" />
)
export const sizes: Story = () => (
  <Stack>
    <Input size="xs" placeholder="type something" />
    <Input size="sm" placeholder="type something" />
    <Input size="md" placeholder="type something" />
    <Input size="lg" placeholder="type something" />
  </Stack>
)
export const inputWithAddon: Story = () => (
  <InputGroup>
    <InputLeftAddon>primary</InputLeftAddon>
    <Input placeholder="type something" />
  </InputGroup>
)

export default {
  title: 'components/forms/Input',
} as Meta
