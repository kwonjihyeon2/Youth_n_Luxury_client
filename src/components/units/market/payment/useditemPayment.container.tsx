import { useMutation, useQuery } from '@apollo/client'
import { useState } from 'react'
import { FETCH_PRODUCT } from '../detail/useditemDetail.query'
import UseditemPaymentpageUI from './UseditemPayment.presenter'
import {
  CREATE_ADDRESS,
  CREATE_ORDER,
  FETCH_ADDRESS,
  FETCH_ADDRS,
  FETCH_USER,
  UPDATE_ADDRESS,
} from './useditemPayment.queries'
import Head from 'next/head'
import { useRouter } from 'next/router'

declare const window: typeof globalThis & {
  IMP: any
}

export default function UseditemPaymentpage(props) {
  const router = useRouter()
  const { data } = useQuery(FETCH_PRODUCT, {
    variables: {
      productId: String(router.query.boardId),
    },
  })

  const { data: fetchUser } = useQuery(FETCH_USER)
  const { data: AddrOne } = useQuery(FETCH_ADDRESS)
  console.log(AddrOne)
  const [createAddr] = useMutation(CREATE_ADDRESS)

  // const
  // const { data: fetchUser } = useQuery(FETCH_ADDRESS, {
  //   variables: { userAddrId: String(data?.fetchProduct.user.id) },
  // })
  // console.log(data?.fetchProduct.user.id)

  const [isOpenAdd, setIsOpenAdd] = useState(false)

  const onClickAdd = () => {
    setIsOpenAdd((prev) => !prev)
  }

  const [isModalAdd, setIsModalAdd] = useState(false)
  const [address, setAddress] = useState('')
  const [zoneCode, setZipcode] = useState('')
  const [addressDetail, setAddressDetail] = useState('')
  const [resultAddr, setResultAddr] = useState({})

  const onClickDaumModal = () => {
    setIsModalAdd((prev) => !prev)
  }

  const handleComplete = (data) => {
    setAddress(data.address)
    setZipcode(data.zonecode)
    setAddressDetail(data.addressDetail)

    onClickDaumModal()
  }
  console.log(address, zoneCode, addressDetail)

  const onChangeAddr = (event) => {
    setAddressDetail(event.target.value)
  }

  const onClickSelect = async () => {
    // setIsOpenAdd((prev) => !prev)
    try {
      const Addrresult = await createAddr({
        variables: {
          createUserAddrInput: {
            address,
            addressDetail,
            zipCode: zoneCode,
          },
        },
      })
      // console.log(Addrresult)
      setResultAddr(Addrresult)
      setIsOpenAdd((prev) => !prev)
    } catch (error) {
      console.log(error.message)
    }
  }

  // const onClickEditAddr = async () => {
  //   try {
  //     const Addrresult = await createAddr({
  //       variables: {
  //         createUserAddrInput: {
  //           address,
  //           addressDetail,
  //           zipCode: zoneCode,
  //         },
  //       },
  //     })
  //     setResultAddr(Addrresult)
  //     setIsOpenAdd((prev) => !prev)
  //   } catch (error) {
  //     console.log(error.message)
  //   }
  // }

  const { data: Addrs } = useQuery(FETCH_ADDRS)
  console.log(Addrs?.fetchUserAddrs.length)

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
        name: 'Youth&Luxury',
        amount: Number(data?.fetchProduct.price),
        buyer_email: fetchUser.fetchUser.email,
        buyer_name: fetchUser.fetchUser.name,
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

  const [isSame, setIsSame] = useState(false)
  const onClickSame = () => {
    setIsSame((prev) => !prev)
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
        AddrOne={AddrOne}
        fetchUser={fetchUser}
        addressDetail={addressDetail}
        onChangeAddr={onChangeAddr}
        onClickSelect={onClickSelect}
        Addrs={Addrs}
        // isSold={isSold}
        inputs={inputs}
        isSame={isSame}
        onClickSame={onClickSame}
        data={data}
        onChangeNum={onChangeNum}
        onClickOrder={onClickOrder}
        isOpenAdd={isOpenAdd}
        isModalAdd={isModalAdd}
        onClickAdd={onClickAdd}
        handleComplete={handleComplete}
        onClickDaumModal={onClickDaumModal}
        zipCode={zoneCode}
        address={address}
      />
    </>
  )
}
