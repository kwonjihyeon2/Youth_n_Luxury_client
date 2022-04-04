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

  socket.on('hello', (data) => {
    console.log(data, '소캣연결?', socket.id)
  })

  socket.on('sellerInfo', (data) => {
    console.log(data)
    //룸id인지 룸전체 정보인지 확인해야함
    // setRoomId(data)
  })

  const [sendText, setSendText] = useState('')

  const onChangeText = (e) => {
    setSendText(e.target.value)
    console.log(e.target.value)
  }
  const onClickOpenRoom = (id) => async (e) => {
    setRoomId(id)
    const resultChatInfo = await refetch()
    setChatInfo(resultChatInfo?.data?.fetchChat)

    console.log('소켓?' + socket)
    await socket.on('roomInfo', (data) => {
      e.preventDefault()
      console.log(data, '방정보', socket)
      console.log('--------------------')
    })
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
      console.log(update?.data + '->여긴 API 요청 결과')
      await socket.emit('updateChat', (data) => {
        console.log(data + '이건 텍스트 전송')
      })
      // console.log(data)
      await socket.on('chat', (data) => {
        console.log(data + '이건 받아옴')
      })
    } catch (error) {
      console.log('채팅 진행' + error.message)
    }
  }

  // useEffect(() => {
  //   socket.on('chat', (data) => {
  //     console.log(data)
  //   })
  // }, [socket])

  // console.log(socket)
  return (
    <UserChattingPageUI
      user={user}
      socket={socket}
      data={data}
      onClickOpenRoom={onClickOpenRoom}
      chatInfo={chatInfo}
      onSendChat={onSendChat}
      onChangeText={onChangeText}
    />
  )
}
