import { useMutation } from '@apollo/client'
import { useRouter } from 'next/router'
import { ChangeEvent, useEffect, useRef, useState } from 'react'
import {
  CREATE_PRODUCT,
  UPDATE_PRODUCT,
  UPLOAD_FILE,
} from './UseditemWrite.queries'
import UseditemWriteUI from './UseditemWrite.presenter'
import { checkFileValidation } from '../../../../commons/libraries/utils'

export default function UseditemWrite(props) {
  const router = useRouter()

  const fileRef = useRef<HTMLInputElement>(null)

  const [createProduct] = useMutation(CREATE_PRODUCT)
  const [updateProduct] = useMutation(UPDATE_PRODUCT)
  const [uploadFile] = useMutation(UPLOAD_FILE)

  const [isOpen, setIsOpen] = useState(false)
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')
  const [urls, setUrls] = useState([])
  const [brand, setBrand] = useState('')
  const [subCategory, setSubCategory] = useState('')
  const [selectMain, setSelectMain] = useState('')

  const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const imageUrl = []

    for (let i = 0; i < event.target.files?.length; i++) {
      const file = []
      file.push(event.target.files?.[i])

      try {
        const result = await uploadFile({ variables: { files: file } })

        imageUrl.push(result.data?.uploadFile?.url)
      } catch (error) {
        alert(error.message)
      }
    }
    setUrls([...urls, ...imageUrl])
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
            urls,
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
      onChangeFile={onChangeFile}
      urls={urls}
    />
  )
}
