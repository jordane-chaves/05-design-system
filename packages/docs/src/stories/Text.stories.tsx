import { Text, TextProps } from '@jordane-ignite-ui/react'
import { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Typography/Text',
  component: Text,

  args: {
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem vero dolore exercitationem voluptas ipsam cum itaque esse debitis ducimus! Aliquam sequi quidem quibusdam possimus tenetur pariatur animi accusantium odit eligendi.',
  },
} satisfies Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong text',
    as: 'strong',
  },
}
