import { useApolloClient, useQuery } from '@apollo/client'
import { useContext, useEffect, useState } from 'react'
import { FETCH_USER } from '../../account/login/Login.queries'
import { FETCH_PRODUCT_LIKE } from '../myShopping/myList/WishList.queries'
import WelcomeBoxUI from './WelcomeBox.presenter'

export default function WelcomeBox() {
  const client = useApolloClient()
  const [info, setInfo] = useState({})
  const { data } = useQuery(FETCH_PRODUCT_LIKE)
  const [recentView, setRecentView] = useState([])

  const userInfo = async () => {
    const resultUserInfo = await client.query({
      query: FETCH_USER,
    })
    console.log(resultUserInfo)
  }
  useEffect(() => {
    let temp = []
    if (localStorage.getItem('recentView')) {
      temp = [...JSON.parse(localStorage.getItem('recentView'))]
    }
    const result = userInfo()
    console.log(result)
    setInfo(result)
    setRecentView(temp)
  }, [])
  return <WelcomeBoxUI recentView={recentView} data={data} />
}
