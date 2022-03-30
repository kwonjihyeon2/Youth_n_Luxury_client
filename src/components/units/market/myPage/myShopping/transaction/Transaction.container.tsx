import { useState } from 'react'
import TransactionUI from './Transaction.presenter'

export default function Transaction() {
  const [isBuy, setIsBuy] = useState(true)
  const onClickBuy = (transaction) => () => {
    setIsBuy(transaction)
  }

  return <TransactionUI isBuy={isBuy} onClickBuy={onClickBuy} />
}
