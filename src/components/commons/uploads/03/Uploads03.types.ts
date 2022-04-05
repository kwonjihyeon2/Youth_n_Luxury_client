import { ChangeEvent, RefObject } from 'react'

export interface IUploads03Props {
  index: number
  fileUrl3: string
  defaultFileUrl?: string
  onChangeUrls?: any
  onChangeFileUrls?: any
  setUrls3: any
}

export interface IUploads03UIProps {
  fileRef: RefObject<HTMLInputElement>
  fileUrl3: string
  defaultFileUrl?: string
  onClickUpload: () => void
  onChangeFile: (event: ChangeEvent<HTMLInputElement>) => void
}
