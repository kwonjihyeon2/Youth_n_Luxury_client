import { gql } from '@apollo/client'

export const FETCH_USER = gql`
  query fetchUser {
    fetchUser {
      id
      role
      nickname
      name
      email
    }
  }
`
export const UPDATE_USER = gql`
  mutation updateUser($updateUserInfo: UpdateUserInfo!) {
    updateUser(updateUserInfo: $updateUserInfo) {
      user_id
      name
      email
      phoneNum
    }
  }
`
