import type { StoryObj, Meta } from '@storybook/react'
import { Button, ButtonProps } from '@jordane-ignite-ui/react'

export default {
  title: 'Form/Button',
  component: Button,
  args: {
    children: 'Enviar',
  },
} satisfies Meta<ButtonProps>

export const Primary: StoryObj<ButtonProps> = {}

export const Big: StoryObj<ButtonProps> = {
  args: {
    size: 'big',
  },
}
