import { gql } from '@apollo/client'

export const CREATE_PRODUCT = gql`
  mutation createProduct($createProductInput: CreateProductInput!) {
    createProduct(createProductInput: $createProductInput) {
      product_id
      name
      description
      price
      view
      like
      urls
      brand {
        name
      }
      user {
        user_id
        nickname
        name
        email
        profilePic
        phoneNum
        ratingAvg
        accountOwner
        accountNumber
        bank
        income
      }
      subCategory {
        name
        mainCategory {
          name
        }
      }
    }
  }
`

export const UPDATE_PRODUCT = gql`
  mutation updateProduct(
    $productId: String!
    $updateProductInput: UpdateProductInput!
  ) {
    updateProduct(
      productId: $productId
      updateProductInput: $updateProductInput
    ) {
      product_id
      name
      description
      price
      view
      like
      urls
      brand {
        name
      }
      subCategory {
        name
        mainCategory {
          name
        }
      }
      user {
        nickname
        name
        email
        profilePic
        phoneNum
        ratingAvg
        accountOwner
        accountNumber
        bank
        income
      }
    }
  }
`
