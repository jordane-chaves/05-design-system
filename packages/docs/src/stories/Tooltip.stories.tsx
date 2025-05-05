import {
  Button,
  Heading,
  Text,
  Tooltip,
  TooltipArrow,
  TooltipContent,
  TooltipProps,
  TooltipTrigger,
} from '@jordane-ignite-ui/react'
import { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Surfaces/Tooltip',
  component: Tooltip,
  args: {},

  render: (args: TooltipProps) => (
    <Tooltip {...args}>
      <TooltipTrigger>
        <Button>Hover</Button>
      </TooltipTrigger>

      <TooltipContent>
        <Heading>Example</Heading>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum ipsam
          aperiam eum, delectus quaerat repellat impedit cumque, molestiae nam
          voluptate magnam, magni earum nobis. Porro ratione totam amet maiores
          minima?
        </Text>
        <TooltipArrow />
      </TooltipContent>
    </Tooltip>
  ),
} satisfies Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {
  args: {},
}
