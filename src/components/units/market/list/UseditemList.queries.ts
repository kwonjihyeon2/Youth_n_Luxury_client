import { gql } from '@apollo/client'

export const FETCH_PRODUCTS = gql`
  query fetchProducts {
    fetchProducts {
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
        mainCategory
      }
    }
  }
`
