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
