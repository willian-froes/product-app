import React from 'react'

import {
  CardFooter,
  CardHeader,
  EditButton,
  ProductContent,
  ProductIdentifier,
  ProductName,
  ProductQuantity,
  ProductTotalValue,
  ProductValue,
  ProductValueContainer,
  ProductValueIndicator,
  RemoveButton,
  Wrapper,
} from './ProductCard.style'
import { Button } from '../Button/Button.component'
import { ProductCardProps } from './ProductCard.types'
import { ProductService } from '../../services/product.service'

export const ProductCard = ({ product, onDelete }: ProductCardProps) => {
  const productTotalValue: number = product.cost * product.quantity

  const deleteProduct = async () => {
    try {
      await ProductService.removeProduct(product.id)
      onDelete?.()
    } catch {
      console.error('[ERROR]: Failed to delete product')
    }
  }

  return (
    <Wrapper>
      <ProductIdentifier>{product.id}</ProductIdentifier>

      <ProductContent>
        <CardHeader>
          <ProductName>{product.name}</ProductName>

          <EditButton name="edit" />
          <RemoveButton
            name="delete-outline"
            onPress={async () => deleteProduct()}
          />
        </CardHeader>

        <ProductTotalValue>{productTotalValue}</ProductTotalValue>

        <CardFooter>
          <ProductValueContainer>
            <ProductValue>{product.cost}</ProductValue>
            <ProductValueIndicator>/item</ProductValueIndicator>
          </ProductValueContainer>

          <Button size="small" icon="remove" variant="outline" />
          <ProductQuantity>{product.quantity}</ProductQuantity>
          <Button size="small" icon="add" />
        </CardFooter>
      </ProductContent>
    </Wrapper>
  )
}
