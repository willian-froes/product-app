import React, { useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'

import { ProductsViewModel } from './products.model'
import { Product } from '../../types/Product'
import { ProductService } from '../../services/product.service'
import { ListRenderItemInfo } from 'react-native'
import { ProductCard } from '../../components/ProductCard/ProductCard.component'
import { AuthStackNavigation } from '../../config/stack-navigator/stack-navigator.types'

export const useProductsViewModel = (): ProductsViewModel => {
  const { navigate } = useNavigation<AuthStackNavigation>()

  const [searchText, setSearchText] = useState<string>('')
  const [products, setProducts] = useState<Product[]>([])

  const [isProductFormModalOpen, setIsProductFormModalOpen] =
    useState<boolean>(false)

  const filteredProducts: Product[] = products.filter(product =>
    product.name.toLocaleLowerCase().includes(searchText.toLocaleLowerCase()),
  )

  const fetchProducts = async () => {
    try {
      const fetchedProducts = await ProductService.getProducts()
      setProducts(fetchedProducts)
    } catch {
      console.error('[ERROR]: Failed to load products')
    }
  }

  const renderProductItem = ({ item }: ListRenderItemInfo<Product>) => (
    <ProductCard product={item} onDelete={async () => fetchProducts()} />
  )

  const goToPreferences = () => {
    navigate('PreferencesView')
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  useEffect(() => {
    setIsProductFormModalOpen(false)
  }, [])

  return {
    filteredProducts,
    fetchProducts,
    renderProductItem,
    searchText,
    setSearchText,
    isProductFormModalOpen,
    setIsProductFormModalOpen,
    goToPreferences,
  }
}
