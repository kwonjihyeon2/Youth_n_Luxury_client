import { gql } from '@apollo/client'

export const FETCH_PRODUCT = gql`
  query fetchProduct($productId: String!) {
    fetchProduct(productId: $productId) {
      product_id
      name
      description
      price
      user {
        id
        name
      }
      subCategory {
        subCategory_id
        name
        mainCategory {
          mainCategory_id
          name
        }
      }
      brand {
        name
      }
      urls
      like
    }
  }
`

export const FETCH_LIKE = gql`
  query fetchProductLike {
    fetchProductLike {
      product_id
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
      product_id
      name
      description
      price
      urls
    }
  }
`
export const SELLER_PRODUCT = gql`
  query fetchSellerProduct($userId: String!) {
    fetchSellerProduct(userId: $userId) {
      product_id
      urls
      name
      price
    }
  }
`
export const CREATE_LIKE = gql`
  mutation createLike($productId: String!) {
    createLike(productId: $productId) {
      productLike_id
      islike
    }
  }
`

export const FETCH_ORDER = gql`
  query fetchTransactionAll {
    fetchTransactionAll {
      transaction_id
    }
  }
`
export const CREATE_CHAT = gql`
  mutation createChat($productId: String!) {
    createChat(productId: $productId) {
      event_id
      roomId
      user {
        name
      }
    }
  }
`
