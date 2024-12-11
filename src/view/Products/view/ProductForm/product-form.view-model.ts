import { useState } from 'react'

import {
  ProductForm,
  ProductFormViewModel,
  UseProductFormViewModel,
} from './product-form.model'
import { productFormInitialState } from './product.constants'
import { ProductService } from '../../../../services/product.service'
import { Product } from '../../../../types/Product'

export const useProductFormViewModel = ({
  onCreateOrUpdateProduct,
}: UseProductFormViewModel): ProductFormViewModel => {
  const [form, setForm] = useState<ProductForm>(productFormInitialState)

  const handleChange = (field: string, value: string) => {
    setForm(previousForm => ({ ...previousForm, [field]: value }))
  }

  const handleSubmit = async () => {
    try {
      await ProductService.saveProduct(form as unknown as Product)
      clearForm()
      onCreateOrUpdateProduct?.()
    } catch {
      console.error('[ERROR]: Failed to save product')
    }
  }

  const clearForm = () => {
    setForm(productFormInitialState)
  }

  return {
    form,
    clearForm,
    handleChange,
    handleSubmit,
  }
}
