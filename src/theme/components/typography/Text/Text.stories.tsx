import React from 'react'
import { Meta, Story } from '@storybook/react'
import { VStack, Text } from '@chakra-ui/react'

const sizes = ['6xl', '5xl', '4xl', '3xl', '2xl', 'xl', 'lg', 'md', 'sm', 'xs']

export const fontSizes: Story = () => (
  <VStack align="flex-start">
    {sizes.map((size) => (
      <Text key={size} fontSize={size}>
        {`(${size}) @workcode simple text`}
      </Text>
    ))}
  </VStack>
)

export default {
  title: 'components/typography/Text',
} as Meta
