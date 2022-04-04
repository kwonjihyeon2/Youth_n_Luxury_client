import { useQuery } from '@apollo/client'
import { useRouter } from 'next/router'
import MyAskDetailUI from './MyAskDetail.presenter'
import { FETCH_USER_QUERY } from './MyAskDetail.queries'

export default function MyAskDetail() {
  const router = useRouter()
  console.log(router.query?.askId?.split('&')[0])
  console.log(router.query?.askId?.split('&')[1])
  const { data } = useQuery(FETCH_USER_QUERY, {
    variables: {
      adminQueryId: router.query?.askId?.split('&')[0],
      adminCategoryId: router.query?.askId?.split('&')[1],
    },
  })

  // const { data: typeData } = useQuery()
  return <MyAskDetailUI data={data} />
}
