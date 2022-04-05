import { gql } from '@apollo/client'

export const FIND_ALL_USER_QUERIES = gql`
  query findAllUserQuries {
    findAllUserQuries {
      title
      img
      contents
      adminQuery_id
      adminCategory {
        name
      }
      user {
        name
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

// export const FETCH_IMPUID_WITH_PRODUCTID_USERID = gql`
//   query fetchimpuidwithproductiduserid($productId: String!) {
//     fetchimpuidwithproductiduserid(productId: $productId) {
//       transaction_id
//       impUid
//       status
//     }
//   }
// `

export const FETCH_TRANSACTION_ALL = gql`
  query fetchTransactionAll {
    fetchTransactionAll {
      transaction_id
      impUid
      status
      createdAt
      product {
        urls
        name
        price
      }
      user {
        name
      }
    }
  }
`

export const UPDATE_TRANSACTION = gql`
  mutation updatetransaction($impuid: String!, $statusCode: String!) {
    updatetransaction(impuid: $impuid, statusCode: $statusCode) {
      transaction_id
      impUid
      status
    }
  }
`
export const FETCH_ALL_PRODUCT = gql`
  query fetchAllProduct {
    fetchAllProduct {
      product_id
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
