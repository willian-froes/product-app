import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { LoginView } from '../../view/Login/login.view'
import { ProductsView } from '../../view/Products/products.view'
import { PreferencesView } from '../../view/Preferences/preferences.view'
import {
  AuthStackParamList,
  UnauthStackParamList,
} from './stack-navigator.types'

const AuthStack = createNativeStackNavigator<AuthStackParamList>()
const UnauthStack = createNativeStackNavigator<UnauthStackParamList>()

export const AuthenticatedStackScreens = () => (
  <AuthStack.Navigator
    screenOptions={{ headerShown: false }}
    initialRouteName="ProductsView">
    <AuthStack.Screen name="ProductsView" component={ProductsView} />
    <AuthStack.Screen name="PreferencesView" component={PreferencesView} />
  </AuthStack.Navigator>
)

export const UnauthenticatedStackScreens = () => (
  <UnauthStack.Navigator
    screenOptions={{ headerShown: false }}
    initialRouteName="LoginView">
    <UnauthStack.Screen name="LoginView" component={LoginView} />
  </UnauthStack.Navigator>
)
