import SellTableUI from './SellTable.presenter'
import { gql, useQuery } from '@apollo/client'

const FETCH_MY_SELL_PRODUCT = gql`
  query fetchmysellproduct {
    fetchmysellproduct {
      product_id
      status
      createdAt
      product {
        price
        name
        user {
          name
        }
      }
    }
  }
`
export default function SellTable() {
  const { data: dataSeller } = useQuery(FETCH_MY_SELL_PRODUCT)
  return <SellTableUI dataSeller={dataSeller} />
}
