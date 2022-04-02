import { gql } from '@apollo/client'

export const FETCH_ADMIN_QUERYS = gql`
  query fetchAdminQuerys {
    fetchAdminQuerys {
      id
      contents
      useQuery {
        title
      }
    }
  }
`

export const FETCH_USERS = gql`
  query fetchUsers {
    fetchUsers {
      id
      nickname
      name
      email
    }
  }
`

export const FETCH_ORDERS = gql`
  query fetchOrders {
    fetchOrders {
      id
      impUid
      status
      createdAt
      product {
        price
      }
    }
  }
`

export const CREATE_ORDER = gql`
  mutation createOrder(
    $impUid: String!
    $productId: String!
    $status: String!
  ) {
    createOrder(impUid: $impUid, productId: $productId, status: $status) {
      id
      status
      price
      product {
        name
      }
      user {
        id
        name
      }
    }
  }
`

export const FETCH_PRODUCTS = gql`
  query fetchProducts {
    fetchProducts {
      id
      name
      price
      user {
        name
      }
    }
  }
`

export const DELETE_USER = gql`
  mutation deleteUser {
    deleteUser
  }
`

export const DELETE_PRODUCT = gql`
  mutation deleteProduct($productId: String!) {
    deleteProduct(productId: $productId)
  }
`
