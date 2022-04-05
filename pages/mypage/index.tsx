import { useAuth } from '../../src/components/commons/hooks/useAuth'
import Transaction from '../../src/components/units/market/myPage/myShopping/transaction/Transaction.container'

export default function MyPage() {
  const { isLoading } = useAuth()
  if (isLoading) {
    return <></>
  } else {
    return <Transaction />
  }
}
