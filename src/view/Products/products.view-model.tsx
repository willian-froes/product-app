import React, { useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'

import { ProductsViewModel, SortProductsFields } from './products.model'
import { Product } from '../../types/Product'
import { ProductService } from '../../services/product.service'
import { ListRenderItemInfo } from 'react-native'
import { ProductCard } from '../../components/ProductCard/ProductCard.component'
import { AuthStackNavigation } from '../../config/stack-navigator/stack-navigator.types'

export const useProductsViewModel = (): ProductsViewModel => {
  const { navigate } = useNavigation<AuthStackNavigation>()

  const [searchText, setSearchText] = useState<string>('')
  const [sortField, setSortField] = useState<SortProductsFields>('id')
  const [products, setProducts] = useState<Product[]>([])

  const [isProductFormModalOpen, setIsProductFormModalOpen] =
    useState<boolean>(false)

  const filteredProducts: Product[] = products
    .filter(product =>
      product.name.toLocaleLowerCase().includes(searchText.toLocaleLowerCase()),
    )
    .sort((previousProduct, nextProduct) => {
      const previousValue =
        sortField === 'cost'
          ? Number(previousProduct[sortField])
          : previousProduct[sortField]
      const nextValue =
        sortField === 'cost'
          ? Number(nextProduct[sortField])
          : nextProduct[sortField]

      if (previousValue < nextValue) return -1
      if (previousValue > nextValue) return 1
      return 0
    })

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
    sortField,
    setSortField,
    isProductFormModalOpen,
    setIsProductFormModalOpen,
    goToPreferences,
  }
}
