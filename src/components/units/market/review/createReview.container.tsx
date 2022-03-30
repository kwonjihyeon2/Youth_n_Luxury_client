import { useMutation, useQuery } from '@apollo/client'
import { useRouter } from 'next/router'
import { useRef, useState } from 'react'
import CreateReviewPageUI from './createReview.presenter'
import { CREATE_REVIEW, FETCH_PRODUCT } from './createReview.query'

export default function CreateReviewPage(props) {
  const fileRef = useRef(null)
  const router = useRouter()

  const onClickRef = () => {
    fileRef.current?.click()
  }

  const { data } = useQuery(FETCH_PRODUCT, {
    // variables: { productId: String(router.query.productId) },
    //1. review mypage 연결되면 거기서 조회된 userID 가져와서 입력
    variables: {
      productId: '2b5d1b27-0a5b-44dc-9c2e-219914617b21',
      userId: 'bbf01217-6618-488e-95d5-c0cd1be4aa79',
    },
  })

  const [createReview] = useMutation(CREATE_REVIEW)
  const [reviewRate, setReviewRate] = useState(0)
  const [reviewContent, setReviewContent] = useState('')
  const [url, setUrl] = useState('')
  //2. img GCP에 넣을 API 필요 -> if 사용해서 필수값없으면 등록 자체가 안되도록 진행

  const onClickSubmit = async () => {
    try {
      if (reviewContent && reviewContent && url) {
        const result = await createReview({
          variables: {
            // productId: String(router.query.productId),
            productId: '2b5d1b27-0a5b-44dc-9c2e-219914617b21',
            content: reviewContent,
            ratings: reviewRate,
            img: url,
          },
        })
        console.log(result)
        window.location.reload()
      }
    } catch (error) {
      console.log(error.message)
    }
  }

  const onChangeContent = (e) => {
    setReviewContent(e.target.value)
  }

  return (
    <CreateReviewPageUI
      onClickOpenReview={props.onClickOpenReview}
      onClickRef={onClickRef}
      fileRef={fileRef}
      data={data}
      onClickSubmit={onClickSubmit}
      setReviewRate={setReviewRate}
      onChangeContent={onChangeContent}
      setUrl={setUrl}
      setIsReview={props.setIsReview}
    />
  )
}
