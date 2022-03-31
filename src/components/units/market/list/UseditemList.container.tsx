import { useState } from 'react'
import UseditemListUI from './UseditemList.presenter'

export default function UseditemList() {
  const [main, setMain] = useState('')
  const [sub, setSub] = useState('')
  const [brand, setBrand] = useState('')
  const router = useRouter()
  const { data, refetch } = useQuery(FETCH_PRODUCTS)

  const onClickMain = (event) => {
    setMain(event.target.id)
  }
  const onClickSub = (event) => {
    setSub(event.target.id)
  }
  const onClickBrand = (event) => {
    setBrand(event.target.value)
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
    />
  )
}
