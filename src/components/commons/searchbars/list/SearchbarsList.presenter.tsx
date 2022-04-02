import { Searchbar, SearchbarInput } from './SearchbarsList.styles'

export default function SearchbarsListUI(props) {
  return (
    <Searchbar>
      <SearchbarInput
        placeholder="검색어를 입력해 주세요."
        onChange={props.onChangeSearchbar}
      />
    </Searchbar>
  )
}
