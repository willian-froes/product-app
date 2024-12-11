import React from 'react'
import { ListRenderItemInfo } from 'react-native'

import { Product } from '../../types/Product'

export interface ProductsViewModel {
  filteredProducts: Product[]
  fetchProducts: () => Promise<void>
  renderProductItem: ({
    item,
  }: ListRenderItemInfo<Product>) => React.JSX.Element
  searchText: string
  setSearchText: React.Dispatch<React.SetStateAction<string>>
  isProductFormModalOpen: boolean
  setIsProductFormModalOpen: React.Dispatch<React.SetStateAction<boolean>>
  goToPreferences: () => void
}
