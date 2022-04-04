import UserChattingPageUI from './userChatting.presenter'
import SocketIOClient from 'socket.io-client'
import { gql, useMutation, useQuery } from '@apollo/client'
import { FETCH_CHAT, JOIN_SELLER, UPDATE_CHAT } from './userChatting.queries'
import { useEffect, useState } from 'react'
import { FETCH_USER } from '../myPage/myInfo/editUser/EditUser.queries'

const socket = SocketIOClient('https://mybackend.project5-sos.shop/graphql')

export default function UserChattingPage() {
  const { data: user } = useQuery(FETCH_USER)
  const [roomId, setRoomId] = useState('')
  const { refetch } = useQuery(FETCH_CHAT, {
    variables: { roomId: String(roomId) },
  })
  const [chatInfo, setChatInfo] = useState({})
  const { data } = useQuery(JOIN_SELLER)

  //소캣 연결 증명
  socket.on('hello', (data) => {
    console.log(data, '소캣연결?', socket.id)
  })

  //판매자 정보
  socket.on('sellerInfo', (data) => {
    console.log(data)
    //룸id인지 룸전체 정보인지 확인해야함
    // setRoomId(data)
  })

  //방목록 -> 대화내용 조회
  const onClickOpenRoom = (id) => async (e) => {
    setRoomId(id)
    const resultChatInfo = await refetch()
    setChatInfo(resultChatInfo?.data?.fetchChat)

    console.log(resultChatInfo)
    await socket.on('roomInfo', (data) => {
      e.preventDefault()
      console.log(data, '방정보', socket)
      console.log('--------------------')
    })
  }
  console.log(chatInfo)

  //대화 내용 전송
  const [sendText, setSendText] = useState('')

  const onChangeText = (e) => {
    setSendText(e.target.value)
    console.log(e.target.value)
  }

  const [updateChat] = useMutation(UPDATE_CHAT)
  const onSendChat = async () => {
    if (sendText === '') return
    try {
      // console.log('요청전', chatInfo.roomId)
      const update = await updateChat({
        variables: {
          roomId: String(chatInfo.roomId),
          updateChat: `${sendText}`,
        },
        refetchQueries: [
          {
            query: FETCH_CHAT,
            variables: {
              roomId: String(chatInfo.roomId),
            },
          },
        ],
      })
      console.log(update + '여긴 API 요청 결과')

      const param = {
        name: user?.fetchUser.name,
        msg: sendText,
      }
      socket.emit('updateChat', param)
      console.log('------------------ emit updateChat 보낸 값 조회')
      console.log(param)
    } catch (error) {
      console.log('채팅 전송 오류' + error.message)
    }
  }
  //보낸 메세지 기다리기
  const [fetchText, setFetchText] = useState()
  socket.on('chat', (data) => {
    console.log(data + '이건 받아옴')
    setFetchText(data)
  })
  // useEffect(() => {
  //   socket.on('chat', (data) => {
  //     console.log(data)
  //   })
  // }, [socket])

  // console.log(socket)
  return (
    <UserChattingPageUI
      user={user}
      fetchText={fetchText}
      socket={socket}
      data={data}
      onClickOpenRoom={onClickOpenRoom}
      chatInfo={chatInfo}
      onSendChat={onSendChat}
      onChangeText={onChangeText}
    />
  )
}
