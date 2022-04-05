import { useMutation, useQuery } from '@apollo/client'
import { useRouter } from 'next/router'
import { useState } from 'react'
import AdminMainUI from './AdminMain.presenter'
import {
  DELETE_PRODUCT,
  DELETE_USER,
  FETCH_ALL_PRODUCT,
  FETCH_TRANSACTION_ALL,
  FETCH_USERS,
  FIND_ALL_USER_QUERIES,
  UPDATE_TRANSACTION,
} from './AdminMain.queries'

export default function AdminMain() {
  const router = useRouter()
  const [status, setStatus] = useState('')
  const { data: dataQueries } = useQuery(FIND_ALL_USER_QUERIES)
  const { data: dataUsers, refetch: refetchUsers } = useQuery(FETCH_USERS)
  // const { data: dataOrders, refetch: refetchOrders } = useQuery(FETCH_ORDERS)
  const { data: dataTrans, refetch: refetchTrans } = useQuery(
    FETCH_TRANSACTION_ALL
  )
  // const { data: dataImpuid, refetch: refetchImpuid } = useQuery(
  //   FETCH_IMPUID_WITH_PRODUCTID_USERID,
  //   { variables: { productId: '62c4e753-fe64-4c4a-b74f-75f517e306a8' } }
  // )

  const { data: dataProducts, refetch: refetchProducts } =
    useQuery(FETCH_ALL_PRODUCT)
  const [deleteUser] = useMutation(DELETE_USER)
  const [updatetransaction] = useMutation(UPDATE_TRANSACTION)
  const [deleteProduct] = useMutation(DELETE_PRODUCT)
  const onClickMoveToQuery = () => {}
  const onClickLogout = () => {}
  const onClickDeleteProduct = (id) => async () => {
    try {
      await deleteProduct({
        variables: { productId: id },
        refetchQueries: [
          {
            query: FETCH_ALL_PRODUCT,
          },
        ],
      })
      alert('게시글이 삭제되었습니다.')
    } catch (error) {
      alert(error.message)
    }
  }

  const onClickStatus = (uid) => async () => {
    try {
      await updatetransaction({
        variables: {
          impuid: uid,
          statusCode: status,
        },
      })
    } catch (error) {
      alert(error.message)
    }
    alert('변경 완료!')
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
  const onClickUserQuery = (id) => () => {
    router.push(`/mypage/myActivity/myAsk/${id}`)
  }
  return (
    <AdminMainUI
      onClickUserQuery={onClickUserQuery}
      dataQueries={dataQueries}
      dataUsers={dataUsers}
      dataTrans={dataTrans}
      dataProducts={dataProducts}
      refetchUsers={refetchUsers}
      refetchProducts={refetchProducts}
      onClickLogout={onClickLogout}
      onClickDeleteProduct={onClickDeleteProduct}
      onClickDeleteUser={onClickDeleteUser}
      onChangeStatus={onChangeStatus}
      onClickStatus={onClickStatus}
    />
  )
}
