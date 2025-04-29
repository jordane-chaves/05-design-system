import { Box, BoxProps, Text } from '@jordane-ignite-ui/react'
import { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Surfaces/Box',
  component: Box,

  args: {
    children: <Text>Example text</Text>,
  },

  argTypes: {
    children: {
      control: {
        disable: true,
      },
    },
  },
} satisfies Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}
