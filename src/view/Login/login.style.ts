import styled from 'styled-components/native'

export const Wrapper = styled.View`
  flex: 1;
  justify-content: center;
  background: ${({ theme }) => theme.color.background.normal};
  padding: ${({ theme }) => theme.spacing.l};
  gap: ${({ theme }) => theme.spacing.xxl};
`

export const Title = styled.Text`
  text-align: center;
  color: ${({ theme }) => theme.color.text.normal};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  font-size: ${({ theme }) => theme.font.size.heading.normal.h2.mobile};
`

export const LoginFormGroup = styled.View`
  gap: ${({ theme }) => theme.spacing.s};
`
