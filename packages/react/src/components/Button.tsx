import { ComponentProps, ElementType } from 'react'
import { styled } from '../styles'

export const Button = styled('button', {
  all: 'unset',

  borderRadius: '$sm',

  fontSize: '$sm',
  fontWeight: '$medium',
  fontFamily: '$default',
  textAlign: 'center',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$2',
  minWidth: 120,
  boxSizing: 'border-box',

  cursor: 'pointer',

  svg: {
    height: '$4',
    width: '$4',
  },

  '&:disabled': {
    cursor: 'not-allowed',
  },

  variants: {
    size: {
      sm: {
        height: 38,
        padding: '0 $4',
      },

      md: {
        height: 46,
        padding: '0 $4',
      },
    },

    variant: {
      primary: {
        color: '$white',
        background: '$ignite500',

        '&:not(:disabled):hover': {
          background: '$ignite300',
        },

        '&:disabled': {
          background: '$gray200',
        },
      },

      secondary: {
        border: '2px solid $ignite500',
        color: '$ignite300',

        '&:not(:disabled):hover': {
          background: '$ignite500',
          color: '$white',
        },

        '&:disabled': {
          color: '$gray200',
          borderColor: '$gray200',
        },
      },

      tertiary: {
        color: '$gray100',

        '&:not(:disabled):hover': {
          color: '$white',
        },

        '&:disabled': {
          color: '$gray600',
        },
      },
    },
  },

  defaultVariants: {
    size: 'md',
    variant: 'primary',
  },
})

export interface ButtonProps extends ComponentProps<typeof Button> {
  as?: ElementType
}
