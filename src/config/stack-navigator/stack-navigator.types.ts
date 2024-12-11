import { NativeStackNavigationProp } from '@react-navigation/native-stack'

export type AuthStackParamList = {
  ProductsView: undefined
  PreferencesView: undefined
}

export type AuthStackNavigation = NativeStackNavigationProp<
  AuthStackParamList,
  'ProductsView' | 'PreferencesView'
>

export type UnauthStackParamList = {
  LoginView: undefined
}

export type UnauthStackNavigation = NativeStackNavigationProp<
  UnauthStackParamList,
  'LoginView'
>
