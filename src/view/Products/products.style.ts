import { Dimensions } from 'react-native'
import styled from 'styled-components/native'
import MaterialIcon from '@react-native-vector-icons/material-icons'

export const Wrapper = styled.View`
  background: ${({ theme }) => theme.color.background.normal};
  height: ${Dimensions.get('window').height}px;
  padding: ${({ theme }) => theme.spacing.l};
`

export const Header = styled.View`
  gap: ${({ theme }) => theme.spacing.m};
`

export const GoToPreferencesButton = styled(MaterialIcon).attrs(
  ({ theme }) => ({
    size: 24,
    color: theme.color.gray.normal,
  }),
)``

export const Title = styled.Text`
  color: ${({ theme }) => theme.color.text.normal};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  font-size: ${({ theme }) => theme.font.size.heading.normal.h2.mobile};
`

export const Subtitle = styled.Text`
  color: ${({ theme }) => theme.color.gray.normal};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  font-size: ${({ theme }) => theme.font.size.body.sub.mobile};
`
