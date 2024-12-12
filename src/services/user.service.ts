import AsyncStorage from '@react-native-async-storage/async-storage'
import { User } from '../types/User'

export const UserService = {
  async getUsers(): Promise<User[]> {
    const users: string | null = await AsyncStorage.getItem('users')

    return users ? JSON.parse(users) : []
  },
  async getUserByCpf(userCpf: string): Promise<User | undefined> {
    const users: User[] = await this.getUsers()
    const findedUser: User | undefined = users.find(
      user => user.cpf === userCpf,
    )

    return findedUser
  },
  async createUser(user: User): Promise<void> {
    const users: User[] = await this.getUsers()

    const userAlredyExists = !!users.find(
      existsUser => user.cpf === existsUser.cpf,
    )

    if (userAlredyExists) {
      console.log('ERROR: User alredy exists')
      return
    }

    const updatedUsers: User[] = [...users, user]
    const parsedUpdatedUsers: string = JSON.stringify(updatedUsers)

    await AsyncStorage.setItem('users', parsedUpdatedUsers)
  },
  async updateUser(updatedUser: User): Promise<void> {
    const users: User[] = await this.getUsers()

    const userIndex = users.findIndex(user => user.cpf === updatedUser.cpf)

    if (userIndex !== -1) {
      const updatedUsers = users.map((product, index) =>
        index === userIndex ? { ...product, ...updatedUser } : product,
      )

      const parsedUpdatedUsers: string = JSON.stringify(updatedUsers)
      await AsyncStorage.setItem('users', parsedUpdatedUsers)
    } else {
      console.log('[ERROR]: Failed to find user')
    }
  },
}
