import { useMutation, useQuery } from '@apollo/client'
import { useRouter } from 'next/router'
import { useState } from 'react'
import AdminMainUI from './AdminMain.presenter'
import {
  DELETE_USER,
  FETCH_ADMIN_QUERYS,
  FETCH_ALL_PRODUCT,
  FETCH_IMPUID_WITH_PRODUCTID_USERID,
  FETCH_ORDERS,
  FETCH_USERS,
  UPDATE_TRANSACTION,
} from './AdminMain.queries'

export default function AdminMain() {
  const router = useRouter()
  const [status, setStatus] = useState('')
  const { data: dataQuerys, refetch: refetchQuerys } =
    useQuery(FETCH_ADMIN_QUERYS)
  const { data: dataUsers, refetch: refetchUsers } = useQuery(FETCH_USERS)
  // const { data: dataOrders, refetch: refetchOrders } = useQuery(FETCH_ORDERS)
  const { data: dataImpuid, refetch: refetchImpuid } = useQuery(
    FETCH_IMPUID_WITH_PRODUCTID_USERID,
    { variables: { productId: '62c4e753-fe64-4c4a-b74f-75f517e306a8' } }
  )
  console.log('####')
  // console.log(dataOrders.fetchOrders[2].id)
  console.log('####')
  const { data: dataProducts, refetch: refetchProducts } =
    useQuery(FETCH_ALL_PRODUCT)
  const [deleteUser] = useMutation(DELETE_USER)
  const [updatetransaction] = useMutation(UPDATE_TRANSACTION)
  const onClickMoveToQuery = () => {}
  const onClickLogout = () => {}
  const onClickDeleteProduct = () => {}

  console.log('@@@')
  console.log(dataImpuid)
  // "62c4e753-fe64-4c4a-b74f-75f517e306a8"
  // dataOrders.fetchOrders[0].id
  console.log('@@@')
  const onClickStatus = async () => {
    try {
      await updatetransaction({
        variables: {
          impuid: dataImpuid?.fetchimpuidwithproductiduserid.impUid,
          statusCode: status,
        },
      })
      console.log(dataImpuid.fetchimpuidwithproductiduserid.impUid)
    } catch (error) {
      alert(error.message)
    }
  }
  const onChangeStatus = (event) => {
    setStatus(event.target.value)
  }

  const onClickDeleteUser = async () => {
    try {
      await deleteUser({
        refetchQueries: [
          {
            query: FETCH_USERS,
          },
        ],
      })
      alert('유저가 삭제되었습니다.')
    } catch (error) {
      alert(error.message)
    }
  }
  return (
    <AdminMainUI
      dataQuerys={dataQuerys}
      dataUsers={dataUsers}
      // dataOrders={dataOrders}
      dataProducts={dataProducts}
      refetchQuerys={refetchQuerys}
      refetchUsers={refetchUsers}
      // refetchOrders={refetchOrders}
      refetchProducts={refetchProducts}
      onClickLogout={onClickLogout}
      onClickDeleteProduct={onClickDeleteProduct}
      onClickDeleteUser={onClickDeleteUser}
      onChangeStatus={onChangeStatus}
      onClickStatus={onClickStatus}
    />
  )
}
