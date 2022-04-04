import { gql } from '@apollo/client'

export const FETCH_ADMIN_QUERYS = gql`
  mutation fetchAdminQuerys {
    fetchAdminQuerys {
      id
    }
  }
`
export const FETCH_USER_QUERYS = gql`
  query fetchUserQuerys($adminCategoryId: String!) {
    fetchUserQuerys(adminCategoryId: $adminCategoryId) {
      id
      title
      contents
      adminCategory {
        id
        name
      }
    }
  }
`
