import { useQuery } from '@apollo/client'
import { useRouter } from 'next/router'
import { useMoveToPage } from '../../../commons/hooks/useMoveToPage'
import { FETCH_PRODUCTS } from './Main.queries'
import MainUI from './Main.presenter'

export default function Main() {
  const { data } = useQuery(FETCH_PRODUCTS)
  const NewArrival = data?.fetchProducts.slice(0, 9)

  return (
    <>
      <MainUI data={data} NewArrival={NewArrival} />
    </>
  )
}
