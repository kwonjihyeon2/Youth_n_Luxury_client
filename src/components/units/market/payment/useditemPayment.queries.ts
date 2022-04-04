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
        email
        phoneNum
      }
      subCategory {
        name
        mainCategory {
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

export const FETCH_USER = gql`
  query fetchUser {
    fetchUser {
      user_id
      nickname
      name
      email
      phoneNum
    }
  }
`

export const CREATE_ORDER = gql`
  mutation createtransaction(
    $impuid: String!
    $amount: Float!
    $productid: String!
  ) {
    createtransaction(impuid: $impuid, amount: $amount, productid: $productid) {
      transaction_id
      impUid
      status
      product {
        product_id
        name
        price
      }
    }
  }
`

export const CREATE_ADDRESS = gql`
  mutation createUserAddr($createUserAddrInput: CreateUserAddrInput!) {
    createUserAddr(createUserAddrInput: $createUserAddrInput) {
      userAddr_id
      address
      addressDetail
      zipCode
      user {
        id
        name
        phoneNum
        email
      }
    }
  }
`

export const FETCH_ADDRESS = gql`
  query fetchUserAddr {
    fetchUserAddr {
      id
      address
      addressDetail
      zipCode
      user {
        id
        phoneNum
        name
      }
    }
  }
`
export const FETCH_ADDRS = gql`
  query fetchUserAddrs {
    fetchUserAddrs {
      id
      address
      addressDetail
      zipCode
    }
  }
`
