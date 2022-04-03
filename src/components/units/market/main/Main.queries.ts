import { gql } from '@apollo/client'

export const FETCH_ALL_PRODUCT = gql`
  query fetchAllProduct {
    fetchAllProduct {
      id
      name
      description
      price
      urls
      like
    }
  }
`
