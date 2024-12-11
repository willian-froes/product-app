import { useNavigation } from '@react-navigation/native'
import { useThemeContext } from '../../context/theme/theme.context'
import { UsePreferencesViewModel } from './preferences.model'

export const usePreferencesViewModel = (): UsePreferencesViewModel => {
  const { toggleTheme } = useThemeContext()
  const { goBack } = useNavigation()

  return {
    toggleTheme,
    goBack,
  }
}
