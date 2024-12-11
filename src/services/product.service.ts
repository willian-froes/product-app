import AsyncStorage from '@react-native-async-storage/async-storage'

import { Product } from '../types/Product'

export const ProductService = {
  async getProducts(): Promise<Product[]> {
    const products: string | null = await AsyncStorage.getItem('products')

    return products ? JSON.parse(products) : []
  },
  async saveProduct(product: Omit<Product, 'id'>): Promise<void> {
    const products: Product[] = await this.getProducts()

    const ids: number[] = products.map(
      (savedProduct: Product) => savedProduct.id,
    )

    let nextId: number = 0

    while (ids.includes(nextId)) {
      nextId++
    }

    const newProduct: Product = { ...product, id: nextId }

    const updatedProducts: Product[] = [...products, newProduct]
    const parsedUpdatedProducts: string = JSON.stringify(updatedProducts)

    await AsyncStorage.setItem('products', parsedUpdatedProducts)
  },
  async updateProduct(updatedProduct: Product): Promise<void> {
    const products: Product[] = await this.getProducts()

    const productIndex = products.findIndex(
      product => product.id === updatedProduct.id,
    )

    if (productIndex !== -1) {
      const updatedProducts = products.map((product, index) =>
        index === productIndex ? { ...product, ...updatedProduct } : product,
      )

      const parsedUpdatedProducts: string = JSON.stringify(updatedProducts)
      await AsyncStorage.setItem('products', parsedUpdatedProducts)
    } else {
      console.log('[ERROR]: Failed to find product')
    }
  },
  async removeProduct(productId: number): Promise<void> {
    const products: Product[] = await this.getProducts()

    const updatedProducts: Product[] = products.filter(
      product => product.id !== productId,
    )

    const parsedUpdatedProducts: string = JSON.stringify(updatedProducts)
    await AsyncStorage.setItem('products', parsedUpdatedProducts)
  },
}
