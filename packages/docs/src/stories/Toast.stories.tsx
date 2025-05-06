import { Button, Toast, ToastProps } from '@jordane-ignite-ui/react'
import { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'

function ControlledToast(props: ToastProps) {
  const [open, setOpen] = useState(false)

  return (
    <div style={{ position: 'relative', minHeight: '200px' }}>
      <Button onClick={() => setOpen(true)}>Show toast</Button>
      <Toast open={open} onOpenChange={setOpen} {...props} />
    </div>
  )
}

export default {
  title: 'Surfaces/Toast',
  component: Toast,
  args: {
    title: 'Example title',
    description: 'Example description',
  },
  render: ControlledToast,
} satisfies Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {}
