import { useState } from 'react'
import UseditemWriteUI from './UseditemWrite.presenter'

export default function UseditemWrite() {
  const [selectMain, SetSelectMain] = useState('')
  const [selectSub, SetSelectSub] = useState('')
  const [brand, SetBrand] = useState('')

  const onChangeSelectMain = (event) => {
    SetSelectMain(event.target.value)
  }
  const onChangeSelectSub = (event) => {
    SetSelectSub(event.target.value)
    console.log(event.target.value)
  }
  const onClickBrand = (event) => {
    SetBrand(event.target.value)
    console.log(brand)
  }
  return (
    <UseditemWriteUI
      onChangeSelectMain={onChangeSelectMain}
      onChangeSelectSub={onChangeSelectSub}
      onClickBrand={onClickBrand}
      selectMain={selectMain}
      selectSub={selectSub}
      brand={brand}
    />
  )
}
