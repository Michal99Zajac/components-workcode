import React from 'react'
import { Meta, Story } from '@storybook/react'

import EditablePreview from './EditablePreview'

export const primary: Story = () => <EditablePreview>hello</EditablePreview>

export default {
  title: 'components/forms/EditablePreview',
} as Meta
