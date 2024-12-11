import AsyncStorage from '@react-native-async-storage/async-storage'

import { Product } from '../types/Product'

export const ProductService = {
  async getProducts(): Promise<Product[]> {
    const products: string | null = await AsyncStorage.getItem('products')

    return products ? JSON.parse(products) : []
  },
  async saveProduct(product: Product): Promise<void> {
    const products: Product[] = await this.getProducts()
    const updatedProducts: Product[] = [...products, product]
    const parsedUpdatedProducts: string = JSON.stringify(updatedProducts)

    await AsyncStorage.setItem('products', parsedUpdatedProducts)
  },
}
