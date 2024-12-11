import { ButtonRadius, ButtonSize, ButtonSizeDefinitions } from './Button.types'
import { font, spacing } from '../../config/theme/theme.config'

export const buttonBorderRadius: Record<ButtonRadius, string> = {
  none: '0px',
  semi: '6px',
  default: '10px',
  circle: '128px',
}

export const buttonContentSize: Record<ButtonSize, ButtonSizeDefinitions> = {
  small: {
    padding: spacing.xs,
    fontSize: font.size.body.sub.mobile,
    iconSize: 16,
  },
  medium: {
    padding: spacing.m,
    fontSize: font.size.body.p.mobile,
    iconSize: 20,
  },
  large: {
    padding: spacing.xl,
    fontSize: font.size.heading.h5.mobile,
    iconSize: 24,
  },
}
