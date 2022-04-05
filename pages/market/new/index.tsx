import { useAuth } from '../../../src/components/commons/hooks/useAuth'
import UseditemWrite from '../../../src/components/units/market/write/UseditemWrite.container'

export default function UseditemNewPage() {
  const { isLoading } = useAuth()

  if (isLoading) {
    return <></>
  } else {
    return <UseditemWrite isEdit={false} />
  }
}
