import { ChangeEvent } from 'react'
import SearchbarsListUI from './SearchbarsList.presenter'
import _ from 'lodash'
import { ISearchbarsListProps } from './SearchbarsList.types'

export default function SearchbarsList(props: ISearchbarsListProps) {
  const getDebounce = _.debounce((data) => {
    props.refetch({ search: data })
    props.onChangeKeyword(data)
  }, 200)

  function onChangeSearchbar(event: ChangeEvent<HTMLInputElement>) {
    getDebounce(event.target.value)
  }

  return <SearchbarsListUI onChangeSearchbar={onChangeSearchbar} />
}
