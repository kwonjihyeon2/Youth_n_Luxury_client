import { useState } from 'react'
import UseditemPaymentpageUI from './UseditemPayment.presenter'

export default function UseditemPaymentpage() {
  const [isOpenAdd, setIsOpenAdd] = useState(false)
  const [isModalAdd, setIsModalAdd] = useState(false)

  const onClickAdd = () => {
    setIsOpenAdd((prev) => !prev)
  }
  const onClickModal = () => {
    setIsOpenAdd((prev) => !prev)
    setIsModalAdd((prev) => !prev)
  }
  console.log(isModalAdd)

  return (
    <UseditemPaymentpageUI
      isOpenAdd={isOpenAdd}
      isModalAdd={isModalAdd}
      onClickModal={onClickModal}
      onClickAdd={onClickAdd}
    />
  )
}
