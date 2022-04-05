import { gql } from '@apollo/client'

export const CREATE_USER_QUERY = gql`
  mutation createUserQuery(
    $title: String!
    $contents: String!
    $img: String!
    $adminCategoryId: String!
  ) {
    createUserQuery(
      title: $title
      contents: $contents
      img: $img
      adminCategoryId: $adminCategoryId
    ) {
      title
    }
  }
`
