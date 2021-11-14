import React from 'react'
import { Meta, Story } from '@storybook/react'

import FormErrorMessage from './FormErrorMessage'

export const primary: Story = () => <FormErrorMessage>hello</FormErrorMessage>

export default {
  title: 'components/forms/FormErrorMessage',
} as Meta
