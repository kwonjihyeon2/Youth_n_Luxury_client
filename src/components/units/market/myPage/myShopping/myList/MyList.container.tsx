import { useQuery } from '@apollo/client'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import MyListUI from './MyList.presenter'
import { FETCH_PRODUCT_LIKE } from './WishList.queries'

export default function MyList(props) {
  const [isSaw, setIsSaw] = useState([])
  const { data } = useQuery(FETCH_PRODUCT_LIKE)

  useEffect(() => {
    let temp = []
    if (localStorage.getItem('recentView')) {
      temp = [...JSON.parse(localStorage.getItem('recentView'))]
    }
    console.log(temp)
    setIsSaw(temp)
  }, [])
  return <MyListUI isWishList={props.isWishList} isSaw={isSaw} data={data} />
}
