import { ApolloQueryResult, OperationVariables } from '@apollo/client'
import { ChangeEvent, MouseEvent } from 'react'

export interface IFetchProductBySearch {
  product_id: string
  urls: string
  name: string
  price: number
}

interface ISearchData {
  fetchProductBySearch?: []
}

export interface IOnClickMoveProductDetail {
  id?: string
  product_id: string
}

export interface IRecentView {
  product_id: string
}

export interface IUseditemListUIProps {
  main: string
  sub: string
  brand: string
  onClickMain: (event: MouseEvent<HTMLDivElement>) => void
  onClickSub: (event: MouseEvent<HTMLDivElement>) => void
  onClickBrand: (event: MouseEvent<HTMLSelectElement>) => void
  data: any
  refetch: (
    variables?: Partial<OperationVariables>
  ) => Promise<ApolloQueryResult<any>>
  onClickProduct: (el: IOnClickMoveProductDetail) => () => void
  isClickMain: boolean
  isClickSub: boolean
  onClickSearchBtn: () => Promise<void>
  searchData: ISearchData
  isSearched: boolean
  onChangeSearchInput: (event: ChangeEvent<HTMLInputElement>) => void
}
