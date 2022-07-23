import {
  ChangeEvent,
  Dispatch,
  MouseEvent,
  MutableRefObject,
  SetStateAction,
} from 'react'

interface IFetchProductData {
  name: string
  price: number
  description: string
}

interface IFetchProduct {
  fetchProduct?: IFetchProductData
}

export interface IUseditemWriteProps {
  isEdit?: boolean
  data?: IFetchProduct
}

export interface IUseditemWriteUIProps {
  onChangeSubCategoryId: (event: MouseEvent<HTMLSelectElement>) => void
  onChangeBrandId: (event: MouseEvent<HTMLInputElement>) => void
  onChangePrice: (event: ChangeEvent<HTMLInputElement>) => void
  onChangeName: (event: ChangeEvent<HTMLInputElement>) => void
  onChangeDescription: (event: ChangeEvent<HTMLTextAreaElement>) => void
  onClickSubmit: () => void
  onClickUpdate: () => void
  isEdit: boolean
  isOpen: boolean
  description: string
  selectMain: string
  onChangeMainCategory: (event: MouseEvent<HTMLSelectElement>) => void
  fileRef: MutableRefObject<HTMLInputElement>
  onClickImage: () => void
  onClickAccountConfirm: () => Promise<void>
  urls: string
  urls2: string
  urls3: string
  urls4: string
  urls5: string
  setUrls: Dispatch<SetStateAction<string>>
  setUrls2: Dispatch<SetStateAction<string>>
  setUrls3: Dispatch<SetStateAction<string>>
  setUrls4: Dispatch<SetStateAction<string>>
  setUrls5: Dispatch<SetStateAction<string>>
  accountNum: string
  bank: string
  onChangeAccountNum: (event: ChangeEvent<HTMLInputElement>) => void
  onChangeBank: (event: ChangeEvent<HTMLInputElement>) => void
  data: IFetchProduct
}
