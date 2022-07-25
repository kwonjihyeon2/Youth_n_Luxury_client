import { ApolloQueryResult, OperationVariables } from '@apollo/client'
import { ChangeEvent, MouseEventHandler } from 'react'

interface IUserQueryData_ {
  name: string
}

interface IFindAllUserQuries {
  findAllUserQuries: []
}

interface IDataUsers {
  fetchUsers: []
}
interface IDataTrans {
  fetchTransactionAll: []
}
interface IDataProducts {
  fetchAllProduct: []
}

interface IFetchTransactionAllData {
  name: string
  price: string
  urls: string
}
interface IFetchAllProductData {
  name: string
}

export interface IUserQueryData {
  contents: string
  title: string
  user: IUserQueryData_
  adminCategory: IUserQueryData_
  adminQuery_id: any
}
export interface IDataUsersData {
  name: string
  email: string
}

export interface IFetchAllProduct {
  name: string
  user: IFetchAllProductData
  urls: string
  price: number
  product_id: string
}

export interface IFetchTransactionAll {
  createdAt: string
  product: IFetchTransactionAllData
  user: IFetchTransactionAllData
  impUid: string
}

export interface IAdminMainUIProps {
  onClickUserQuery: (event: MouseEventHandler<HTMLDivElement>) => () => void
  dataQueries: IFindAllUserQuries
  dataUsers: IDataUsers
  dataTrans: IDataTrans
  dataProducts: IDataProducts
  refetchUsers: (
    variables?: Partial<OperationVariables>
  ) => Promise<ApolloQueryResult<any>>
  refetchProducts: (
    variables?: Partial<OperationVariables>
  ) => Promise<ApolloQueryResult<any>>
  onClickLogout: () => void
  onClickDeleteProduct: (id: string) => () => Promise<void>
  onClickDeleteUser: () => Promise<void>
  onChangeStatus: (event: ChangeEvent<HTMLSelectElement>) => void
  onClickStatus: (uid: string) => () => Promise<void>
}
