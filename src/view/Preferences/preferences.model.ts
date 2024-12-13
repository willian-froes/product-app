export type UsePreferencesViewModel = {
  toggleTheme: () => Promise<void>
  goBack: () => void
  logout: () => Promise<void>
}
