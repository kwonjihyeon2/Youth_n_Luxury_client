import { gql } from '@apollo/client'

export const FETCH_PRODUCT = gql`
  query fetchProduct($productId: String!) {
    fetchProduct(productId: $productId) {
      id
      name
      description
      price
      #   user {
      #     id
      #     name
      #   }
      #   subCategory {
      #     name
      #     mainCategory {
      #       name
      #     }
      #   }
      #   brand {
      #     name
      #   }
      urls
      like
    }
  }
`
export const DELETE_PRODUCT = gql`
  mutation deleteProduct($productId: String!) {
    deleteProduct(productId: $productId)
  }
`
