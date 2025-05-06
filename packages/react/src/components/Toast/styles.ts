import * as ToastPrimitive from '@radix-ui/react-toast'

import { keyframes, styled } from '../../styles'
import { Text } from '../Text'

const slideIn = keyframes({
  from: {
    transform: 'translateY(100%)',
  },
  to: {
    transform: 'translateY(0)',
  },
})

const slideOut = keyframes({
  from: {
    transform: 'translateY(0)',
  },
  to: {
    transform: 'translateY(100%)',
  },
})

export const ToastContainer = styled(ToastPrimitive.Root, {
  borderRadius: '$sm',
  border: '1px solid $gray600',
  backgroundColor: '$gray800',
  display: 'flex',
  flexDirection: 'column',
  gap: '$1',
  padding: '$3 $5',
  width: '360px',
  position: 'relative',

  '&[data-state="open"]': {
    animation: `${slideIn} 200ms ease-out`,
  },

  '&[data-state="closed"]': {
    animation: `${slideOut} 100ms ease-out`,
  },
})

export const ToastViewport = styled(ToastPrimitive.Viewport, {
  position: 'fixed',
  right: '$8',
  bottom: '$8',
  margin: 0,
})

export const ToastTitle = styled(Text, {
  color: '$white',
  fontWeight: '$bold',

  defaultVariants: {
    size: 'xl',
  },
})

export const ToastDescription = styled(Text, {
  color: '$gray200',

  defaultVariants: {
    size: 'sm',
  },
})

export const ToastClose = styled(ToastPrimitive.Close, {
  color: '$gray200',
  position: 'absolute',
  top: '$4',
  right: '$4',

  svg: {
    height: '$5',
    width: '$5',
  },
})
