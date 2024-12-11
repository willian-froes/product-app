import styled from 'styled-components/native'
import MaterialIcon from '@react-native-vector-icons/material-icons'

import {
  ButtonAlign,
  ButtonColor,
  ButtonRadius,
  ButtonSize,
  ButtonVariant,
} from './Button.types'
import { resolveColor, resolveLabelColor } from './Button.utils'
import { buttonBorderRadius, buttonContentSize } from './Button.constants'

export const Wrapper = styled.TouchableOpacity.attrs({
  activeOpacity: 1,
})<{
  variant: ButtonVariant
  color: ButtonColor
  radius: ButtonRadius
  size: ButtonSize
  align: ButtonAlign
}>`
  align-self: ${({ align }) => align};
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: ${({ size }) => buttonContentSize[size].padding};
  border: 1px solid ${({ theme, color }) => theme.color[color].normal};
  border-radius: ${({ radius }) => buttonBorderRadius[radius]};
  ${({ variant, color }) => resolveColor(variant, color)}
`

export const Label = styled.Text<{
  variant: ButtonVariant
  color: ButtonColor
  size: ButtonSize
}>`
  font-size: ${({ size }) => buttonContentSize[size].fontSize};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  ${({ variant, color }) => resolveLabelColor(variant, color)};
`

export const Icon = styled(MaterialIcon).attrs<{
  variant: ButtonVariant
  color: ButtonColor
  iconSize: ButtonSize
}>(({ variant, color, iconSize }) => ({
  size: buttonContentSize[iconSize].iconSize,
  color: resolveLabelColor(variant, color) as any,
}))``
