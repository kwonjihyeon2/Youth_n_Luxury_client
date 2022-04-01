import { GraphQLClient, gql } from 'graphql-request'

const RESTORE_ACCESS_TOKEN = gql`
  mutation restoreAccessToken {
    restoreAccessToken
  }
`

export async function getAccessToken() {
  try {
    const graphqlClient = new GraphQLClient(
      'http://mybackend.project5-sos.shop:3000/graphql'
      // { credentials: 'include' }
    )
    const result = await graphqlClient.request(RESTORE_ACCESS_TOKEN)
    console.log(result)

    const newAccessToken = result.restoreAccessToken
    return newAccessToken
  } catch (error) {
    console.log(error.message)
  }
}
