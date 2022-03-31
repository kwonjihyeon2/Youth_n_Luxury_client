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
      id
      nickname
      name
      email
      phoneNum
    }
  }
`

export const CREATE_ORDER = gql`
  mutation createOrder(
    $impUid: String!
    $productId: String!
    $status: String!
  ) {
    createOrder(
      impUid: $impUid
      productId: $productId
      status: $status
      price: $price
    ) {
      id
      impUid
      price
      status
      product {
        id
        name
      }
    }
  }
`

export const CREATE_ADDRESS = gql`
  mutation createUserAddr($createUserAddrInput: CreateUserAddrInput!) {
    createUserAddr(createUserAddrInput: $createUserAddrInput) {
      id
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
