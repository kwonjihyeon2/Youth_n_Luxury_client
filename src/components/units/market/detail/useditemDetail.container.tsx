import { useEffect, useRef } from 'react'
import { useState } from 'react'
import UseditemDetailPageUI from './useditemDetail.presenter'
import { useMoveToPage } from '../../../commons/hooks/useMoveToPage'
import { useMutation, useQuery } from '@apollo/client'
import { useRouter } from 'next/router'
import {
  CREATE_CHAT,
  CREATE_LIKE,
  DELETE_PRODUCT,
  FETCH_LIKE,
  FETCH_PRODUCT,
  RELATIVE_PRODUCT,
  SELLER_PRODUCT,
} from './useditemDetail.query'
import SocketIOClient from 'socket.io-client'
import { FETCH_USER } from '../payment/useditemPayment.queries'

declare const window: typeof globalThis & {
  Kakao: any
}
const socket = SocketIOClient('https://mybackend.project5-sos.shop')
export default function UseditemDetailPage(props) {
  const { moveToPage } = useMoveToPage()
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)
  const [isShare, setIsShare] = useState(false)
  const [isHeart, setIsHeart] = useState(false)

  const onClickOpen = () => {
    setIsOpen((prev) => !prev)
  }
  const onClickShare = () => {
    setIsShare((prev) => !prev)
  }

  const { data } = useQuery(FETCH_PRODUCT, {
    variables: { productId: String(router.query.boardId) },
  })

  const { data: productData } = useQuery(SELLER_PRODUCT, {
    variables: { userId: String(data?.fetchProduct.user.id) },
  })

  const [createLike] = useMutation(CREATE_LIKE)
  // const { data: picked } = useQuery(FETCH_LIKE)
  const [info, setInfo] = useState()

  const onClickHeart = async () => {
    setIsHeart((prev) => !prev)
    try {
      const toggle = await createLike({
        variables: { productId: String(router.query.boardId) },
        refetchQueries: [FETCH_PRODUCT],
      })
      console.log(toggle)
    } catch (error) {
      console.log(error.message)
    }
  }

  const [deleteProduct] = useMutation(DELETE_PRODUCT)
  const onClickDelete = async () => {
    try {
      const result = await deleteProduct({
        variables: { productId: String(router.query.boardId) },
      })
      router.push('/market/list')
    } catch (error) {
      console.log(error.message)
    }
  }

  const [isKeep, setKeep] = useState(false)
  // useEffect(() => {
  //   const pick = picked?.fetchProductLike.filter(
  //     (el) => el.id === data?.fetchProduct.id
  //   )
  //   console.log(pick)
  //   if (pick?.length) {
  //     setKeep(true)
  //   }
  // }, [picked?.fetchProductLike])

  const onClickBasketBtn = () => {
    let isExist = false
    const baskets = JSON.parse(localStorage.getItem('basket') || '[]')
    baskets.forEach((basketEl) => {
      if (basketEl.fetchProduct.product_id === data.fetchProduct.product_id) {
        isExist = true
        return false
      }
    })
    if (!isExist) {
      baskets.push(data)
      localStorage.setItem('basket', JSON.stringify(baskets))
    }
  }

  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://developers.kakao.com/sdk/js/kakao.js'
    script.async = true

    document.body.appendChild(script)

    script.onload = () => {
      createKakaoButton()
    }
  }, [])

  const createKakaoButton = () => {
    if (window.Kakao) {
      const kakao = window.Kakao

      // 중복 initialization 방지
      if (!kakao.isInitialized()) {
        // 두번째 step 에서 가져온 javascript key 를 이용하여 initialize
        kakao.init('a6737013adeb3b6bc159d974a287f791')
      }

      kakao.Link.createDefaultButton({
        // Render 부분 id=kakao-link-btn 을 찾아 그부분에 렌더링을 합니다
        container: '#kakao-link-btn',
        objectType: 'feed',
        content: {
          title: `${data?.fetchProduct.name}`,
          description: `${data?.fetchProduct.description}`,
          imageUrl: `http://localhost:3000/vercel.svg`, // i.e. process.env.FETCH_URL + '/logo.png'
          link: {
            mobileWebUrl: window.location.href,
            // webUrl: window.location.href,
          },
        },
        buttons: [
          {
            title: '웹으로 보기',
            link: {
              mobileWebUrl: window.location.href,
              webUrl: window.location.href,
            },
          },
        ],
      })
    }
  }

  const { data: relativeData } = useQuery(RELATIVE_PRODUCT, {
    variables: {
      name: String(data?.fetchProduct.subCategory?.mainCategory.name),
    },
  })

  //상품문의에서 채팅 요청API
  const [createChat] = useMutation(CREATE_CHAT)
  const { refetch } = useQuery(FETCH_USER)

  const onClickMakeRoom = async (e) => {
    const userResult = await refetch()

    const User = userResult.data?.fetchUser
    const { __typename, ...rest } = User

    const create = {
      productId: String(data?.fetchProduct.product_id),
      currentUser: rest,
    }

    e.preventDefault()
    socket.emit('createChat', create)
    console.log(create)
    console.log('클릭함', socket)
    // router.push('/market/chatting')
    // try {
    //   const result = await createChat({
    //     variables: { productId: String(data?.fetchProduct.id) },
    //   })
    //   console.log('구매자가 채팅 요청 성공 :' + JSON.stringify(result))
    //   socket.on('return_roomId', (result) => {
    //     socket.emit('joinSeller', result)
    //   })
    //   console.log(socket)
    //   router.push('/market/chatting')
    // } catch (error) {
    //   console.log('구매자가 채팅 요청했는데 실패 :' + error.message)
    // }
  }
  socket.on('roomInfo', (data) => {
    console.log(data)
  })

  return (
    <UseditemDetailPageUI
      productData={productData}
      relativeData={relativeData}
      isSold={props.isSold}
      data={data}
      isHeart={isHeart}
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      onClickHeart={onClickHeart}
      onClickOpen={onClickOpen}
      moveToPage={moveToPage}
      onClickDelete={onClickDelete}
      onClickShare={onClickShare}
      isShare={isShare}
      onClickBasketBtn={onClickBasketBtn}
      isKeep={isKeep}
      onClickMakeRoom={onClickMakeRoom}
    />
  )
}
