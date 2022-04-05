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
    환불문의: '253554a8-73db-492b-83ad-eca885d4c767',
    상품정보문의: 'd0b696d0-5522-467f-b3b9-b6ce7d413e83',
    취소문의: '23846fac-76b3-4fdc-99a3-2b7d947d5cf9',
    반품문의: '70d288cd-f7e9-4e50-b930-433764e1b18a',
    배송문의: '947c8eda-6380-40e4-b441-4bf8a3b38cbf',
    회원정보문의: 'ce0e89c0-af77-4fa2-83f2-3412f12b261b',
    주문결제문의: '1cfa8b49-4f0f-4370-ac3c-70d8b7df15cd',
    기타문의: '8d18fe7e-43bc-42aa-b060-90890909e257',
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
