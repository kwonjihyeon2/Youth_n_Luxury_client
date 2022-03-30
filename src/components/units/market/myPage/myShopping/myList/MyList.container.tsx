import { useState } from 'react'
import MyListUI from './MyList.presenter'

export default function MyList(props) {
  return <MyListUI isWishList={props.pageNum === 1} />
}
