import { useRef } from 'react'
import CreateReviewPageUI from './createReview.presenter'

export default function CreateReviewPage() {
  const fileRef = useRef(null)

  const onClickRef = () => {
    fileRef.current?.click()
  }
  return <CreateReviewPageUI onClickRef={onClickRef} fileRef={fileRef} />
}
