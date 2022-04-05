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
    환불문의: '253554a8-73db-492b-83ad-eca885d4c767',
    상품정보문의: 'd0b696d0-5522-467f-b3b9-b6ce7d413e83',
    취소문의: '23846fac-76b3-4fdc-99a3-2b7d947d5cf9',
    반품문의: '70d288cd-f7e9-4e50-b930-433764e1b18a',
    배송문의: '947c8eda-6380-40e4-b441-4bf8a3b38cbf',
    회원정보문의: 'ce0e89c0-af77-4fa2-83f2-3412f12b261b',
    주문결제문의: '1cfa8b49-4f0f-4370-ac3c-70d8b7df15cd',
    기타문의: '8d18fe7e-43bc-42aa-b060-90890909e257',
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
