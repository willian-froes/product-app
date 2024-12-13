import AsyncStorage from '@react-native-async-storage/async-storage'
import { User } from '../types/User'
import { LoginForm } from '../view/Login/login.model'
import { UserService } from './user.service'
import { generateToken } from '../utils/token'

export const AuthService = {
  async login(form: LoginForm): Promise<void> {
    const user: User | undefined = await UserService.getUserByCpf(form.cpf)

    if (!user) {
      await UserService.createUser(form as unknown as User)
      await this.login(form)
      return
    }

    if (form.password !== user.password) {
      console.error('[ERROR] Invalid password')
      return
    }

    await AsyncStorage.setItem('token', generateToken())

    await UserService.updateUser({
      ...user,
      lastLoginDate: new Date().toISOString(),
    })
  },
  async logout(): Promise<void> {
    await AsyncStorage.removeItem('token')
  },
}
