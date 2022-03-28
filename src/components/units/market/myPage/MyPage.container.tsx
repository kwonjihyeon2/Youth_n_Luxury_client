import { useState } from 'react'
import MyPageUI from './MyPage.presenter'

export default function MyPageContainer() {
  const [pageNum, setPageNum] = useState(0)

  return <MyPageUI />
}
