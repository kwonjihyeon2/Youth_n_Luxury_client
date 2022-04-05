import { useEffect, useState } from 'react'
import UseditemListUI from './UseditemList.presenter'
import { useQuery } from '@apollo/client'
import { useRouter } from 'next/router'
import { FETCH_ALL_PRODUCT, FETCH_PRODUCTS } from './UseditemList.queries'

import _ from 'lodash'

export default function UseditemList() {
  const [main, setMain] = useState('')
  const [sub, setSub] = useState('')
  const [brand, setBrand] = useState('')
  const [isClickMain, setIsClickMain] = useState(false)
  const [isClickSub, setIsClickSub] = useState(false)

  const router = useRouter()
  const { data, refetch } = useQuery(FETCH_ALL_PRODUCT)

  const onClickMain = (event) => {
    setMain(event.target.id)
    setIsClickMain((prev) => !prev)
  }
  const onClickSub = (event) => {
    setSub(event.target.id)
    setIsClickSub((prev) => !prev)
  }
  const onClickBrand = (event) => {
    setBrand(event.target.value)
  }

  const onClickMoveProductDetail = (el) => (event) => {
    let isExist = false
    const recentView = JSON.parse(localStorage.getItem('recentView') || '[]') // [{_id: 1, writer: 영희}, {_id: 2, writer: 훈이}, {_id: 3, writer: 철수}]
    // const temp = baskets.filter((basketEl) => basketEl._id === el._id);

    recentView.forEach((recentViewEl, i) => {
      if (recentViewEl.product_id === el.id) {
        isExist = true
        return false
      }
    })
    if (!isExist) {
      recentView.push({ ...el })
      localStorage.setItem('recentView', JSON.stringify(recentView))
    }
    router.push(`/market/${event.target.id}`)
  }
  // const onClickSearch = () => {}

  return (
    <UseditemListUI
      main={main}
      sub={sub}
      brand={brand}
      onClickMain={onClickMain}
      onClickSub={onClickSub}
      onClickBrand={onClickBrand}
      data={data}
      refetch={refetch}
      onClickProduct={onClickMoveProductDetail}
      isClickMain={isClickMain}
      isClickSub={isClickSub}
      // onClickSearch={onClickSearch}
    />
  )
}
