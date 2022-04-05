import { ChangeEvent, RefObject } from 'react'

export interface IUploads02Props {
  index: number
  fileUrl2: string
  defaultFileUrl?: string
  onChangeUrls?: any
  onChangeFileUrls?: any
  setUrls2: any
}

export interface IUploads02UIProps {
  fileRef: RefObject<HTMLInputElement>
  fileUrl2: string
  defaultFileUrl?: string
  onClickUpload: () => void
  onChangeFile: (event: ChangeEvent<HTMLInputElement>) => void
}
