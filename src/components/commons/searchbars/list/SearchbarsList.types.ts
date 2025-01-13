import { ChangeEvent } from 'react'

export interface ISearchbarsListProps {
  onChangeKeyword: (event: ChangeEvent<HTMLInputElement>) => void
  refetch: ({ search: string }) => void
}
export interface ISearchbarsListUIProps {
  onChangeSearchbar: (event: ChangeEvent<HTMLInputElement>) => void
}
