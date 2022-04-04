import { gql } from '@apollo/client'

export const CREATE_USER = gql`
  mutation createUser(
    $email: String!
    $password: String!
    $nickname: String!
    $name: String!
    $phoneNum: String!
  ) {
    createUser(
      email: $email
      password: $password
      nickname: $nickname
      name: $name
      phoneNum: $phoneNum
    ) {
      id
      nickname
      name
      email
      profilePic
      coverPic
      phoneNum
    }
  }
`
export const TOKEN_MAKER = gql`
  mutation tokenMaker($phoneNum: String!) {
    tokenMaker(phoneNum: $phoneNum)
  }
`

export const TOKEN_VALIDATE = gql`
  mutation tokenValidate($phoneNum: String!, $token: String!) {
    tokenValidate(phoneNum: $phoneNum, token: $token)
  }
`
