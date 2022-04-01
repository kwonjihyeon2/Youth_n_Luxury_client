import { gql } from '@apollo/client'

export const CREATE_REVIEW = gql`
  mutation createReview(
    $content: String!
    $img: String!
    $productId: String!
    $ratings: Float!
  ) {
    createReview(
      content: $content
      productId: $productId
      ratings: $ratings
      img: $img
    ) {
      id
      title
      content
      img
      user {
        id
        name
      }
      product {
        id
        name
      }
    }
  }
`

export const FETCH_PRODUCT = gql`
  query fetchProduct($productId: String!, $userId: String!) {
    fetchProduct(productId: $productId, userId: $userId) {
      id
      name
      description
      price
      user {
        id
        name
      }
    }
  }
`
