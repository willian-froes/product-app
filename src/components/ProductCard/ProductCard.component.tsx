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

export const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Wrapper>
      <ProductIdentifier>{product.id}</ProductIdentifier>

      <ProductContent>
        <CardHeader>
          <ProductName>{product.name}</ProductName>

          <EditButton name="edit" />
          <RemoveButton name="delete-outline" />
        </CardHeader>

        <ProductTotalValue>R$ 111,98</ProductTotalValue>

        <CardFooter>
          <ProductValueContainer>
            <ProductValue>R$ 55,99</ProductValue>
            <ProductValueIndicator>/item</ProductValueIndicator>
          </ProductValueContainer>

          <Button size="small" icon="horizontal-rule1" variant="outline" />
          <ProductQuantity>2</ProductQuantity>
          <Button size="small" icon="add" />
        </CardFooter>
      </ProductContent>
    </Wrapper>
  )
}
