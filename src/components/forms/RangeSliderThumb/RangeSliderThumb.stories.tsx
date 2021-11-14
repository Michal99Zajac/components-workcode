import React from 'react'
import { Meta, Story } from '@storybook/react'

import RangeSliderThumb from './RangeSliderThumb'

export const primary: Story = () => (
  <RangeSliderThumb index={0}>hello</RangeSliderThumb>
)

export default {
  title: 'components/forms/RangeSliderThumb',
} as Meta
