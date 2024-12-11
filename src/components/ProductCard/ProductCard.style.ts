import styled from 'styled-components/native'
import MaterialIcon from '@react-native-vector-icons/material-icons'

export const Wrapper = styled.TouchableOpacity.attrs({
  activeOpacity: 1,
})`
  flex-direction: row;
  align-items: center;
  background: ${({ theme }) => theme.color.secondary.normal};
  gap: ${({ theme }) => theme.spacing.m};
  padding: ${({ theme }) => theme.spacing.m};
  border-radius: 10px;
`

export const ProductIdentifier = styled.Text`
  color: ${({ theme }) => theme.color.gray.normal};
  font-weight: ${({ theme }) => theme.font.weight.extra};
  font-size: ${({ theme }) => theme.font.size.heading.h4.mobile};
`

export const ProductContent = styled.View`
  flex: 1;
  gap: ${({ theme }) => theme.spacing.xs};
`

export const CardHeader = styled.View`
  flex-direction: row;
  gap: ${({ theme }) => theme.spacing.xs};
`

export const ProductName = styled.Text`
  flex-grow: 1;
  color: ${({ theme }) => theme.color.text.normal};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  font-size: ${({ theme }) => theme.font.size.body.p.mobile};
`

export const EditButton = styled(MaterialIcon).attrs(({ theme }) => ({
  size: 20,
  color: theme.color.primary.normal,
}))``

export const RemoveButton = styled(MaterialIcon).attrs(({ theme }) => ({
  size: 20,
  color: theme.color.danger.normal,
}))``

export const ProductTotalValue = styled.Text`
  color: ${({ theme }) => theme.color.success.normal};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  font-size: ${({ theme }) => theme.font.size.heading.h5.mobile};
`

export const CardFooter = styled.View`
  flex-direction: row;
  gap: ${({ theme }) => theme.spacing.m};
  align-items: center;
`

export const ProductQuantity = styled.Text`
  color: ${({ theme }) => theme.color.gray.normal};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  font-size: ${({ theme }) => theme.font.size.body.p.mobile};
`

export const ProductValueContainer = styled.View`
  flex-direction: row;
  align-items: center;
  flex-grow: 1;
`

export const ProductValue = styled.Text`
  color: ${({ theme }) => theme.color.text.normal};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  font-size: ${({ theme }) => theme.font.size.body.p.mobile};
`

export const ProductValueIndicator = styled.Text`
  color: ${({ theme }) => theme.color.gray.normal};
  font-weight: ${({ theme }) => theme.font.weight.regular};
  font-size: ${({ theme }) => theme.font.size.body.p.mobile};
`
