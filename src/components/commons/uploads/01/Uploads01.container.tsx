import { useMutation } from '@apollo/client'
import { ChangeEvent, useRef } from 'react'
import Uploads01UI from './Uploads01.presenter'
import { IUploads01Props } from './Uploads01.types'
import { UPLOAD_FILE } from './Uploads01.queries'

export default function Uploads01(props: IUploads01Props) {
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
          files: files,
        },
      })
      console.log(result.data?.uploadFile, typeof result.data?.uploadFile)
      props.setUrls(result.data?.uploadFile)
    } catch (error) {
      alert(error.message)
    }
  }

  return (
    <Uploads01UI
      fileRef={fileRef}
      fileUrl={props.fileUrl}
      defaultFileUrl={props.defaultFileUrl}
      onClickUpload={onClickUpload}
      onChangeFile={onChangeFile}
    />
  )
}
