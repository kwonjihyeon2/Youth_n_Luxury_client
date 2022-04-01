import { gql } from '@apollo/client'

export const FETCH_PRODUCT = gql`
  query fetchProduct($productId: String!) {
    fetchProduct(productId: $productId) {
      id
      name
      description
      price
      user {
        id
        name
      }
      subCategory {
        id
        name
        mainCategory {
          id
          name
        }
      }
      brand {
        name
      }
      urls
      like
      # product {
      #   name
      #   user {
      #     name
      #   }
      # }
    }
  }
`
export const DELETE_PRODUCT = gql`
  mutation deleteProduct($productId: String!) {
    deleteProduct(productId: $productId)
  }
`

export const RELATIVE_PRODUCT = gql`
  query fetchProductRelateMainCategory($name: String!) {
    fetchProductRelateMainCategory(name: $name) {
      id
      name
      description
      price
    }
  }
`
export const SELLER_PRODUCT = gql`
  query fetchSellerProduct($userId: String!) {
    fetchSellerProduct(userId: $userId) {
      id
      urls
      name
      price
    }
  }
`
export const CREATE_LIKE = gql`
  mutation createLike($productId: String!) {
    createLike(productId: $productId) {
      id
      islike
    }
  }
`
