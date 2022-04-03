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
    }
  }
`

export const FETCH_LIKE = gql`
  query fetchProductLike {
    fetchProductLike {
      id
      name
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
      urls
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

export const FETCH_ORDER = gql`
  query fetchBuyerOrders {
    fetchBuyerOrders {
      id
    }
  }
`

export const CREATE_CHAT = gql`
  mutation createChat($productId: String!) {
    createChat(productId: $productId) {
      id
      roomId
      user {
        name
      }
    }
  }
`
