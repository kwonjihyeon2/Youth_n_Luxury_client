import { ChangeEvent, RefObject } from 'react'

export interface IUploads05Props {
  index: number
  fileUrl5: string
  defaultFileUrl?: string
  onChangeUrls?: any
  onChangeFileUrls?: any
  setUrls5: any
}

export interface IUploads05UIProps {
  fileRef: RefObject<HTMLInputElement>
  fileUrl5: string
  defaultFileUrl?: string
  onClickUpload: () => void
  onChangeFile: (event: ChangeEvent<HTMLInputElement>) => void
}
