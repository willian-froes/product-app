import { TextInputProps } from 'react-native'

export type InputType = 'text' | 'cpf' | 'password' | 'search'

export interface InputProps {
  type?: InputType
  label?: string
  value?: string
  onChangeText?: (value: string) => void
  placeholder?: string
  onPressIcon?: () => void
  iconName?: string
  inputProps?: TextInputProps
  activatedAction?: () => void
  deactivatedAction?: () => void
}
