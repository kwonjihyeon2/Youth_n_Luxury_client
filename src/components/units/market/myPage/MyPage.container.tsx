import { useState } from 'react'
import MyPageUI from './MyPage.presenter'

export default function MyPageContainer() {
  const [pageNum, setPageNum] = useState(0)

  const onClickSwitchPage = (num) => () => {
    setPageNum(num)
  }

  return <MyPageUI pageNum={pageNum} onClickSwitchPage={onClickSwitchPage} />
}
