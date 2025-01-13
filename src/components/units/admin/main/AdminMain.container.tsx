import { useMutation, useQuery } from '@apollo/client'
import { useRouter } from 'next/router'
import { ChangeEvent, MouseEventHandler, useState } from 'react'
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
  const { data: dataTrans } = useQuery(FETCH_TRANSACTION_ALL)
  const { data: dataProducts, refetch: refetchProducts } =
    useQuery(FETCH_ALL_PRODUCT)
  const [deleteUser] = useMutation(DELETE_USER)
  const [updatetransaction] = useMutation(UPDATE_TRANSACTION)
  const [deleteProduct] = useMutation(DELETE_PRODUCT)
  const onClickLogout = () => {}
  const onClickDeleteProduct = (id: string) => async () => {
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

  const onClickStatus = (uid: string) => async () => {
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
  const onChangeStatus = (event: ChangeEvent<HTMLSelectElement>) => {
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
  const onClickUserQuery = (id: MouseEventHandler<HTMLDivElement>) => () => {
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
