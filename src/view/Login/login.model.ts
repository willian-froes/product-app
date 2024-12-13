export type LoginForm = {
  cpf: string
  password: string
}

export type LoginViewModel = {
  form: LoginForm
  clearForm: () => void
  handleChange: (field: string, value: string) => void
  handleSubmit: () => void
}
