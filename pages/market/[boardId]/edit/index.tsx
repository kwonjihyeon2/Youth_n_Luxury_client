import { useQuery } from '@apollo/client'
import { useRouter } from 'next/router'
import UseditemWrite from '../../../../src/components/units/market/write/UseditemWrite.container'
import { gql } from '@apollo/client'

const FETCH_PRODUCT = gql`
  query fetchProduct($productId: String!, $userId: String!) {
    fetchProduct(productId: $productId, userId: $userId) {
      id
      name
      description
      price
      urls
      brand {
        name
      }
      subCategory {
        name
        mainCategory {
          name
        }
      }
    }
  }
`

export default function UseditemEditPage() {
  const router = useRouter()

  const { data } = useQuery(FETCH_PRODUCT, {
    variables: { productId: String(router.query.boardId) },
  })
  return <UseditemWrite isEdit={true} data={data} />
}
