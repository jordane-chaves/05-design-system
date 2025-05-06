import * as ToastPrimitive from '@radix-ui/react-toast'
import { X } from 'phosphor-react'
import { ComponentProps } from 'react'
import {
  ToastClose,
  ToastContainer,
  ToastDescription,
  ToastTitle,
  ToastViewport,
} from './styles'

interface ToastContainerProps extends ComponentProps<typeof ToastContainer> {}

export interface ToastProps extends Omit<ToastContainerProps, 'title'> {
  title?: string | null
  description: string
}

export function Toast({ title, description, ...props }: ToastProps) {
  return (
    <ToastPrimitive.Provider>
      <ToastContainer {...props}>
        {title && <ToastTitle>{title}</ToastTitle>}
        <ToastDescription>{description}</ToastDescription>

        <ToastClose asChild>
          <X />
        </ToastClose>
      </ToastContainer>

      <ToastViewport />
    </ToastPrimitive.Provider>
  )
}

Toast.displayName = 'Toast'
