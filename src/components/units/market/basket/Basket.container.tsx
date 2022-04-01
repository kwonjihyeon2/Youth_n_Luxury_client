import { useEffect, useState } from 'react'
import BasketUI from './Basket.presenter'

export default function Basket() {
  const [basket, setBasket] = useState([])
  useEffect(() => {
    let temp = []
    if (localStorage.getItem('basket')) {
      temp = [...JSON.parse(localStorage.getItem('basket'))]
    }
    setBasket(temp)
  }, [])
  return <BasketUI basket={basket} />
}
