import styled from 'styled-components/native'

export const Wrapper = styled.View`
  flex: 1;
  background: ${({ theme }) => theme.color.background.normal};
  padding: ${({ theme }) => theme.spacing.l};
  padding-bottom: 0px;
  gap: ${({ theme }) => theme.spacing.xxl};
`

export const Header = styled.View`
  gap: ${({ theme }) => theme.spacing.m};
`

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

export const EmptyProductsListMessage = styled.Text`
  font-weight: ${({ theme }) => theme.font.weight.bold};
  color: ${({ theme }) => theme.color.gray.normal};
  text-align: center;
`

export const ProductsListHeaderInfoContainer = styled.View``

export const ProductsListHeader = styled.View`
  gap: ${({ theme }) => theme.spacing.s};
`

export const ProductsListTitle = styled.Text`
  color: ${({ theme }) => theme.color.text.normal};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  font-size: ${({ theme }) => theme.font.size.heading.normal.h3.mobile};
`

export const productsContentContainerStyle = {
  gap: 16,
  paddingBottom: 20,
}

export const sortOptionsContentContainerStyle = {
  gap: 12,
}
