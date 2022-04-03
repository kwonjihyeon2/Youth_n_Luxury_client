import { gql } from '@apollo/client'

export const FETCH_PRODUCT_LIKE = gql`
  query fetchProductLike {
    fetchProductLike {
      id
      name
      description
      price
      view
      like
      urls
    }
  }
`
