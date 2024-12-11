import { RuleSet, css } from 'styled-components'

import { ButtonColor, ButtonVariant } from './Button.types'

export const resolveColor = (
  variant: ButtonVariant,
  color: ButtonColor,
): RuleSet => {
  const buttonVariantBackgroundColors: Record<ButtonVariant, RuleSet> = {
    filled: css`
      background: ${({ theme }) => theme.color[color].normal};
    `,
    outline: css`
      background: transparent;
    `,
  }

  return buttonVariantBackgroundColors[variant]
}

export const resolveLabelColor = (
  variant: ButtonVariant,
  color: ButtonColor,
): RuleSet => {
  const buttonVariantLabelColors: Record<ButtonVariant, RuleSet> = {
    filled: css`
      color: ${({ theme }) => theme.color.background.normal};
    `,
    outline: css`
      color: ${({ theme }) => theme.color[color].normal};
    `,
  }

  return buttonVariantLabelColors[variant]
}
