export interface ModalProps {
  isVisible?: boolean
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>
  children: React.JSX.Element
}
