import React from 'react'
import { Meta, Story } from '@storybook/react'
import { Stack, InputGroup, InputLeftAddon, Input } from '@chakra-ui/react'

export const primary: Story = () => <Input placeholder="type something" />
export const invalid: Story = () => (
  <Input isInvalid placeholder="type something" />
)
export const password: Story = () => (
  <Input type="password" placeholder="password" />
)
export const disabled: Story = () => (
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
export const withAddon: Story = () => (
  <InputGroup>
    <InputLeftAddon>primary</InputLeftAddon>
    <Input placeholder="type something" />
  </InputGroup>
)

export default {
  title: 'components/forms/Input',
} as Meta
