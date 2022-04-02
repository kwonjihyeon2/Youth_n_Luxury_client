import { gql } from '@apollo/client'

export const FETCH_PRODUCTS = gql`
  query fetchProducts {
    fetchProducts {
      id
      name
      description
      price
      urls
    }
  }
`

export const FETCH_LIKE_PRODUCT = gql`
  query fetchProductLike {
    fetchProductLike {
      id
      name
      description
      price
      urls
    }
  }
`
