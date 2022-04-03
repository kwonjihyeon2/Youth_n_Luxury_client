import { useState } from 'react'
import UseditemDetailPage from '../../../src/components/units/market/detail/useditemDetail.container'
import { request } from 'graphql-request'
import { FETCH_PRODUCT } from '../../../src/components/units/market/detail/useditemDetail.query'
// const [isSold, setIsSold] = useState(false)
import Head from 'next/head'

export default function UseditemDetail(props) {
  return (
    <>
      <Head>
        <meta property="og:title" content={props.data.name} />
        <meta property="og:description" content={props.data.description} />
        <meta property="og:description" content={props.data.price + '원'} />
        <meta property="og:image" content={props.data.image[0]} />
      </Head>
      <UseditemDetailPage />
    </>
  )
}
export const getServerSideProps = async (context) => {
  const result = await request(
    'https://mybackend.project5-sos.shop/graphql',
    FETCH_PRODUCT,
    {
      productId: context.query.boardId,
    }
  )
  return {
    props: {
      data: {
        name: result?.fetchProduct.name,
        description: result?.fetchProduct.description,
        image: result?.fetchProduct.urls,
        price: result?.fetchProduct.price,
      },
    },
  }
}
