import React from 'react'
import { Story, Meta } from '@storybook/react'
import { Switch, VStack } from '@chakra-ui/react'

export const primary: Story = () => <Switch />
export const sizes: Story = () => (
  <VStack align="flex-start">
    <Switch size="sm" />
    <Switch size="md" />
    <Switch size="lg" />
  </VStack>
)

export default {
  title: 'components/forms/Switch',
} as Meta
