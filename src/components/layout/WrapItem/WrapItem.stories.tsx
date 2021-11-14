import React from 'react'
import { Meta, Story } from '@storybook/react'

import WrapItem from './WrapItem'

export const primary: Story = () => <WrapItem>hello</WrapItem>

export default {
  title: 'components/layout/WrapItem',
} as Meta
