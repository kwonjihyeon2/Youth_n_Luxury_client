import { ChangeEvent, Dispatch, RefObject, SetStateAction } from 'react'

export interface IUploads02Props {
  index?: number
  fileUrl2: string
  defaultFileUrl?: string
  setUrls2: Dispatch<SetStateAction<string>>
  onChangeUrls?: any
  onChangeFileUrls?: any
}

export interface IUploads02UIProps {
  fileRef: RefObject<HTMLInputElement>
  fileUrl2: string
  defaultFileUrl?: string
  onClickUpload: () => void
  onChangeFile: (event: ChangeEvent<HTMLInputElement>) => void
}
