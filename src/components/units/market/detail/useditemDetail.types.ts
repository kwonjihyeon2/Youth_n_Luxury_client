import { Dispatch, SetStateAction } from 'react'

export interface IpropsDetail {
  productData: any
  relativeData: any
  data: any
  isHeart: boolean
  isOpen: boolean
  setIsOpen: Dispatch<SetStateAction<boolean>>
  onClickHeart: () => Promise<void>
  onClickOpen: () => void
  moveToPage: (page: any) => () => void
  onClickDelete: () => Promise<void>
  onClickShare: () => void
  isShare: boolean
  onClickBasketBtn: () => void
  isKeep: boolean
}

export interface propsIsOpen {
  isOpen: boolean
}

export interface propsChange {
  isHeart?: boolean
  isKeep?: boolean
}

export interface propsIsShare {
  isShare: boolean
}
