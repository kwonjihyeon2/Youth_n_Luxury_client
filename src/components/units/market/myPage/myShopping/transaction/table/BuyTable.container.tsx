import BuyTableUI from './BuyTable.presenter'
import { gql, useQuery } from '@apollo/client'

const FETCH_BUYER_ORDERS = gql`
  query fetchBuyerOrders {
    fetchBuyerOrders {
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

export default function BuyTable() {
  const { data: dataBuyer } = useQuery(FETCH_BUYER_ORDERS)

  return <BuyTableUI dataBuyer={dataBuyer} />
}
