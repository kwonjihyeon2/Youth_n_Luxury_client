import { useEffect, useState } from 'react'
import { UploadButton, UploadFileHidden, UploadImage } from './Uploads01.styles'
import { IUploads01UIProps } from './Uploads01.types'

export default function Uploads01UI(props: IUploads01UIProps) {
  const [test, setTest] = useState([])
  useEffect(() => {
    if (!props.fileUrl) return
    const temp = JSON.parse(props.fileUrl)
    setTest(temp)
  }, [props.fileUrl])
  return (
    <>
      {props.fileUrl ? (
        <UploadImage
          onClick={props.onClickUpload}
          src={`https://storage.googleapis.com/${test[0]}`}
        />
      ) : (
        <UploadButton onClick={props.onClickUpload}></UploadButton>
      )}
      <UploadFileHidden
        type="file"
        ref={props.fileRef}
        onChange={props.onChangeFile}
      />
    </>
  )
}
