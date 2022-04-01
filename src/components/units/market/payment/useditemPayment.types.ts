import { ChangeEvent } from 'react'

export interface IpropsType {
  data: any
  isOpenAdd: boolean
  onClickOpen: () => void
  onClickOrder: () => void
  isModalVisible: boolean
  onTogglePostModal: () => void
  onCompleteAddress: (data: any) => void
  onChangeAddressDetail: (event: ChangeEvent<HTMLInputElement>) => void
  Address: string
  zonecode: string
  AddressDetail: string
  onClickSubmit: () => void
  addrData: any
  onClickBasic: () => void
  basic: boolean
  onClickEvent: () => void
  listAddr: any
}
