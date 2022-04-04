import { gql } from '@apollo/client'

export const FETCH_PRODUCT_LIKE = gql`
  query fetchProductLike {
    fetchProductLike {
      product_id
      name
      description
      price
      view
      like
      urls
    }
  }
`
