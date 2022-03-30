import { gql } from '@apollo/client'

export const FETCH_PRODUCT = gql`
  query fetchProduct(
    $productId: String!
    $subCategoryId: String!
    $userId: String!
  ) {
    fetchProduct(
      productId: $productId
      subCategoryId: $subCategoryId
      userId: $userId
    ) {
      id
      name
      description
      price
      user {
        id
      }
      #   subCategory {
      #     name
      #     mainCategory {
      #       name
      #     }
      #   }
      #   brand {
      #     name
      #   }
      #   urls
      like
    }
  }
`

export const CREATE_ORDER = gql`
  mutation createOrder(
    $impUid: String!
    $productId: String!
    $status: String!
    $price: Float!
  ) {
    createOrder(
      impUid: $impUid
      productId: $productId
      status: $status
      price: $price
    ) {
      id
      impUid
      price
      status
      product {
        id
        name
      }
    }
  }
`
