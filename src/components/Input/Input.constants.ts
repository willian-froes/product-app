import { Mask, Masks } from 'react-native-mask-input'

import { InputType } from './Input.types'

export const keyboardType: Record<InputType, string> = {
  text: 'default',
  cpf: 'number-pad',
  password: 'default',
  search: 'default',
}

type IconType = {
  activated: string
  deactivated: string
}

export const iconByType: { [key: string]: IconType } = {
  password: {
    activated: 'eye-off-outline',
    deactivated: 'eye',
  },
  search: {
    activated: 'close',
    deactivated: 'magnify',
  },
}

export const inputMasks: Record<InputType, Mask | undefined> = {
  ['text']: undefined,
  ['cpf']: Masks.BRL_CPF,
  ['password']: undefined,
  ['search']: undefined,
}
