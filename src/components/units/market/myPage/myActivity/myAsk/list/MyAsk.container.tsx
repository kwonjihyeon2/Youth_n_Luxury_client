import { useRouter } from 'next/router'
import MyAskUI from './MyAsk.presenter'

export default function MyAsk() {
  const router = useRouter()
  const MoveToWrite = () => {
    router.push('/mypage/myActivity/myAsk/write')
  }
  const MoveToDetail = () => {
    router.push('/mypage/myActivity/myAsk/')
  }
  return <MyAskUI MoveToWrite={MoveToWrite} />
}
