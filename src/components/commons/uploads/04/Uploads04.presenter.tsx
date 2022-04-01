import { useEffect, useState } from 'react'
import { UploadButton, UploadFileHidden, UploadImage } from './Uploads04.styles'
import { IUploads04UIProps } from './Uploads04.types'

export default function Uploads04UI(props: IUploads04UIProps) {
  const [test, setTest] = useState([])
  useEffect(() => {
    if (!props.fileUrl4) return
    const temp = JSON.parse(props.fileUrl4)
    setTest(temp)
  }, [props.fileUrl4])
  return (
    <>
      {props.fileUrl4 ? (
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
