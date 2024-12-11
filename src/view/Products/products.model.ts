import React from 'react'
import { ListRenderItemInfo } from 'react-native'

import { Product } from '../../types/Product'

export interface ProductsViewModelProps {
  products: Product[]
  renderProductItem: ({
    item,
  }: ListRenderItemInfo<Product>) => React.JSX.Element
  searchText: string
  setSearchText: React.Dispatch<React.SetStateAction<string>>
  isCreateProductModalOpen: boolean
  setIsCreateProductModalOpen: React.Dispatch<React.SetStateAction<boolean>>
}
