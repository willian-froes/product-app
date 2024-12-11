import React from 'react'

import { Icon, Label, Wrapper } from './Button.style'
import { ButtonProps } from './Button.types'

export const Button = ({
  label,
  icon,
  onPress,
  variant = 'filled',
  color = 'primary',
  radius = 'default',
  size = 'medium',
}: ButtonProps) => {
  const resolveIcon = () =>
    icon && <Icon name={icon} iconSize={size} {...{ variant, color }} />

  const resolveLabel = () =>
    label && <Label {...{ variant, color, size }}>{label}</Label>

  return (
    <Wrapper {...{ onPress, variant, color, radius, size }}>
      {resolveIcon()}
      {resolveLabel()}
    </Wrapper>
  )
}
