import { useState } from 'react'
import UseditemPaymentpageUI from './UseditemPayment.presenter'

export default function UseditemPaymentpage() {
  const [isOpenAdd, setIsOpenAdd] = useState(false)

  const onClickAdd = () => {
    setIsOpenAdd((prev) => !prev)
  }

  const [isModalAdd, setIsModalAdd] = useState(false)
  const [zipCode, setZipCode] = useState('')
  const [address, setAddress] = useState('')
  // const [addressDetail, setAddressDetail] = useState('') -> 결제 API 완료 후 테스트

  const onClickDaumModal = () => {
    setIsModalAdd((prev) => !prev)
  }

  const handleComplete = (data) => {
    setZipCode(data.zonecode)
    setAddress(data.address)

    onClickDaumModal()
  }
  // console.log('이게 뭐니?', isModalAdd, '이건?', isOpenAdd)

  return (
    <UseditemPaymentpageUI
      isOpenAdd={isOpenAdd}
      isModalAdd={isModalAdd}
      onClickAdd={onClickAdd}
      handleComplete={handleComplete}
      onClickDaumModal={onClickDaumModal}
      zipCode={zipCode}
      address={address}
    />
  )
}
