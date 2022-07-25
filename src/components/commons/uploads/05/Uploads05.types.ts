import { ChangeEvent, Dispatch, RefObject, SetStateAction } from 'react'

export interface IUploads05Props {
  index?: number
  fileUrl5: string
  defaultFileUrl?: string
  setUrls5: Dispatch<SetStateAction<string>>
  onChangeUrls?: any
  onChangeFileUrls?: any
}

export interface IUploads05UIProps {
  fileRef: RefObject<HTMLInputElement>
  fileUrl5: string
  defaultFileUrl?: string
  onClickUpload: () => void
  onChangeFile: (event: ChangeEvent<HTMLInputElement>) => void
}
