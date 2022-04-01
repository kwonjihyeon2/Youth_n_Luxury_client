import { useQuery } from '@apollo/client'
import { FETCH_LIKE_PRODUCT, FETCH_PRODUCTS } from './Main.queries'
import MainUI from './Main.presenter'

export default function Main() {
  const { data } = useQuery(FETCH_PRODUCTS)
  const NewArrival = data?.fetchProducts.slice(0, 12)

  const { data: like } = useQuery(FETCH_LIKE_PRODUCT)
  console.log(like)

  return (
    <>
      <MainUI data={data} NewArrival={NewArrival} like={like} />
    </>
  )
}
