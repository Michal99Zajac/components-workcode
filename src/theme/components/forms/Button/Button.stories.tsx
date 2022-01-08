import React from 'react'
import { Story, Meta } from '@storybook/react'
import { ButtonGroup, Stack, Button } from '@chakra-ui/react'
import { EmailIcon } from '@chakra-ui/icons'

export const primary: Story = () => <Button>Click Me!</Button>
export const disabled: Story = () => <Button isDisabled>Click Me!</Button>
export const loading: Story = () => <Button isLoading>Click Me!</Button>
export const withIcon: Story = () => (
  <Button leftIcon={<EmailIcon />}>Click me!</Button>
)
export const sizes: Story = () => (
  <Stack>
    <ButtonGroup spacing={6}>
      <Button size="lg">Click Me!</Button>
      <Button size="md">Click Me!</Button>
      <Button size="sm">Click Me!</Button>
      <Button size="xs">Click Me!</Button>
    </ButtonGroup>
  </Stack>
)

export default {
  title: 'components/forms/Button',
} as Meta
