import { useMutation } from '@apollo/client'
import { ChangeEvent, useRef } from 'react'
import Uploads05UI from './Uploads05.presenter'
import { IUploads05Props } from './Uploads05.types'
import { UPLOAD_FILE } from './Uploads05.queries'

export default function Uploads05(props: IUploads05Props) {
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
      props.setUrls5(result.data?.uploadFile)
    } catch (error) {
      alert(error.message)
    }
  }

  return (
    <Uploads05UI
      fileRef={fileRef}
      fileUrl5={props.fileUrl5}
      defaultFileUrl={props.defaultFileUrl}
      onClickUpload={onClickUpload}
      onChangeFile={onChangeFile}
    />
  )
}
