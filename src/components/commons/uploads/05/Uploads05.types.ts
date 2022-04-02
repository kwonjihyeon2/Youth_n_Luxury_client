import { ChangeEvent, RefObject } from 'react'

export interface IUploads05Props {
  index: number
  fileUrl: string
  defaultFileUrl?: string
  onChangeUrls?: any
  onChangeFileUrls?: any
  setUrls5: any
}

export interface IUploads05UIProps {
  fileRef: RefObject<HTMLInputElement>
  fileUrl: string
  defaultFileUrl?: string
  onClickUpload: () => void
  onChangeFile: (event: ChangeEvent<HTMLInputElement>) => void
}
