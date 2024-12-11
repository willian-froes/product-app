import styled from 'styled-components/native'
import MaterialDesignIcon from '@react-native-vector-icons/material-design-icons'
import MaskInput from 'react-native-mask-input'

export const Wrapper = styled.View`
  gap: ${({ theme }) => theme.spacing.s};
  width: 100%;
`

export const InputWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background: ${({ theme }) => theme.color.secondary.normal};
  gap: ${({ theme }) => theme.spacing.m};
  border: 1px solid ${({ theme }) => theme.color.primary.normal};
  border-radius: 10px;
  padding: ${({ theme }) => `6px ${theme.spacing.m}`};
  overflow: hidden;
`

export const InputField = styled(MaskInput).attrs(({ theme }) => ({
  placeholderTextColor: theme.color.gray.normal,
}))`
  font-size: ${({ theme }) => theme.font.size.body.p.mobile};
  color: ${({ theme }) => theme.color.text.normal};
  flex: 1;
`

export const Icon = styled(MaterialDesignIcon).attrs(({ theme }) => ({
  size: 24,
  color: theme.color.text.light,
}))``

export const Label = styled.Text`
  font-size: ${({ theme }) => theme.font.size.heading.h6.mobile};
  color: ${({ theme }) => theme.color.gray.normal};
  font-weight: ${({ theme }) => theme.font.weight.medium};
`
