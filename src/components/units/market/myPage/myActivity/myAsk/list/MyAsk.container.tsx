import { useQuery } from '@apollo/client'
import { useRouter } from 'next/router'
import { useContext, useEffect, useState } from 'react'
import { GlobalContext } from '../../../../../../../../pages/_app'
import MyAskUI from './MyAsk.presenter'
import { FETCH_USER_QUERYS } from './MyAsk.queries'

export default function MyAsk() {
  const router = useRouter()
  const { data: dataQuerys, refetch } = useQuery(FETCH_USER_QUERYS)
  const MoveToWrite = () => {
    router.push('/mypage/myActivity/myAsk/new')
  }

  const MoveToDetail = () => {
    router.push('/mypage/myActivity/myAsk/')
  }
  const [data, setData] = useState({})
  const adminCategoryObj = {
    환불문의: '06f3fed8-ad52-466d-b9dc-8e826ce5347a',
    상품정보문의: '12446258-5273-4e1a-98dc-50b40a07b33e',
    취소문의: '23f71f52-1336-4405-96bf-dac162ef3337',
    반품문의: '2f51c068-acf2-44e3-85bb-1cf58fb3ad1f',
    배송문의: '46dd94eb-0854-4340-9f72-34f3d6c5e696',
    회원정보문의: '8b51befa-e6c5-486b-913f-682e6179a087',
    주문결제문의: 'cd9227d9-7b77-4fd3-811c-28af1d6a531a',
  }
  // useEffect(() => {
  //   if (!accessToken) {
  //     return
  //   }
  //   const fetchQuerys = async () => {
  //     const result = await fetchUserQuerys({
  //       variables: { adminCategoryId: adminCategoryObj[adminCategory] },
  //     })
  //     console.log(result.data)
  //     setData(result.data)
  //   }
  //   fetchQuerys()
  // }, [adminCategory, accessToken])
  const onChangeAdminCategory = async (event) => {
    console.log('이벤트')
    console.log(adminCategoryObj[event.target.value])
    const result = await refetch({
      variables: { adminCategoryId: adminCategoryObj[event.target.value] },
    })
    setData(result.data)
    console.log(result.data)
  }
  return (
    <MyAskUI
      MoveToWrite={MoveToWrite}
      data={data}
      onChangeAdminCategory={onChangeAdminCategory}
      adminCategoryObj={adminCategoryObj}
    />
  )
}
