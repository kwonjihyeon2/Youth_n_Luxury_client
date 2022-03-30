import { gql } from '@apollo/client'

export const FETCH_PRODUCTS = gql`
  query fetchProducts {
    id
    name
    price
    urls
    brand {
      id
      name
    }
    subCategory {
      id
      name
      mainCategory {
        id
        name
      }
    }
  }
`
