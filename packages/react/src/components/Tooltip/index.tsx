import * as TooltipPrimitive from '@radix-ui/react-tooltip'
import { ComponentProps } from 'react'
import {
  TooltipArrow as TooltipArrowStyle,
  TooltipContent as TooltipContentStyle,
} from './styles'

export const TooltipArrow = TooltipArrowStyle

export interface TooltipProps
  extends ComponentProps<typeof TooltipPrimitive.Root> {}

export function Tooltip(props: TooltipProps) {
  return (
    <TooltipPrimitive.Provider>
      <TooltipPrimitive.Root {...props} />
    </TooltipPrimitive.Provider>
  )
}

export interface TooltipTriggerProps
  extends ComponentProps<typeof TooltipPrimitive.Trigger> {}

export function TooltipTrigger(props: TooltipTriggerProps) {
  return <TooltipPrimitive.Trigger asChild {...props} />
}

export interface TooltipContentProps
  extends ComponentProps<typeof TooltipContentStyle> {}

export function TooltipContent(props: TooltipContentProps) {
  return (
    <TooltipPrimitive.Portal>
      <TooltipContentStyle {...props} />
    </TooltipPrimitive.Portal>
  )
}

Tooltip.displayName = 'Tooltip'
