import { gql } from '@apollo/client'

export const UPLOAD_FILE = gql`
  mutation uploadFile($files: [Upload!]!) {
    uploadFile(files: $files) {
      urls
      file_id
    }
  }
`
