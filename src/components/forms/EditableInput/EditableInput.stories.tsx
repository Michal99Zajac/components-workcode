import React from 'react'
import { Meta, Story } from '@storybook/react'

import EditableInput from './EditableInput'

export const primary: Story = () => <EditableInput>hello</EditableInput>

export default {
  title: 'components/forms/EditableInput',
} as Meta
