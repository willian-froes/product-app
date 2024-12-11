import React from 'react'
import {
  KeyboardTypeOptions,
  NativeSyntheticEvent,
  TextInputFocusEventData,
} from 'react-native'

import { iconByType, inputMasks, keyboardType } from './Input.constants'
import { Icon, InputField, InputWrapper, Wrapper } from './Input.style'
import { InputProps } from './Input.types'

export const Input = ({
  value,
  onChangeText,
  label,
  placeholder,
  iconName,
  type = 'text',
  onPressIcon = () => {},
  inputProps,
  activatedAction = () => {},
  deactivatedAction = () => {},
}: InputProps) => {
  const [hasActivatedAction, setHasActivatedAction] =
    React.useState<boolean>(false)

  const secureTextEntry = type === 'password' && !hasActivatedAction
  const hasIcon = ['password', 'search'].includes(type) || iconName

  const onBlur = (event: NativeSyntheticEvent<TextInputFocusEventData>) => {
    if (inputProps?.onBlur) {
      inputProps?.onBlur(event)
      if (type === 'search') setHasActivatedAction(false)
    }
  }

  const onPress = () => {
    if (type === 'search') setHasActivatedAction(true)
  }

  const resolveOnPressIcon = () => {
    onPressIcon()
    setHasActivatedAction(!hasActivatedAction)
    hasActivatedAction ? deactivatedAction() : activatedAction()
  }

  const resolveIcon = () =>
    hasIcon && (
      <Icon
        name={
          iconName ||
          (iconByType[type][
            hasActivatedAction ? 'activated' : 'deactivated'
          ] as any)
        }
        onPress={resolveOnPressIcon}
      />
    )

  return (
    <Wrapper>
      <InputWrapper>
        <InputField
          onPress={onPress}
          keyboardType={keyboardType[type] as KeyboardTypeOptions}
          secureTextEntry={secureTextEntry}
          onChangeText={(_, unmasked) => onChangeText?.(unmasked)}
          mask={inputMasks[type]}
          {...{
            ...inputProps,
            value,
            placeholder,
            label,
            onBlur,
          }}
        />
        {resolveIcon()}
      </InputWrapper>
    </Wrapper>
  )
}
