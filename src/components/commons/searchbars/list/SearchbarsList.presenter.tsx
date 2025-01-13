import { Searchbar, SearchbarInput } from './SearchbarsList.styles'
import { ISearchbarsListUIProps } from './SearchbarsList.types'

export default function SearchbarsListUI(props: ISearchbarsListUIProps) {
  return (
    <Searchbar>
      <SearchbarInput
        placeholder="검색어를 입력해 주세요."
        onChange={props.onChangeSearchbar}
      />
    </Searchbar>
  )
}
