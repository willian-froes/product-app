import React from 'react'

import {
  ButtonsContainer,
  InputsContainer,
  OverlayWrapper,
  Wrapper,
} from './product-form.style'
import { useProductFormViewModel } from './product-form.view-model'
import { ProductFormViewProps } from './product-form.model'
import { Input } from '../../../../components/Input/Input.component'
import { Button } from '../../../../components/Button/Button.component'
import { Title } from '../../products.style'
import { Modal } from '../../../../components/Modal/Modal.component'

export const ProductFormView = ({
  isOpen,
  setIsOpen,
  onCreateOrUpdateProduct,
}: ProductFormViewProps) => {
  const { form, clearForm, handleChange, handleSubmit } =
    useProductFormViewModel({ onCreateOrUpdateProduct })

  return (
    <Modal isVisible={isOpen} setIsVisible={setIsOpen}>
      <OverlayWrapper>
        <Wrapper>
          <Title>Adicionar produto</Title>

          <InputsContainer>
            <Input
              label="Nome do produto"
              placeholder="Produto XYZ"
              onChangeText={(value: string) => handleChange('name', value)}
              value={form.name}
            />
            <Input
              label="Valor unitário"
              placeholder="R$ 10,00"
              onChangeText={(value: string) => handleChange('cost', value)}
              value={form.cost}
            />
            <Input
              label="Quantidade em estoque"
              placeholder="2"
              onChangeText={(value: string) => handleChange('quantity', value)}
              value={form.quantity}
            />
          </InputsContainer>

          <ButtonsContainer>
            <Button
              label="Adicionar produto"
              onPress={() => {
                handleSubmit()
                setIsOpen(false)
              }}
            />
            <Button
              label="Descartar"
              variant="outline"
              color="danger"
              onPress={() => {
                clearForm()
                setIsOpen(false)
              }}
            />
          </ButtonsContainer>
        </Wrapper>
      </OverlayWrapper>
    </Modal>
  )
}
