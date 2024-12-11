import { Dimensions } from 'react-native'
import styled from 'styled-components/native'

export const Wrapper = styled.SafeAreaView`
  height: ${Dimensions.get('window').height}px;
  background: ${({ theme }) => theme.color.background.normal};
`
