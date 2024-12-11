import styled from 'styled-components/native'
import MaterialIcon from '@react-native-vector-icons/material-icons'

export const Wrapper = styled.View`
  flex: 1;
  background: ${({ theme }) => theme.color.background.normal};
  padding: ${({ theme }) => theme.spacing.l};
  gap: ${({ theme }) => theme.spacing.xxl};
`

export const Header = styled.View``

export const UserImage = styled(MaterialIcon).attrs(({ theme }) => ({
  size: 80,
  color: theme.color.text.normal,
}))`
  text-align: center;
`

export const Section = styled.View`
  gap: ${({ theme }) => theme.spacing.xl};
`

export const SectionTitle = styled.Text`
  font-size: ${({ theme }) => theme.font.size.heading.h5.mobile};
  color: ${({ theme }) => theme.color.gray.normal};
  font-weight: ${({ theme }) => theme.font.weight.extra};
`
