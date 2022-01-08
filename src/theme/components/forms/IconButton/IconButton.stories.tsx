import React from 'react'
import { Story, Meta } from '@storybook/react'
import { IconButton, Stack } from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'

export const primary: Story = () => (
  <IconButton aria-label="search" icon={<SearchIcon />} />
)
export const disabled: Story = () => (
  <IconButton aria-label="search" isDisabled icon={<SearchIcon />} />
)
export const loading: Story = () => (
  <IconButton aria-label="search" isLoading icon={<SearchIcon />} />
)
export const sizes: Story = () => (
  <Stack>
    <div>
      <IconButton aria-label="search" size="xs" icon={<SearchIcon />} />
    </div>
    <div>
      <IconButton aria-label="search" size="sm" icon={<SearchIcon />} />
    </div>
    <div>
      <IconButton aria-label="search" size="md" icon={<SearchIcon />} />
    </div>
    <div>
      <IconButton aria-label="search" size="lg" icon={<SearchIcon />} />
    </div>
  </Stack>
)

export default {
  title: 'components/forms/IconButton',
} as Meta
