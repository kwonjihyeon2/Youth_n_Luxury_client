import { gql } from '@apollo/client'

export const FETCH_ADMIN_QUERYS = gql`
  mutation fetchAdminQuerys {
    fetchAdminQuerys {
      admin_id
    }
  }
`
export const FETCH_USER_QUERYS = gql`
  query fetchUserQuerys($adminCategoryId: String!) {
    fetchUserQuerys(adminCategoryId: $adminCategoryId) {
      adminQuery_id
      title
      contents
      adminCategory {
        adminCategory_id
        name
      }
    }
  }
`
