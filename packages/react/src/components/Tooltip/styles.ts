import * as TooltipPrimitive from '@radix-ui/react-tooltip'

import { styled } from '../../styles'

export const TooltipContent = styled(TooltipPrimitive.Content, {
  backgroundColor: '$gray900',
  borderRadius: '$xs',
  boxShadow: '4px 16px 24px 0px rgba(0, 0, 0, 0.25)',
  padding: '$3 $4',
  maxWidth: '320px',
})

export const TooltipArrow = styled(TooltipPrimitive.Arrow, {
  fill: '$gray900',
  height: '$2',
  width: '$4',
})

TooltipArrow.displayName = 'TooltipArrow'
