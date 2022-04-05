import { useMutation, useQuery } from '@apollo/client'
import { ChangeEvent, useState } from 'react'
import UseditemPaymentpageUI from './UseditemPayment.presenter'
import {
  CREATE_ADDRESS,
  CREATE_ORDER,
  FETCH_ADDRESS,
  FETCH_ADDRS,
  FETCH_USER,
  // UPDATE_ADDRESS,
  FETCH_PRODUCT,
} from './useditemPayment.queries'
import Head from 'next/head'
import { useRouter } from 'next/router'

declare const window: typeof globalThis & {
  IMP: any
}

export default function UseditemPaymentpage(props) {
  const router = useRouter()

  //물건 조회 -> 유저 조회까지 가능
  const { data } = useQuery(FETCH_PRODUCT, {
    variables: { productId: String(router.query.boardId) },
  })
  const { data: user } = useQuery(FETCH_USER)
  //Daumpostcode 관련,
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [Address, setAddress] = useState('')
  const [zonecode, setZonecode] = useState('')
  const [AddressDetail, setAddressDetail] = useState('')

  const onTogglePostModal = () => {
    setIsModalVisible((prev) => !prev)
  }

  const onCompleteAddress = (data: any) => {
    console.log(data)
    setAddress(data.address)
    setZonecode(data.zonecode)
    setAddressDetail(data.addressDetail)
    onTogglePostModal()
  }

  const onChangeAddressDetail = (event: ChangeEvent<HTMLInputElement>) => {
    setAddressDetail(event.target.value)
  }
  // const onClickSetPost = () => {
  //   setAddress(data.address)
  //   setZonecode(data.zonecode)
  //   setAddressDetail(data.addressDetail)
  // }

  //배송지 관련 true, false css
  const [isOpenAdd, setIsOpenAdd] = useState(false)
  const onClickOpen = () => {
    setIsOpenAdd((prev) => !prev)
  }

  //배송지 등록
  const [createAddr] = useMutation(CREATE_ADDRESS)
  const onClickSubmit = async () => {
    try {
      const submit = await createAddr({
        variables: {
          createUserAddrInput: {
            address: Address,
            zipCode: zonecode,
            addressDetail: AddressDetail,
          },
        },
      })
      console.log(submit)
      setIsOpenAdd((prev) => !prev)
    } catch (error) {
      console.log(error.message)
    }
  }

  //등록된 배송지 fetch
  const { data: addrData } = useQuery(FETCH_ADDRESS)

  //사용자 기본 배송지
  const [basic, setBasic] = useState(false)
  const onClickBasic = () => {
    setBasic((prev) => !prev)
  }
  const onClickEvent = () => {
    setIsOpenAdd((prev) => !prev)
    setBasic((prev) => !prev)
  }

  //등록한 배송지 리스트
  const { data: listAddr } = useQuery(FETCH_ADDRS)

  // 결제 로직
  const [isSold, setIsSold] = useState(false)
  const [createOrder] = useMutation(CREATE_ORDER)
  const onClickOrder = () => {
    const IMP = window.IMP
    IMP.init('imp89934474')

    IMP.request_pay(
      {
        // param
        pg: 'html5_inicis',
        pay_method: 'card',
        name: 'Youth&Luxury',
        amount: Number(data?.fetchProduct.price),
        buyer_email: data?.fetchProduct.user.email,
        buyer_name: data?.fetchProduct.user.name,
        buyer_tel: data?.fetchProduct.user.phoneNum,
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
                impuid: rsp.imp_uid,
                amount: Number(data?.fetchProduct.price),
                productid: String(data?.fetchProduct.product_id),
              },
            })
            console.log(result)
            setIsSold(true)
            router.push('/market/list')
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
        user={user}
        data={data}
        isOpenAdd={isOpenAdd}
        onClickOpen={onClickOpen}
        onClickOrder={onClickOrder}
        isModalVisible={isModalVisible}
        onTogglePostModal={onTogglePostModal}
        onCompleteAddress={onCompleteAddress}
        onChangeAddressDetail={onChangeAddressDetail}
        Address={Address}
        zonecode={zonecode}
        AddressDetail={AddressDetail}
        onClickSubmit={onClickSubmit}
        addrData={addrData}
        onClickBasic={onClickBasic}
        basic={basic}
        onClickEvent={onClickEvent}
        listAddr={listAddr}
        isSold={isSold}
      />
    </>
  )
}
