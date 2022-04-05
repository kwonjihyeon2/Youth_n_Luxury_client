import { useMutation, useQuery } from '@apollo/client'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { FETCH_USER } from '../../../../account/login/Login.queries'
import MyAskWriteUI from './MyAskWrite.presenter'
import { CREATE_USER_QUERY } from './MyAskWrite.Queries'

export default function MyAskWrite() {
  const router = useRouter()
  const { data } = useQuery(FETCH_USER)
  const [createUserQuery] = useMutation(CREATE_USER_QUERY)
  const [input, setInput] = useState({
    title: '',
    contents: '',
    img: '1',
    adminCategoryId: '',
  })
  const adminCategoryObj = {
    환불문의: 'ac3c4c0f-0c1d-44cf-ab5c-2cadc1cc1d38',
    상품정보문의: 'c00f9e27-b45b-4a4b-8cfe-830680ec7835',
    취소문의: 'bfbcd309-e9c6-4a6b-a578-3d2993bb0ca8',
    반품문의: '8e1e4bc3-c5c2-4243-aafd-620ba24fef34',
    배송문의: 'a868d339-853c-43aa-a8d7-a304210a1c93',
    회원정보문의: '7c09c380-e36e-4d91-bca3-15a72ea36e6c',
    주문결제문의: '3ab8ccbe-66f5-4d45-a2db-6420de27d004',
    기타문의: '44fdd0e3-33f5-402f-8986-70a5a5207ab0',
  }
  const onChangeInput = (inputType) => (event) => {
    if (!inputType) {
      setInput({
        ...input,
        adminCategoryId: adminCategoryObj[event.target.value],
      })
    } else {
      setInput({ ...input, [inputType]: event.target.value })
    }
  }
  const onClickSubmit = async () => {
    try {
      console.log(input)
      const result = await createUserQuery({ variables: { ...input } })
      console.log(input)
      console.log(result)
      router.push('/mypage/myActivity/myAsk/')
    } catch (error) {
      console.log(error.message)
    }
  }
  return (
    <MyAskWriteUI
      data={data}
      onChangeInput={onChangeInput}
      onClickSubmit={onClickSubmit}
    />
  )
}
