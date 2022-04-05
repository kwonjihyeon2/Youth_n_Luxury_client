import { useMutation } from '@apollo/client'
import { ChangeEvent, useRef } from 'react'
import Uploads04UI from './Uploads04.presenter'
import { IUploads04Props } from './Uploads04.types'
import { UPLOAD_FILE } from './Uploads04.queries'

export default function Uploads04(props: IUploads04Props) {
  const fileRef = useRef<HTMLInputElement>(null)
  const [uploadFile] = useMutation(UPLOAD_FILE)

  const onClickUpload = () => {
    fileRef.current?.click()
  }

  const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files
    try {
      const result = await uploadFile({
        variables: {
          files,
        },
      })
      props.setUrls4(result.data?.uploadFile)
    } catch (error) {
      alert(error.message)
    }
  }

  return (
    <Uploads04UI
      fileRef={fileRef}
      fileUrl4={props.fileUrl4}
      defaultFileUrl={props.defaultFileUrl}
      onClickUpload={onClickUpload}
      onChangeFile={onChangeFile}
    />
  )
}
