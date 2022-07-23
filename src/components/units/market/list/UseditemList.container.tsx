import { ChangeEvent, MouseEvent, useState } from 'react'
import UseditemListUI from './UseditemList.presenter'
import { useQuery } from '@apollo/client'
import { useRouter } from 'next/router'
import {
  FETCH_ALL_PRODUCT,
  FETCH_PRODUCT_BY_SEARCH,
} from './UseditemList.queries'

import _ from 'lodash'
import { IOnClickMoveProductDetail, IRecentView } from './UseditemList.types'

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
  const onChangeSearchInput = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchInput(event.target.value)
  }
  const onClickSearchBtn = async () => {
    try {
      console.log(searchInput)
      const result = await searchRefetch({ name: searchInput })
      setIsSearched(true)
      setSearchData(result.data)

      console.log(result.data)
    } catch (err) {
      console.log(err.message)
    }
  }
  const onClickMain = (event: MouseEvent<HTMLDivElement>) => {
    if (event.target instanceof HTMLDivElement) setMain(event.target.id)
    setIsClickMain((prev) => !prev)
  }
  const onClickSub = (event: MouseEvent<HTMLDivElement>) => {
    if (event.target instanceof HTMLDivElement) setSub(event.target.id)
    setIsClickSub((prev) => !prev)
  }
  const onClickBrand = (event: MouseEvent<HTMLSelectElement>) => {
    if (event.target instanceof HTMLSelectElement) setBrand(event.target.value)
  }

  const onClickMoveProductDetail = (el: IOnClickMoveProductDetail) => () => {
    let isExist = false
    const recentView = JSON.parse(localStorage.getItem('recentView') || '[]')

    recentView.forEach((recentViewEl: IRecentView) => {
      if (recentViewEl.product_id === el.id) {
        isExist = true
        return false
      }
    })
    if (!isExist) {
      recentView.push({ ...el })
      localStorage.setItem('recentView', JSON.stringify(recentView))
    }
    router.push(`/market/${el.product_id}`)
  }

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
