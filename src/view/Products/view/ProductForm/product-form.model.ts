export type ProductForm = {
  name: string
  cost: string
  quantity: string
}

export type ProductFormViewModel = {
  form: ProductForm
  clearForm: () => void
  handleChange: (field: string, value: string) => void
  handleSubmit: () => void
}

export interface UseProductFormViewModel {
  onCreateProduct?: () => void
}

export interface ProductFormViewProps {
  isOpen?: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
  onCreateProduct: () => void
}
