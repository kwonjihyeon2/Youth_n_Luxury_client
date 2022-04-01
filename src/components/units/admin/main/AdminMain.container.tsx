import { useQuery } from '@apollo/client'
import { useRouter } from 'next/router'
import AdminMainUI from './AdminMain.presenter'
import {
  FETCH_ADMIN_QUERYS,
  FETCH_ORDERS,
  FETCH_PRODUCTS,
  FETCH_USERS,
} from './AdminMain.queries'

export default function AdminMain() {
  const router = useRouter()
  const { data: dataQuerys, refetch: refetchQuerys } =
    useQuery(FETCH_ADMIN_QUERYS)
  const { data: dataUsers, refetch: refetchUsers } = useQuery(FETCH_USERS)
  const { data: dataOrders, refetch: refetchOrders } = useQuery(FETCH_ORDERS)
  const { data: dataProducts, refetch: refetchProducts } =
    useQuery(FETCH_PRODUCTS)

  const onClickMoveToQuery = () => {
    // router.push(`/mypage/`)
  }
  const onClickLogout = () => {}
  const onClickDeleteProduct = () => {}
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
    />
  )
}
