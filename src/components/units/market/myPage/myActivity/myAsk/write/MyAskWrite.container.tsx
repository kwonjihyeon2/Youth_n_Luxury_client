import { useRouter } from 'next/router'
import { useState } from 'react'
import MyAskWriteUI from './MyAskWrite.presenter'

export default function MyAskWrite() {
  const [input, setInput] = useState({})
  const onChangeInput = (event) => {}
  return <MyAskWriteUI />
}
