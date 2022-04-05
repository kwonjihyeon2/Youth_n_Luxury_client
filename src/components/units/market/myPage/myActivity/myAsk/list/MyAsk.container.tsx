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

  const [data, setData] = useState({})
  const MoveToDetail = (id) => (category) => () => {
    router.push('/mypage/myActivity/myAsk/' + id + '&' + category)
  }
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
      adminCategoryId: adminCategoryObj[event.target.value],
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
      MoveToDetail={MoveToDetail}
    />
  )
}
