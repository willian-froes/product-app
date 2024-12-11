import styled from 'styled-components/native'

export const OverlayWrapper = styled.View`
  background: ${({ theme }) => theme.color.background.dark}BF;
  flex: 1;
  justify-content: center;
`

export const Wrapper = styled.View`
  background: ${({ theme }) => theme.color.background.normal};
  gap: ${({ theme }) => theme.spacing.xxl};
  border-radius: 10px;
  padding: ${({ theme }) => theme.spacing.l};
  margin: ${({ theme }) => theme.spacing.l};
`

export const InputsContainer = styled.View`
  gap: ${({ theme }) => theme.spacing.m};
`

export const ButtonsContainer = styled.View`
  gap: ${({ theme }) => theme.spacing.xs};
`
