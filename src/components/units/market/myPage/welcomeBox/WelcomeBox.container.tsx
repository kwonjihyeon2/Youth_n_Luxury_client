import { useQuery } from '@apollo/client'
import { useContext, useEffect, useState } from 'react'
import { FETCH_USER } from '../../account/login/Login.queries'
import { FETCH_PRODUCT_LIKE } from '../myShopping/myList/WishList.queries'
import WelcomeBoxUI from './WelcomeBox.presenter'

export default function WelcomeBox() {
  const [info, setInfo] = useState({})
  const { data } = useQuery(FETCH_PRODUCT_LIKE)
  const [recentView, setRecentView] = useState([])
  const { data: userData } = useQuery(FETCH_USER)

  useEffect(() => {
    let temp = []
    if (localStorage.getItem('recentView')) {
      temp = [...JSON.parse(localStorage.getItem('recentView'))]
    }
    console.log(temp)
    setRecentView(temp)
  }, [])
  return (
    <WelcomeBoxUI recentView={recentView} data={data} userData={userData} />
  )
}
