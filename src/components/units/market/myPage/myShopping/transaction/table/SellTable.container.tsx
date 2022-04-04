import SellTableUI from './SellTable.presenter'
import { gql, useQuery } from '@apollo/client'

const FETCH_SELLER_ORDERS = gql`
  query fetchSellerOrders {
    fetchSellerOrders {
      id
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
  const { data: dataSeller } = useQuery(FETCH_SELLER_ORDERS)
  return <SellTableUI dataSeller={dataSeller} />
}
