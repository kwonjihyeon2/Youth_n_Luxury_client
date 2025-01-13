import { useState } from 'react'
import FindAccountUI from './FindAccount.presenter'

export default function FindAccount() {
  const [isSend, setIsSend] = useState(false)

  return <FindAccountUI setIsSend={setIsSend} isSend={isSend} />
}
