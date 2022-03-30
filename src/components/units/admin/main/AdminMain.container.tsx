import { useQuery } from '@apollo/client'
import { useRouter } from 'next/router'
import AdminMainUI from './AdminMain.presenter'

export default function AdminMain() {
  const router = useRouter()
  const { data, refetch } = useQuery()
  return <AdminMainUI />
}
