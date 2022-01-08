import React from 'react'
import { Meta, Story } from '@storybook/react'
import { Stack, Select } from '@chakra-ui/react'

export const primary: Story = () => (
  <Select placeholder="hello world!">
    <option value="value1">value 1</option>
    <option value="value2">value 2</option>
    <option value="value3">value 3</option>
  </Select>
)
export const sizes: Story = () => (
  <Stack>
    {['xs', 'sm', 'md', 'lg'].map((size) => (
      <Select key={size} size={size} placeholder="hello world!">
        <option value="value1">value 1</option>
        <option value="value2">value 2</option>
        <option value="value3">value 3</option>
      </Select>
    ))}
  </Stack>
)
export const disabled: Story = () => (
  <Select isDisabled placeholder="hello world!">
    <option value="value1">value 1</option>
    <option value="value2">value 2</option>
    <option value="value3">value 3</option>
  </Select>
)
export const invalid: Story = () => (
  <Select isInvalid placeholder="hello world!">
    <option value="value1">value 1</option>
    <option value="value2">value 2</option>
    <option value="value3">value 3</option>
  </Select>
)

export default {
  title: 'components/forms/Select',
} as Meta
