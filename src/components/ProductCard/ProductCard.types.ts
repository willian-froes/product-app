import { Product } from '../../types/Product'

export type ProductCardProps = {
  product: Product
  onDelete?: () => Promise<void>
}
