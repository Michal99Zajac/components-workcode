import React from 'react'
import { Story, Meta } from '@storybook/react'
import { VStack, Heading } from '@chakra-ui/react'

const sizes = ['4xl', '3xl', '2xl', 'xl', 'lg', 'md', 'sm', 'xs']

export const fontSizes: Story = () => (
  <VStack align="flex-start">
    {sizes.map((size) => (
      <Heading key={size} size={size}>
        {`(${size}) @workcode simple text`}
      </Heading>
    ))}
  </VStack>
)

export default {
  title: 'components/typography/Heading',
} as Meta
