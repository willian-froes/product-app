import React, { useState, useEffect } from 'react'
import { ProductsViewModel } from './products.model'
import { Product } from '../../types/Product'
import { ProductService } from '../../services/product.service'
import { ListRenderItemInfo } from 'react-native'
import { ProductCard } from '../../components/ProductCard/ProductCard.component'

export const useProductsViewModel = (): ProductsViewModel => {
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
    <ProductCard product={item} onDelete={async () => fetchProducts()} />
  )

  useEffect(() => {
    fetchProducts()
  }, [])

  useEffect(() => {
    setIsCreateProductModalOpen(false)
  }, [])

  return {
    products,
    fetchProducts,
    renderProductItem,
    searchText,
    setSearchText,
    isCreateProductModalOpen,
    setIsCreateProductModalOpen,
  }
}
