import { gql } from '@apollo/client'

export const FETCH_USER_QUERY = gql`
  query fetchUserQuery($adminQueryId: String!, $adminCategoryId: String!) {
    fetchUserQuery(
      adminQueryId: $adminQueryId
      adminCategoryId: $adminCategoryId
    ) {
      adminQuery_id
      title
      contents
      user {
        name
      }
      adminCategory {
        name
      }
    }
  }
`
