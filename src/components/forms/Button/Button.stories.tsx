import { Story, Meta } from '@storybook/react'
import { ButtonGroup, Stack } from '@chakra-ui/react'
import React from 'react'

import Button from './Button'

export const primaryButton: Story = () => (
  <Button variant="primary">Click Me!</Button>
)
export const secondaryButton: Story = () => (
  <Button variant="secondary">Click Me!</Button>
)
export const disabledButton: Story = () => (
  <ButtonGroup>
    <Button>Click Me!</Button>
    <Button variant="secondary">Click Me!</Button>
  </ButtonGroup>
)
export const loadingButton: Story = () => (
  <ButtonGroup>
    <Button isLoading>Click Me!</Button>
    <Button isLoading variant="secondary">
      Click Me!
    </Button>
  </ButtonGroup>
)
export const sizes: Story = () => (
  <Stack>
    <ButtonGroup spacing={6}>
      <Button size="lg">Click Me!</Button>
      <Button size="md">Click Me!</Button>
      <Button size="sm">Click Me!</Button>
      <Button size="xs">Click Me!</Button>
    </ButtonGroup>
    <ButtonGroup spacing={6}>
      <Button size="lg" variant="secondary">
        Click Me!
      </Button>
      <Button size="md" variant="secondary">
        Click Me!
      </Button>
      <Button size="sm" variant="secondary">
        Click Me!
      </Button>
      <Button size="xs" variant="secondary">
        Click Me!
      </Button>
    </ButtonGroup>
  </Stack>
)

export default {
  title: 'components/forms/Button',
} as Meta
