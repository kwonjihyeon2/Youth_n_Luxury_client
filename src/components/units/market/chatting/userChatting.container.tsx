import UserChattingPageUI from './userChatting.presenter'
import SocketIOClient from 'socket.io-client'
import { useMutation, useQuery } from '@apollo/client'
import { FETCH_CHAT, UPDATE_CHAT } from './userChatting.queries'
import { useState } from 'react'

const socket = SocketIOClient.connect(
  'https://mybackend.project5-sos.shop/graphql'
)

export default function UserChattingPage() {
  const [roomId, setRoomId] = useState()

  socket.on('roomInfo', (data) => {
    console.log(data)
    //룸id인지 룸전체 정보인지 확인해야함
    setRoomId(data)
  })

  const { data } = useQuery(FETCH_CHAT, {
    variables: { roomId: roomId },
  })

  const [updateChat] = useMutation(UPDATE_CHAT)
  const onClickUpdate = async () => {
    try {
      const update = await updateChat({
        variables: { roomId: roomId, updateChat: '' },
        refetchQueries: [FETCH_CHAT],
      })
      console.log(update)
      socket.io()
    } catch (error) {
      console.log('채팅 진행' + error.message)
    }
  }

  return <UserChattingPageUI socket={socket} data={data} />
}
