import { ChangeEvent, Dispatch, RefObject, SetStateAction } from 'react'

export interface IUploads04Props {
  index?: number
  fileUrl4: string
  defaultFileUrl?: string
  setUrls4: Dispatch<SetStateAction<string>>
  onChangeUrls?: any
  onChangeFileUrls?: any
}

export interface IUploads04UIProps {
  fileRef: RefObject<HTMLInputElement>
  fileUrl4: string
  defaultFileUrl?: string
  onClickUpload: () => void
  onChangeFile: (event: ChangeEvent<HTMLInputElement>) => void
}
