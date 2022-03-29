import { gql } from '@apollo/client'

export const CREATE_PRODUCT = gql`
  mutation createProduct($createProductInput: CreateProductInput!) {
    createProduct(createProductInput: $createProductInput) {
      id
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
        id
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
      id
      name
      description
      price
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
        id
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
