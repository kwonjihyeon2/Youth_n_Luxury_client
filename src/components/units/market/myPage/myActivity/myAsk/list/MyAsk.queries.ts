import { gql } from '@apollo/client'

export const FETCH_ADMIN_QUERYS = gql`
  mutation fetchAdminQuerys {
    fetchAdminQuerys {
      id
    }
  }
`
