import { ChangeEvent, Dispatch, RefObject, SetStateAction } from 'react'

export interface IUploads01Props {
  index?: number
  fileUrl: string
  defaultFileUrl?: string
  setUrls: Dispatch<SetStateAction<string>>
  onChangeUrls?: any
  onChangeFileUrls?: any
}

export interface IUploads01UIProps {
  fileRef: RefObject<HTMLInputElement>
  fileUrl: string
  defaultFileUrl?: string
  onClickUpload: () => void
  onChangeFile: (event: ChangeEvent<HTMLInputElement>) => void
}
