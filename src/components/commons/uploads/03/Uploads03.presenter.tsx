import { useEffect, useState } from 'react'
import { UploadButton, UploadFileHidden, UploadImage } from './Uploads03.styles'
import { IUploads03UIProps } from './Uploads03.types'

export default function Uploads03UI(props: IUploads03UIProps) {
  const [test, setTest] = useState([])
  useEffect(() => {
    if (!props.fileUrl3) return
    const temp = JSON.parse(props.fileUrl3)
    setTest(temp)
  }, [props.fileUrl3])
  return (
    <>
      {props.fileUrl3 ? (
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
