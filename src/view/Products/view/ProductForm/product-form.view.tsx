import React from 'react'

import {
  ButtonsContainer,
  InputsContainer,
  OverlayWrapper,
  Wrapper,
} from './product-form.style'
import { Input } from '../../../../components/Input/Input.component'
import { Button } from '../../../../components/Button/Button.component'
import { Title } from '../../products.style'

export const ProductFormView = () => {
  return (
    <OverlayWrapper>
      <Wrapper>
        <Title>Adicionar produto</Title>

        <InputsContainer>
          <Input label="Nome do produto" placeholder="Produto XYZ" />
          <Input label="Valor unitário" placeholder="R$ 10,00" />
          <Input label="Quantidade em estoque" placeholder="2" />
        </InputsContainer>

        <ButtonsContainer>
          <Button label="Adicionar produto" />
          <Button label="Descartar" variant="outline" color="danger" />
        </ButtonsContainer>
      </Wrapper>
    </OverlayWrapper>
  )
}
