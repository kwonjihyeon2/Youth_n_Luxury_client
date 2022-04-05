import { useMutation } from '@apollo/client'
import { ChangeEvent, useRef } from 'react'
import Uploads03UI from './Uploads03.presenter'
import { IUploads03Props } from './Uploads03.types'
import { UPLOAD_FILE } from './Uploads03.queries'

export default function Uploads03(props: IUploads03Props) {
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
      props.setUrls3(result.data?.uploadFile)
    } catch (error) {
      alert(error.message)
    }
  }

  return (
    <Uploads03UI
      fileRef={fileRef}
      fileUrl3={props.fileUrl3}
      defaultFileUrl={props.defaultFileUrl}
      onClickUpload={onClickUpload}
      onChangeFile={onChangeFile}
    />
  )
}
