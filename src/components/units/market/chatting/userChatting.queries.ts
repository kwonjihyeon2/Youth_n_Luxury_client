import { gql } from '@apollo/client'

export const FETCH_CHAT = gql`
  query fetchChat($roomId: String!) {
    fetchChat(roomId: $roomId) {
      id
      roomId
      chatLog
      user {
        name
      }
      product {
        name
        user {
          name
        }
      }
    }
  }
`

export const UPDATE_CHAT = gql`
  mutation updateChat($roomId: String!, $updateChat: String!) {
    updateChat(roomId: $roomId, updateChat: $updateChat) {
      id
      roomId
      chatLog
      user {
        name
        profilePic
      }
      product {
        name
        user {
          name
          profilePic
        }
      }
    }
  }
`

export const JOIN_SELLER = gql`
  query joinSeller {
    joinSeller {
      id
      roomId
      chatLog
      user {
        name
      }
      product {
        name
        user {
          name
        }
      }
    }
  }
`
