import React from 'react'
import { Modal as NativeModal } from 'react-native'

import { ModalProps } from './Modal.types'

export const Modal = ({
  children,
  isVisible = false,
  setIsVisible,
}: ModalProps) => {
  return (
    <NativeModal
      animationType="slide"
      transparent={true}
      visible={isVisible}
      onRequestClose={() => setIsVisible(!isVisible)}>
      {children}
    </NativeModal>
  )
}
