import { useMutation, useQuery } from '@apollo/client'
import { useRouter } from 'next/router'
import { useState } from 'react'
import AdminMainUI from './AdminMain.presenter'
import {
  DELETE_USER,
  FETCH_ADMIN_QUERYS,
  FETCH_ALL_PRODUCT,
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
  const { data: dataOrders, refetch: refetchOrders } = useQuery(FETCH_ORDERS)
  // const { data: dataProducts, refetch: refetchProducts } =
  //   useQuery(FETCH_PRODUCTS)
  const { data: dataProducts, refetch: refetchProducts } =
    useQuery(FETCH_ALL_PRODUCT)

  const [deleteUser] = useMutation(DELETE_USER)
  const [updateTransaction] = useMutation(UPDATE_TRANSACTION)
  const onClickMoveToQuery = () => {}
  const onClickLogout = () => {}
  const onClickDeleteProduct = () => {}

  const onChangeStatus = async (event) => {
    setStatus(event.target.value)
    console.log(status)
    try {
      await updateTransaction({
        variables: {
          impuid: dataOrders?.fetchOrders[0].impUid,
          statusCode: status,
        },
      })
    } catch (error) {
      alert(error.message)
    }
  }
  console.log('--------------')
  // console.log(dataOrders.fetchOrders[0].impUid)
  console.log('--------------')

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
      dataOrders={dataOrders}
      dataProducts={dataProducts}
      refetchQuerys={refetchQuerys}
      refetchUsers={refetchUsers}
      refetchOrders={refetchOrders}
      refetchProducts={refetchProducts}
      onClickLogout={onClickLogout}
      onClickDeleteProduct={onClickDeleteProduct}
      onClickDeleteUser={onClickDeleteUser}
      onChangeStatus={onChangeStatus}
    />
  )
}
