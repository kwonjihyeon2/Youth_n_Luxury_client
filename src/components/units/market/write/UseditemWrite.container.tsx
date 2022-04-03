import { useMutation } from '@apollo/client'
import { useRouter } from 'next/router'
import { ChangeEvent, useEffect, useRef, useState } from 'react'
import { CREATE_PRODUCT, UPDATE_PRODUCT } from './UseditemWrite.queries'
import UseditemWriteUI from './UseditemWrite.presenter'
import {
  checkFileValidation,
  getDate,
} from '../../../../commons/libraries/utils'
import axios from 'axios'

export default function UseditemWrite(props) {
  const router = useRouter()
  // const axios = require('axios')
  const fileRef = useRef<HTMLInputElement>(null)
  const [createProduct] = useMutation(CREATE_PRODUCT)
  const [updateProduct] = useMutation(UPDATE_PRODUCT)

  const [isOpen, setIsOpen] = useState(false)
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')
  const [accountNum, setAccountNum] = useState('')
  const [bank, setBank] = useState('')
  // const [urls, setUrls] = useState(['', '', '', '', '', '', '', '', '', ''])
  const [urls, setUrls] = useState('')
  const [urls2, setUrls2] = useState('')
  const [urls3, setUrls3] = useState('')
  const [urls4, setUrls4] = useState('')
  const [urls5, setUrls5] = useState('')
  const [brand, setBrand] = useState('')
  const [subCategory, setSubCategory] = useState('')
  const [selectMain, setSelectMain] = useState('')

  const onClickAccountConfirm = async () => {
    const temp = String(Math.random())
    const temp2 = temp.slice(10)
    const randomNum = Number(temp2) > 99999999 ? temp2 : '0' + temp2
    const date = new Date()
    const time = getDate(date)
    console.log(time)
    console.log(randomNum, typeof randomNum)
    const result = await axios.post(
      `https://cors-anywhere.herokuapp.com/https://testapi.openbanking.or.kr/v2.0/inquiry/real_name`,
      {
        bank_code_std: '004',
        account_num: '71790201314675',
        account_holder_info_type: '',
        account_holder_info: '000426',
        tran_dtime: time,
        bank_tran_id: `M202200592U${randomNum}`,
      },
      {
        headers: {
          Authorization:
            'BearereyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJNMjAyMjAwNTkyIiwic2NvcGUiOlsib29iIl0sImlzcyI6Imh0dHBzOi8vd3d3Lm9wZW5iYW5raW5nLm9yLmtyIiwiZXhwIjoxNjU2NDI5ODY2LCJqdGkiOiJjNjFmZjMyYi0yNTQyLTQ5MWItOGUzYS02ZGY1YTE1ZjE5Y2UifQ.A1t724j6vIGPLO7I_TPvEZTev_ds4DSxFjfaThe7uXc',
        },
      }
    )
    console.log(result)
    alert('인증성공!')
  }
  const onChangeAccountNum = (event) => {
    setAccountNum(event.target.value)
  }
  const onChangeBank = (event) => {
    setBank(event.target.value)
    if (bank == '국민') {
      setBank('004')
    }
  }

  const onChangeName = (event) => {
    setName(event.target.value)
  }
  const onChangeDescription = (event) => {
    setDescription(event.target.value)
  }
  const onChangePrice = (event) => {
    setPrice(event.target.value)
  }
  const onChangeBrandId = (event) => {
    setBrand(event.target.value)
  }
  const onChangeSubCategoryId = (event) => {
    setSubCategory(event.target.value)
  }
  const onChangeMainCategory = (event) => {
    setSelectMain(event.target.value)
  }

  const onClickImage = () => {
    fileRef.current?.click()
  }
  const onClickSubmit = async () => {
    try {
      const result = await createProduct({
        variables: {
          createProductInput: {
            name,
            description,
            price: Number(price),
            brandName: brand,
            urls: urls + urls2 + urls3 + urls4 + urls5,
            subCategoryName: subCategory,
          },
        },
      })
      router.push(`/market/${result.data.createProduct.id}`)
    } catch (error) {
      alert(error.message)
    }
  }
  const onClickUpdate = async () => {
    const UpdateProductInput = { name, description, price, brand, subCategory }
    if (name) UpdateProductInput.name = name
    if (description) UpdateProductInput.description = description
    if (price) UpdateProductInput.price = price
    if (brand) UpdateProductInput.brand = brand
    if (subCategory) UpdateProductInput.subCategory = subCategory
    try {
      await updateProduct({
        variables: {
          productId: router.query.boardId,
          updateProductInput: UpdateProductInput,
        },
      }),
        router.push(`/market/${router.query.boardId}`)
    } catch (error) {
      alert(error.message)
    }
    console.log(bank)
  }
  return (
    <UseditemWriteUI
      onChangeSubCategoryId={onChangeSubCategoryId}
      onChangeBrandId={onChangeBrandId}
      onChangePrice={onChangePrice}
      onChangeName={onChangeName}
      onChangeDescription={onChangeDescription}
      onClickSubmit={onClickSubmit}
      onClickUpdate={onClickUpdate}
      isEdit={props.isEdit}
      data={props.data}
      isOpen={isOpen}
      description={description}
      selectMain={selectMain}
      onChangeMainCategory={onChangeMainCategory}
      fileRef={fileRef}
      onClickImage={onClickImage}
      urls={urls}
      onClickAccountConfirm={onClickAccountConfirm}
      urls2={urls2}
      urls3={urls3}
      urls4={urls4}
      urls5={urls5}
      setUrls={setUrls}
      setUrls2={setUrls2}
      setUrls3={setUrls3}
      setUrls4={setUrls4}
      setUrls5={setUrls5}
      accountNum={accountNum}
      bank={bank}
      onChangeAccountNum={onChangeAccountNum}
      onChangeBank={onChangeBank}
    />
  )
}
