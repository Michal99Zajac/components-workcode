import React from 'react'
import { Meta, Story } from '@storybook/react'

import NumberDecrementStepper from './NumberDecrementStepper'

export const primary: Story = () => (
  <NumberDecrementStepper>hello</NumberDecrementStepper>
)

export default {
  title: 'components/forms/NumberDecrementStepper',
} as Meta
