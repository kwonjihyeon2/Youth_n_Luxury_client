import { useState } from 'react'
import useLocalStorage from '../../commons/hooks/UseLocalStorage'
import Dashboard from './ChatTest.Dashboard'
import ChatTestUI from './ChatTest.presenter'

export default function ChatTest() {
  const [id, setId] = useLocalStorage('id')

  console.log(id)
  return id ? <Dashboard id={id} /> : <ChatTestUI onIdSubmit={setId} />
}
