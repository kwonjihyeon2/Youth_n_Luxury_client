import { useMutation, useQuery } from '@apollo/client'
import { useRouter } from 'next/router'
import { useState } from 'react'
import AdminMainUI from './AdminMain.presenter'
import {
  CREATE_ORDER,
  DELETE_USER,
  FETCH_ADMIN_QUERYS,
  FETCH_ALL_PRODUCT,
  FETCH_ORDERS,
  // FETCH_PRODUCTS,
  FETCH_USERS,
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
  const [createOrder] = useMutation(CREATE_ORDER)
  const onClickMoveToQuery = () => {}
  const onClickLogout = () => {}
  const onClickDeleteProduct = () => {}
  const onChangeStatus = async (event) => {
    setStatus(event.target.value)
    try {
      await createOrder({
        variables: {
          impUid: dataOrders?.fetchOrders.impUid || 'no',
          productId: dataOrders?.fetchOrders.id || 'no',
          status: status,
        },
      })
    } catch (error) {
      alert(error.message)
    }
  }
  console.log('--------------')
  console.log(dataQuerys)
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
