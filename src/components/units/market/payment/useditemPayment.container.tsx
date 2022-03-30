import { useMutation, useQuery } from '@apollo/client'
import { useState } from 'react'
import { FETCH_PRODUCT } from '../detail/useditemDetail.query'
import UseditemPaymentpageUI from './UseditemPayment.presenter'
import { CREATE_ORDER } from './useditemPayment.queries'
import Head from 'next/head'
import { useRouter } from 'next/router'

declare const window: typeof globalThis & {
  IMP: any
}

export default function UseditemPaymentpage() {
  const router = useRouter()
  const { data } = useQuery(FETCH_PRODUCT, {
    variables: {
      userId: 'bbf01217-6618-488e-95d5-c0cd1be4aa79',
      productId: '2b5d1b27-0a5b-44dc-9c2e-219914617b21',
      subCategoryId: '',
    },
  })
  console.log(data?.fetchProduct)
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

  const [inputs, setInputs] = useState({
    input: '',
    secInput: '',
    thirdInput: '',
  })

  const onChangeNum = (event: any) => {
    // console.log(event.target.id)
    setInputs({
      ...inputs,
      [event.target.id]: event.target.value,
    })
  }

  const [createOrder] = useMutation(CREATE_ORDER)

  const onClickOrder = () => {
    const IMP = window.IMP
    IMP.init('imp89934474')

    IMP.request_pay(
      {
        // param
        pg: 'html5_inicis',
        pay_method: 'card',
        // merchant_uid: 'ORD20180131-0000011',
        name: '노르웨이 회전 의자',
        amount: Number(data?.fetchProduct.price),
        buyer_email: 'gildong@gmail.com',
        buyer_name: '홍길동',
        buyer_tel: inputs.input + inputs.secInput + inputs.thirdInput,
        buyer_addr: '서울특별시 강남구 신사동',
        buyer_postcode: '01181',
      },
      async (rsp) => {
        if (rsp.success) {
          // 결제 성공 시 로직,
          console.log(rsp)
          try {
            const result = await createOrder({
              variables: {
                impUid: rsp.imp_uid,
                productId: String(data?.fetchProduct.productId),
                price: Number(data?.fetchProduct.price),
                status: 'PAYMENT',
              },
            })
            console.log(result)
            // router.push('/mypage')
          } catch (error) {
            console.log(error.message)
          }
        } else {
          // 결제 실패 시 로직,
        }
      }
    )
  }

  return (
    <>
      <Head>
        <script
          type="text/javascript"
          src="https://code.jquery.com/jquery-1.12.4.min.js"
        ></script>
        <script
          type="text/javascript"
          src="https://cdn.iamport.kr/js/iamport.payment-1.2.0.js"
        ></script>
      </Head>
      <UseditemPaymentpageUI
        data={data}
        onChangeNum={onChangeNum}
        onClickOrder={onClickOrder}
        isOpenAdd={isOpenAdd}
        isModalAdd={isModalAdd}
        onClickAdd={onClickAdd}
        handleComplete={handleComplete}
        onClickDaumModal={onClickDaumModal}
        zipCode={zipCode}
        address={address}
      />
    </>
  )
}
