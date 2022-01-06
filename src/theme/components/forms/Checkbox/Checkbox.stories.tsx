import React from 'react'
import { Meta, Story } from '@storybook/react'
import { Stack, Checkbox } from '@chakra-ui/react'

export const primary: Story = () => <Checkbox>check me</Checkbox>
export const disabled: Story = () => <Checkbox isDisabled>check me!</Checkbox>
export const sizes: Story = () => (
  <Stack direction="column">
    <Checkbox size="sm">check me!</Checkbox>
    <Checkbox size="md">check me!</Checkbox>
    <Checkbox size="lg">check me!</Checkbox>
  </Stack>
)

export default {
  title: 'components/forms/Checkbox',
} as Meta
