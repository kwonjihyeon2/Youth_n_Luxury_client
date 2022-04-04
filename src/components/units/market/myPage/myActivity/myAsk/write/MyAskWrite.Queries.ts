import { gql } from '@apollo/client'

export const CREATE_USER_QUERY = gql`

mutation createUserQuery(){

createUserQuery ($title:title,$content:content,$img:img,$adminCategoryId:adminCategoryId){}


}

`
