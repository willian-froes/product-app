import React from 'react'
import { FlatList, ScrollView } from 'react-native'

import {
  EmptyProductsListMessage,
  Header,
  productsContentContainerStyle,
  ProductsListHeader,
  ProductsListHeaderInfoContainer,
  ProductsListTitle,
  sortOptionsContentContainerStyle,
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
    filteredProducts,
    fetchProducts,
    renderProductItem,
    searchText,
    setSearchText,
    sortField,
    setSortField,
    isProductFormModalOpen,
    setIsProductFormModalOpen,
    goToPreferences,
  } = useProductsViewModel()

  return (
    <Wrapper>
      <Header>
        <Button
          icon="settings"
          variant="outline"
          align="flex-end"
          onPress={goToPreferences}
        />

        <Title>Olá</Title>
        <Subtitle>Gerencie seus produtos</Subtitle>

        <Input
          type="search"
          onChangeText={value => setSearchText(value)}
          value={searchText}
        />
        <Button
          label="Adicionar novo produto"
          onPress={() => setIsProductFormModalOpen(true)}
        />
      </Header>

      <FlatList
        ListHeaderComponent={
          <ProductsListHeader>
            <ProductsListHeaderInfoContainer>
              <ProductsListTitle>Seus produtos</ProductsListTitle>
              <Subtitle>Ordenar por</Subtitle>
            </ProductsListHeaderInfoContainer>
            <ScrollView
              horizontal
              contentContainerStyle={sortOptionsContentContainerStyle}>
              <Button
                size="small"
                radius="circle"
                label="Id"
                variant={sortField === 'id' ? 'filled' : 'outline'}
                onPress={() => setSortField('id')}
              />
              <Button
                size="small"
                radius="circle"
                label="Nome"
                variant={sortField === 'name' ? 'filled' : 'outline'}
                onPress={() => setSortField('name')}
              />
              <Button
                size="small"
                radius="circle"
                label="Quantidade"
                variant={sortField === 'quantity' ? 'filled' : 'outline'}
                onPress={() => setSortField('quantity')}
              />
              <Button
                size="small"
                radius="circle"
                label="Valor uni."
                variant={sortField === 'cost' ? 'filled' : 'outline'}
                onPress={() => setSortField('cost')}
              />
            </ScrollView>
          </ProductsListHeader>
        }
        data={filteredProducts}
        renderItem={renderProductItem}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={productsContentContainerStyle}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          <EmptyProductsListMessage>
            Nenhum produto encontrado ou cadastrado.
          </EmptyProductsListMessage>
        }
      />

      <ProductFormView
        isOpen={isProductFormModalOpen}
        setIsOpen={setIsProductFormModalOpen}
        onCreateOrUpdateProduct={async () => fetchProducts()}
      />
    </Wrapper>
  )
}
