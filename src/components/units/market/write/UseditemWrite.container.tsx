import { useMutation } from '@apollo/client'
import { useRouter } from 'next/router'
import { ChangeEvent, useEffect, useState } from 'react'
import { CREATE_PRODUCT, UPDATE_PRODUCT } from './UseditemWrite.queries'
import UseditemWriteUI from './UseditemWrite.presenter'
import { checkFileValidation } from '../../../../commons/libraries/utils'

export default function UseditemWrite(props) {
  const router = useRouter()

  const [createProduct] = useMutation(CREATE_PRODUCT)
  const [updateProduct] = useMutation(UPDATE_PRODUCT)

  const [isOpen, setIsOpen] = useState(false)
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')
  const [urls, setUrls] = useState('test')
  const [brand, setBrand] = useState('')
  const [subCategory, setSubCategory] = useState('')
  const [selectMain, setSelectMain] = useState('')

  // const onChangeUrls = async (event: ChangeEvent<HTMLInputElement>) => {
  //   const imageUrls = []

  //   for (let i = 0; i < event.target.files?.length; i++) {
  //     const file = event.target.files?.[i]
  //     const isVaild = checkFileValidation(file)
  //     if (!isVaild) {
  //       return
  //     }
  //     try {
  //       const ImgResult = await createProduct({ variables: { urls: file } })
  //       imageUrls.push(ImgResult.data?.createProduct?.urls)
  //     } catch (error) {
  //       alert(error.message)
  //     }
  //   }
  //   setUrls([...urls, ...imageUrls])
  // }
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

  const onClickSubmit = async () => {
    try {
      const result = await createProduct({
        variables: {
          createProductInput: {
            name,
            description,
            price: Number(price),
            brand,
            // urls,
            subCategory,
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
    />
  )
}
