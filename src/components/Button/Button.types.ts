export type ButtonSize = 'small' | 'medium' | 'large'

export type ButtonSizeDefinitions = {
  padding: string
  fontSize: string
  iconSize: number
}

export type ButtonRadius = 'none' | 'semi' | 'default' | 'circle'

export type ButtonVariant = 'filled' | 'outline'

export type ButtonColor =
  | 'primary'
  | 'secondary'
  | 'info'
  | 'success'
  | 'danger'

export type ButtonAlign = 'flex-start' | 'none' | 'flex-end'

export interface ButtonProps {
  label?: string
  icon?: any
  onPress?: () => void
  color?: ButtonColor
  variant?: ButtonVariant
  radius?: ButtonRadius
  size?: ButtonSize
  align?: ButtonAlign
}
