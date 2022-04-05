import { useEffect, useState } from 'react'
import UseditemListUI from './UseditemList.presenter'
import { useQuery } from '@apollo/client'
import { useRouter } from 'next/router'
import {
  FETCH_ALL_PRODUCT,
  FETCH_PRODUCTS,
  FETCH_PRODUCT_BY_SEARCH,
} from './UseditemList.queries'

import _ from 'lodash'

export default function UseditemList() {
  const [main, setMain] = useState('')
  const [sub, setSub] = useState('')
  const [brand, setBrand] = useState('')
  const [isClickMain, setIsClickMain] = useState(false)
  const [isClickSub, setIsClickSub] = useState(false)
  const [isSearched, setIsSearched] = useState(false)
  const router = useRouter()
  const { data, refetch } = useQuery(FETCH_ALL_PRODUCT)
  const { data: search, refetch: searchRefetch } = useQuery(
    FETCH_PRODUCT_BY_SEARCH
  )
  const [searchInput, setSearchInput] = useState('')
  const [searchData, setSearchData] = useState({})
  console.log(searchInput)
  const onChangeSearchInput = (event) => {
    setSearchInput(event.target.value)
    console.log('이벤트타겟점벨류는')
    console.log(event.target.value)
  }
  const onClickSearchBtn = async () => {
    try {
      console.log('검색시작')
      console.log(searchInput)
      const result = await searchRefetch({ name: searchInput })
      setIsSearched(true)
      setSearchData(result.data)
      console.log('검색결과는')
      console.log(result.data)
    } catch (err) {
      console.log('검색에러는')
      console.log(err.message)
    }
  }
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
      onClickSearchBtn={onClickSearchBtn}
      searchData={searchData}
      isSearched={isSearched}
      onChangeSearchInput={onChangeSearchInput}
    />
  )
}
