import BuyTableUI from './BuyTable.presenter'
import { gql, useQuery } from '@apollo/client'

const FETCH_MY_BUY_PRODUCT = gql`
  query fetchmybuyproduct {
    fetchmybuyproduct {
      transaction_id
      status
      createdAt
      product {
        price
        name
        urls
        user {
          name
        }
      }
    }
  }
`

export default function BuyTable() {
  const { data: dataBuyer } = useQuery(FETCH_MY_BUY_PRODUCT)

  return <BuyTableUI dataBuyer={dataBuyer} />
}
