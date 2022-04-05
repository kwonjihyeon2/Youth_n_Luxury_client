import { useAuth } from '../../../../src/components/commons/hooks/useAuth'
import UseditemPaymentpage from '../../../../src/components/units/market/payment/useditemPayment.container'

export default function PaymentPage() {
  const { isLoading } = useAuth()
  if (isLoading) {
    return <></>
  } else {
    return <UseditemPaymentpage />
  }
}
