import { gql } from '@apollo/client'

export const FETCH_ALL_PRODUCT = gql`
  query fetchAllProduct {
    fetchAllProduct {
      product_id
      name
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
