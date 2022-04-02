import { useEffect, useState } from 'react'
import { UploadButton, UploadFileHidden, UploadImage } from './Uploads05.styles'
import { IUploads05UIProps } from './Uploads05.types'

export default function Uploads05UI(props: IUploads05UIProps) {
  const [test, setTest] = useState([])
  useEffect(() => {
    if (!props.fileUrl5) return
    const temp = JSON.parse(props.fileUrl5)
    setTest(temp)
  }, [props.fileUrl5])
  return (
    <>
      {props.fileUrl5 ? (
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
