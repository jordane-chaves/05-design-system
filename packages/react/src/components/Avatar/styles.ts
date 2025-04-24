import * as Avatar from '@radix-ui/react-avatar'

import { styled } from '../../styles'

export const AvatarContainer = styled(Avatar.Root, {
  borderRadius: '$full',
  display: 'inline-block',
  height: '$12',
  width: '$12',
  overflow: 'hidden',
})

export const AvatarImage = styled(Avatar.Image, {
  borderRadius: 'inherit',
  height: '100%',
  width: '100%',
  objectFit: 'cover',
})

export const AvatarFallback = styled(Avatar.Fallback, {
  backgroundColor: '$gray600',
  color: '$gray800',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%',
  width: '100%',

  svg: {
    height: '$6',
    width: '$6',
  },
})
