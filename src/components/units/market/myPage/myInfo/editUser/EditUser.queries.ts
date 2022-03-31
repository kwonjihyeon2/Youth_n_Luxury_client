import { gql } from '@apollo/client'

export const FETCH_USER = gql`
  query fetchUser {
    fetchUser {
      id
      role
      nickname
      name
    }
  }
`