import { useQuery } from '@apollo/client'
import { useEffect, useState } from 'react'
import { FETCH_PRODUCT_LIKE } from '../myShopping/myList/WishList.queries'
import WelcomeBoxUI from './WelcomeBox.presenter'

export default function WelcomeBox() {
  const { data } = useQuery(FETCH_PRODUCT_LIKE)
  const [recentView, setRecentView] = useState([])
  useEffect(() => {
    let temp = []
    if (localStorage.getItem('recentView')) {
      temp = [...JSON.parse(localStorage.getItem('recentView'))]
    }
    setRecentView(temp)
  }, [])
  return <WelcomeBoxUI recentView={recentView} data={data} />
}
