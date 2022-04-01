import { useRouter } from 'next/router'
import JoinUI from './Join.presenter'

export default function Join() {
  const router = useRouter()
  return <JoinUI router={router} />
}
