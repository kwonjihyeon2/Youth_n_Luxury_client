import { ChangeEvent } from 'react'

export interface IAddress {
  address?: string
  zonecode?: string
  addressDetail?: string
}

export interface IUseditemPaymentpageUIProps {
  data: IFetchProduct
  user: IFetchUser
  isOpenAdd: boolean
  onClickOpen: () => void
  onClickOrder: () => void
  isModalVisible: boolean
  onTogglePostModal: () => void
  onCompleteAddress: (data: IAddress) => void
  onChangeAddressDetail: (event: ChangeEvent<HTMLInputElement>) => void
  Address: string
  zonecode: string
  AddressDetail: string
  onClickSubmit: () => void
  addrData: IAddrData
  onClickBasic: () => void
  basic: boolean
  onClickEvent: () => void
  listAddr: IlistAddr
  isSold: boolean
}
interface IFetchUser {
  fetchUser: IFetchUserData
}
interface IFetchUserData {
  phoneNum: string
  name: string
  email: string
}
interface IFetchProduct {
  fetchProduct: IFetchProductData
}
interface IFetchProductData {
  name: string
  price: number
}
interface IAddrData {
  fetchUserAddr: IFetchUserAddrData
}
export interface IFetchUserAddrData {
  zipCode: string
  address: string
  addressDetail: string
  userAddr_id?: string
}
interface IlistAddr {
  fetchUserAddrs: []
}
