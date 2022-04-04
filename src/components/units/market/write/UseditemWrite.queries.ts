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
        brand_id
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
