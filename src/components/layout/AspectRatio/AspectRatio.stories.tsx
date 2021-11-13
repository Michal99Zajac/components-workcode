import React from 'react'
import { Meta, Story } from '@storybook/react'

import AspectRatio from './AspectRatio'

export const primary: Story = () => (
  <AspectRatio maxW="560px" ratio={1}>
    <iframe
      title="naruto"
      src="https://www.youtube.com/embed/QhBnZ6NPOY0"
      allowFullScreen
    />
  </AspectRatio>
)

export default {
  title: 'components/layout/AspectRatio',
} as Meta
