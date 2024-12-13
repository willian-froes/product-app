export const generateToken = (length = 32) => {
  const chars: string =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  let hash: string = ''

  for (let index = 0; index < length; index++) {
    hash += chars.charAt(Math.floor(Math.random() * chars.length))
  }
  return hash
}
