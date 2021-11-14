import React from 'react'
import { Meta, Story } from '@storybook/react'

import NumberIncrementStepper from './NumberIncrementStepper'

export const primary: Story = () => (
  <NumberIncrementStepper>hello</NumberIncrementStepper>
)

export default {
  title: 'components/forms/NumberIncrementStepper',
} as Meta
