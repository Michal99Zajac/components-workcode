import React from 'react'
import { Meta, Story } from '@storybook/react'
import { Stack } from '@chakra-ui/react'

import Select from './Select'

export const primarySelect: Story = () => (
  <Select placeholder="hello world!">
    <option value="value1">value 1</option>
    <option value="value2">value 2</option>
    <option value="value3">value 3</option>
  </Select>
)
export const secondarySelect: Story = () => (
  <Select variant="secondary" placeholder="hello world!">
    <option value="value1">value 1</option>
    <option value="value2">value 2</option>
    <option value="value3">value 3</option>
  </Select>
)
export const sizes: Story = () => (
  <Stack>
    <Select size="xs" placeholder="hello world!">
      <option value="value1">value 1</option>
      <option value="value2">value 2</option>
      <option value="value3">value 3</option>
    </Select>
    <Select size="sm" placeholder="hello world!">
      <option value="value1">value 1</option>
      <option value="value2">value 2</option>
      <option value="value3">value 3</option>
    </Select>
    <Select size="md" placeholder="hello world!">
      <option value="value1">value 1</option>
      <option value="value2">value 2</option>
      <option value="value3">value 3</option>
    </Select>
    <Select size="lg" placeholder="hello world!">
      <option value="value1">value 1</option>
      <option value="value2">value 2</option>
      <option value="value3">value 3</option>
    </Select>
    <Select size="xs" variant="secondary" placeholder="hello world!">
      <option value="value1">value 1</option>
      <option value="value2">value 2</option>
      <option value="value3">value 3</option>
    </Select>
    <Select size="sm" variant="secondary" placeholder="hello world!">
      <option value="value1">value 1</option>
      <option value="value2">value 2</option>
      <option value="value3">value 3</option>
    </Select>
    <Select size="md" variant="secondary" placeholder="hello world!">
      <option value="value1">value 1</option>
      <option value="value2">value 2</option>
      <option value="value3">value 3</option>
    </Select>
    <Select size="lg" variant="secondary" placeholder="hello world!">
      <option value="value1">value 1</option>
      <option value="value2">value 2</option>
      <option value="value3">value 3</option>
    </Select>
  </Stack>
)
export const disabled: Story = () => (
  <Stack>
    <Select isDisabled placeholder="hello world!">
      <option value="value1">value 1</option>
      <option value="value2">value 2</option>
      <option value="value3">value 3</option>
    </Select>
    <Select isDisabled variant="secondary" placeholder="hello world!">
      <option value="value1">value 1</option>
      <option value="value2">value 2</option>
      <option value="value3">value 3</option>
    </Select>
  </Stack>
)

export default {
  title: 'components/forms/Select',
} as Meta
