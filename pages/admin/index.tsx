import { useAuth } from '../../src/components/commons/hooks/useAuth'
import AdminMain from '../../src/components/units/admin/main/AdminMain.container'

export default function AdminPage() {
  const { isLoading } = useAuth()
  if (isLoading) {
    return <></>
  } else {
    return <AdminMain />
  }
}
