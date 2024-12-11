import React from 'react'
import { FlatList } from 'react-native'

import {
  GoToPreferencesButton,
  Header,
  Subtitle,
  Title,
  Wrapper,
} from './products.style'
import { useProductsViewModel } from './products.view-model'
import { Button } from '../../components/Button/Button.component'
import { Input } from '../../components/Input/Input.component'
import { ProductFormView } from './view/ProductForm/product-form.view'

export const ProductsView = () => {
  const {
    products,
    fetchProducts,
    renderProductItem,
    searchText,
    setSearchText,
    isCreateProductModalOpen,
    setIsCreateProductModalOpen,
  } = useProductsViewModel()

  return (
    <Wrapper>
      <Header>
        <GoToPreferencesButton name="settings" />

        <Title>Olá</Title>
        <Subtitle>Gerencie seus produtos</Subtitle>

        <Input
          type="search"
          onChangeText={value => setSearchText(value)}
          value={searchText}
        />
        <Button
          label="Adicionar novo produto"
          onPress={() => setIsCreateProductModalOpen(true)}
        />
      </Header>
      <FlatList
        data={products}
        renderItem={renderProductItem}
        keyExtractor={item => item.id.toString()}
      />

      <ProductFormView
        isOpen={isCreateProductModalOpen}
        setIsOpen={setIsCreateProductModalOpen}
        onCreateProduct={async () => fetchProducts()}
      />
    </Wrapper>
  )
}
