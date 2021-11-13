import React from 'react'
import { Meta, Story } from '@storybook/react'
import { Stack } from '@chakra-ui/react'

import Textarea from './Textarea'

export const primaryTextarea: Story = () => (
  <Textarea placeholder="type something" />
)
export const secondaryTextarea: Story = () => (
  <Textarea placeholder="type something" variant="secondary" />
)
export const sizes: Story = () => (
  <Stack>
    <Textarea size="xs" placeholder="type something" />
    <Textarea size="sm" placeholder="type something" />
    <Textarea size="md" placeholder="type something" />
    <Textarea size="lg" placeholder="type something" />
    <Textarea size="xs" placeholder="type something" variant="secondary" />
    <Textarea size="sm" placeholder="type something" variant="secondary" />
    <Textarea size="md" placeholder="type something" variant="secondary" />
    <Textarea size="lg" placeholder="type something" variant="secondary" />
  </Stack>
)
export const disabled: Story = () => (
  <Stack>
    <Textarea placeholder="type something" isDisabled />
    <Textarea placeholder="type something" variant="secondary" isDisabled />
  </Stack>
)
export const invalid: Story = () => (
  <Stack>
    <Textarea placeholder="type something" isInvalid />
    <Textarea placeholder="type something" variant="secondary" isInvalid />
  </Stack>
)

export default {
  title: 'components/forms/Textarea',
} as Meta
