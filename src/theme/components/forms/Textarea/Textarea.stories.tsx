import React from 'react'
import { Meta, Story } from '@storybook/react'
import { Stack, Textarea } from '@chakra-ui/react'

export const primaryTextarea: Story = () => (
  <Textarea placeholder="type something" />
)
export const sizes: Story = () => (
  <Stack>
    <Textarea size="xs" placeholder="type something" />
    <Textarea size="sm" placeholder="type something" />
    <Textarea size="md" placeholder="type something" />
    <Textarea size="lg" placeholder="type something" />
  </Stack>
)
export const disabled: Story = () => (
  <Textarea placeholder="type something" isDisabled />
)
export const invalid: Story = () => (
  <Textarea placeholder="type something" isInvalid />
)

export default {
  title: 'components/forms/Textarea',
} as Meta
