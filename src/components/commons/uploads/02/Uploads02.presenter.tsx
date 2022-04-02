import { useEffect, useState } from 'react'
import { UploadButton, UploadFileHidden, UploadImage } from './Uploads02.styles'
import { IUploads02UIProps } from './Uploads02.types'

export default function Uploads02UI(props: IUploads02UIProps) {
  const [test, setTest] = useState([])
  useEffect(() => {
    if (!props.fileUrl2) return
    const temp = JSON.parse(props.fileUrl2)
    setTest(temp)
  }, [props.fileUrl2])
  return (
    <>
      {props.fileUrl2 ? (
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
      <UploadFileHidden
        type="file"
        ref={props.fileRef}
        onChange={props.onChangeFile}
      />
    </>
  )
}
