import { ChangeEvent, Dispatch, RefObject, SetStateAction } from 'react'

export interface IUploads03Props {
  index?: number
  fileUrl3: string
  defaultFileUrl?: string
  setUrls3: Dispatch<SetStateAction<string>>
  onChangeUrls?: any
  onChangeFileUrls?: any
}

export interface IUploads03UIProps {
  fileRef: RefObject<HTMLInputElement>
  fileUrl3: string
  defaultFileUrl?: string
  onClickUpload: () => void
  onChangeFile: (event: ChangeEvent<HTMLInputElement>) => void
}
