import { useEffect, useState } from 'react'
import MyListUI from './MyList.presenter'

export default function MyList(props) {
  const [isSaw, setIsSaw] = useState([])

  useEffect(() => {
    let temp = []
    if (localStorage.getItem('recentView')) {
      temp = [...JSON.parse(localStorage.getItem('recentView'))]
    }
    console.log(temp)
    setIsSaw(temp)
  }, [])
  return <MyListUI isWishList={props.pageNum === 1} isSaw={isSaw} />
}
