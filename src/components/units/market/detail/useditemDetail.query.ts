import { gql } from '@apollo/client'

export const FETCH_PRODUCT = gql`
  query fetchProduct(
    $productId: String!
    # $subCategoryId: String!
    $userId: String!
  ) {
    fetchProduct(
      productId: $productId
      #   subCategoryId: $subCategoryId
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
export const DELETE_PRODUCT = gql`
  mutation deleteProduct($productId: String!) {
    deleteProduct(productId: $productId)
  }
`
