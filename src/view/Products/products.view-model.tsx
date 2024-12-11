import React, { useState, useEffect } from 'react'
import { ProductsViewModelProps } from './products.model'
import { Product } from '../../types/Product'
import { ProductService } from '../../services/product.service'
import { ListRenderItemInfo } from 'react-native'
import { ProductCard } from '../../components/ProductCard/ProductCard.component'

export const useProductsViewModel = (): ProductsViewModelProps => {
  const [searchText, setSearchText] = useState<string>('')
  const [products, setProducts] = useState<Product[]>([])

  const [isCreateProductModalOpen, setIsCreateProductModalOpen] =
    useState<boolean>(false)

  const fetchProducts = async () => {
    try {
      const fetchedProducts = await ProductService.getProducts()
      setProducts(fetchedProducts)
    } catch {
      console.error('[ERROR]: Failed to load products')
    }
  }

  const renderProductItem = ({ item }: ListRenderItemInfo<Product>) => (
    <ProductCard product={item} />
  )

  useEffect(() => {
    fetchProducts()
  }, [])

  useEffect(() => {
    setIsCreateProductModalOpen(false)
  }, [])

  return {
    products,
    renderProductItem,
    searchText,
    setSearchText,
    isCreateProductModalOpen,
    setIsCreateProductModalOpen,
  }
}
