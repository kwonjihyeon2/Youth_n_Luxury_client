import { ChangeEvent, RefObject } from 'react'

export interface IUploads04Props {
  index: number
  fileUrl4: string
  defaultFileUrl?: string
  onChangeUrls?: any
  onChangeFileUrls?: any
  setUrls4: any
}

export interface IUploads04UIProps {
  fileRef: RefObject<HTMLInputElement>
  fileUrl4: string
  defaultFileUrl?: string
  onClickUpload: () => void
  onChangeFile: (event: ChangeEvent<HTMLInputElement>) => void
}
