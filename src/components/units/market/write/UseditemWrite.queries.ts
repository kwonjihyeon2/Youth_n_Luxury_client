
Query

fetchUseditem(useditemId:ID!): Useditem!

type Useditem {
    id:ID!
    userName: String! (회원가입한 닉네임)
    title: String!
    contents: String! (상품판매내용)
    images: [String!]
    mainCategory: String!
    subCategory: String!
    brand: String!
    price: Int!
    createdAt: DateTime!
} 

Mutation

createUseditem(createUseditemInput: CreateUseditemInput!): Useditem!

type Useditem {
    id: ID!
    title: String!
    contents: String!
    images: [String!]
    mainCategory: String!
    subCategory: String!
    brand: String!
    price: Int!
    createdAt: DateTime!
    user: User
}

type User {
    id: ID!
    userName: String!
    userImage: String (프로필이미지)
}

type CreateUseditemInput {
    title: String!
    contents: String!
    images: [String!]
    mainCategory: String!
    subCategory: String!
    brand: String!
    price: Int!
}

updateUseditem(updateUseditemInput: UpdateUseditemInput! useditemId: ID!): Useditem!

type Useditem {
    id:ID!
    title: String!
    contents: String!
    images: [String!]
    mainCategory: String!
    subCategory: String!
    brand: String!
    price: Int!
}

type UpdateUseditemInput {
    title: String
    contents: String
    images: [String!]
    mainCategory: String
    subCategory: String
    brand: String
    price: Int!
}

deleteUseditem(useditemId: ID!): ID!