import { Story, Meta } from '@storybook/react'
import { ButtonGroup } from '@chakra-ui/react'
import React from 'react'

import Button from './Button'

export const primaryButton: Story = () => (
  <Button variant="primary">Click Me!</Button>
)
export const secondaryButton: Story = () => (
  <Button variant="secondary">Click Me!</Button>
)
export const sizes: Story = () => (
  <ButtonGroup spacing={6}>
    <Button size="lg">Click Me!</Button>
    <Button size="md">Click Me!</Button>
    <Button size="sm">Click Me!</Button>
    <Button size="xs">Click Me!</Button>
  </ButtonGroup>
)

export default {
  title: 'Button',
} as Meta
