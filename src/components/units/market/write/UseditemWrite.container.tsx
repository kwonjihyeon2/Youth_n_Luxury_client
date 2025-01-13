import { useMutation } from '@apollo/client'
import { useRouter } from 'next/router'
import { ChangeEvent, MouseEvent, useRef, useState } from 'react'
import { CREATE_PRODUCT, UPDATE_PRODUCT } from './UseditemWrite.queries'
import UseditemWriteUI from './UseditemWrite.presenter'
import {
  checkFileValidation,
  getDate,
} from '../../../../commons/libraries/utils'
import axios from 'axios'
import { IUseditemWriteProps } from './UseditemWrite.types'

export default function UseditemWrite(props: IUseditemWriteProps) {
  const router = useRouter()
  const fileRef = useRef<HTMLInputElement>(null)
  const [createProduct] = useMutation(CREATE_PRODUCT)
  const [updateProduct] = useMutation(UPDATE_PRODUCT)
  const [isOpen, setIsOpen] = useState(false)
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')
  const [accountNum, setAccountNum] = useState('')
  const [bank, setBank] = useState('')
  const [urls, setUrls] = useState('')
  const [urls2, setUrls2] = useState('')
  const [urls3, setUrls3] = useState('')
  const [urls4, setUrls4] = useState('')
  const [urls5, setUrls5] = useState('')
  const [brand, setBrand] = useState('')
  const [subCategory, setSubCategory] = useState('')
  const [selectMain, setSelectMain] = useState('')

  // 금융결제원 OPEN-API 실거래 계좌 확인 인증
  const onClickAccountConfirm = async () => {
    const temp = String(Math.random())
    const temp2 = temp.slice(10)
    const randomNum = Number(temp2) > 99999999 ? temp2 : '0' + temp2
    const date = new Date()
    const time = getDate(date)

    await axios.post(
      `https://cors-anywhere.herokuapp.com/https://testapi.openbanking.or.kr/v2.0/inquiry/real_name`,
      {
        bank_code_std: `${process.env.NEXT_PUBLIC_BANK}`,
        account_num: `${process.env.NEXT_PUBLIC_ACCOUNT}`,
        account_holder_info_type: '',
        account_holder_info: `${process.env.NEXT_PUBLIC_HOLDER_INFO}`,
        tran_dtime: time,
        bank_tran_id: `${process.env.NEXT_PUBLIC_BANK_ID}${randomNum}`,
      },
      {
        headers: {
          Authorization: `${process.env.NEXT_PUBLIC_TOKEN}`,
        },
      }
    )
    alert('인증성공!')
  }
  const onChangeAccountNum = (event: ChangeEvent<HTMLInputElement>) => {
    setAccountNum(event.target.value)
  }
  const onChangeBank = (event: ChangeEvent<HTMLInputElement>) => {
    setBank(event.target.value)
    if (bank == '국민') {
      setBank(`${process.env.NEXT_PUBLIC_BANK}`)
    }
  }

  const onChangeName = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value)
  }
  const onChangeDescription = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(event.target.value)
  }
  const onChangePrice = (event: ChangeEvent<HTMLInputElement>) => {
    setPrice(event.target.value)
  }
  const onChangeBrandId = (event: MouseEvent<HTMLInputElement>) => {
    if (event.target instanceof HTMLInputElement) setBrand(event.target.value)
  }
  const onChangeSubCategoryId = (event: MouseEvent<HTMLSelectElement>) => {
    if (event.target instanceof HTMLSelectElement)
      setSubCategory(event.target.value)
  }
  const onChangeMainCategory = (event: MouseEvent<HTMLSelectElement>) => {
    if (event.target instanceof HTMLSelectElement)
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
      router.push(`/market/${result.data.createProduct.product_id}`)
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
      data={props.data}
    />
  )
}
