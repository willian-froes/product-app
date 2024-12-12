import { useNavigation } from '@react-navigation/native'
import { useThemeContext } from '../../context/theme/theme.context'
import { UsePreferencesViewModel } from './preferences.model'
import { useAuthContext } from '../../context/auth/auth.context'

export const usePreferencesViewModel = (): UsePreferencesViewModel => {
  const { logout } = useAuthContext()
  const { toggleTheme } = useThemeContext()
  const { goBack } = useNavigation()

  return {
    toggleTheme,
    goBack,
    logout,
  }
}
