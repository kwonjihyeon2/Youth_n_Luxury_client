import { useMutation } from '@apollo/client'
import { ChangeEvent, useRef } from 'react'
import Uploads02UI from './Uploads02.presenter'
import { IUploads02Props } from './Uploads02.types'
import { UPLOAD_FILE } from './Uploads02.queries'

export default function Uploads02(props: IUploads02Props) {
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
      props.setUrls2(result.data?.uploadFile)
    } catch (error) {
      alert(error.message)
    }
  }

  return (
    <Uploads02UI
      fileRef={fileRef}
      fileUrl2={props.fileUrl2}
      defaultFileUrl={props.defaultFileUrl}
      onClickUpload={onClickUpload}
      onChangeFile={onChangeFile}
    />
  )
}
