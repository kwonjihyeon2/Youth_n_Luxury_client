import { gql } from '@apollo/client'

export const FETCH_ADMIN_QUERYS = gql`
  query fetchAdminQuerys {
    fetchAdminQuerys {
      id
      contents
      userQuery {
        title
        user {
          name
        }
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
      createdAt
      impUid
      product {
        price
        name
        user {
          name
        }
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
      impUid
    }
  }
`

// export const FETCH_PRODUCTS = gql`
//   query fetchProducts {
//     fetchProducts {
//       id
//       name
//       price
//       user {
//         name
//       }
//     }
//   }
// `
export const FETCH_ALL_PRODUCT = gql`
  query fetchAllProduct {
    fetchAllProduct {
      id
      name
      price
      urls
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
