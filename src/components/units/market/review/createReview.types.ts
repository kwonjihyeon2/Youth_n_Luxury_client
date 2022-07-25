import { ChangeEvent, Dispatch, MutableRefObject, SetStateAction } from 'react'

export interface ICreateReviewPageUIProps {
  onClickOpenReview: () => void
  onClickRef: () => void
  fileRef: MutableRefObject<HTMLInputElement>
  data: IFetchProduct
  onClickSubmit: () => Promise<void>
  setReviewRate: Dispatch<SetStateAction<number>>
  onChangeContent: (e: ChangeEvent<HTMLTextAreaElement>) => void
  setUrl: Dispatch<SetStateAction<string>>
  setIsReview: Dispatch<SetStateAction<boolean>>
}
export interface ICreateReviewPageProps {
  onClickOpenReview: () => void
  setIsReview: Dispatch<SetStateAction<boolean>>
}

interface IFetchProduct {
  fetchProduct: IFetchProductData
}
interface IFetchProductData {
  user: IFetchProductData_
  description: string
}
interface IFetchProductData_ {
  name: string
}
