import UserChattingPageUI from './userChatting.presenter'
import SocketIOClient from 'socket.io-client'
import { gql, useLazyQuery, useMutation, useQuery } from '@apollo/client'
import { FETCH_CHAT, JOIN_SELLER, UPDATE_CHAT } from './userChatting.queries'
import { useEffect, useState } from 'react'

const socket = SocketIOClient.connect(
  'https://mybackend.project5-sos.shop/graphql'
)

export default function UserChattingPage() {
  const [fetchChat] = useLazyQuery(FETCH_CHAT)
  const [chatInfo, setChatInfo] = useState({})
  const { data } = useQuery(JOIN_SELLER)

  socket.on('sellerInfo', (data) => {
    console.log(data)
    //룸id인지 룸전체 정보인지 확인해야함
    // setRoomId(data)
  })

  const [sendText, setSendText] = useState('')
  const onChangeText = (e) => {
    setSendText(e.target.value)
  }

  const [updateChat] = useMutation(UPDATE_CHAT)
  const onSendChat = async () => {
    if (sendText === '') return
    try {
      const update = await updateChat({
        variables: {
          roomId: String(chatInfo.roomId),
          updateChat: `${sendText}`,
        },
        refetchQueries: [FETCH_CHAT],
      })
      console.log(update + '->여긴 API 요청 결과')
      socket.emit('updateChat', (data) => {
        console.log(data + '이건 텍스트 전송')
      })
    } catch (error) {
      console.log('채팅 진행' + error.message)
    }
  }

  useEffect(() => {
    socket.on('chat', (data) => {
      console.log(data)
    })
  }, [socket])

  const onClickOpenRoom = (id) => async () => {
    const resultChatInfo = await fetchChat({ variables: { roomId: id } })
    setChatInfo(resultChatInfo.data?.fetchChat)
  }
  // console.log(chatInfo)

  return (
    <UserChattingPageUI
      socket={socket}
      data={data}
      onClickOpenRoom={onClickOpenRoom}
      chatInfo={chatInfo}
      onSendChat={onSendChat}
      onChangeText={onChangeText}
    />
  )
}
