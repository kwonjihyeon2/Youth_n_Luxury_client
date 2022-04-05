import { useEffect, useState } from 'react'
import { breakPoints } from '../../../commons/utils/media'
import DesktopItem from './ResposiveOnDesktopItem'
import TabletItem from './ResposiveOnTabletItem'
import * as S from './UseditemList.styles'

export default function UseditemListUI(props) {
  const [arr, setArr] = useState([])
  // useEffect(() => {
  //   // if (!props.data?.fetchAllProduct.urls) return
  //   // console.log(props.data?.fetchAllProduct.urls)
  //   for (let i = 0; i < 10; i++) {
  //     setArr(props.data?.fetchAllProduct[i].urls)
  //   }

  //   console.log(props.data?.fetchAllProduct[0].urls)
  //   console.log(props.data?.fetchAllProduct[1].urls)
  //   console.log(props.data?.fetchAllProduct[2].urls)
  //   console.log(props.data?.fetchAllProduct[3].urls)

  //   // const test = urls.split('"]["')
  //   // test[0] = test[0].replaceAll('["', '')
  //   // test[4] = test[4].replaceAll('"]', '')

  //   // setArr(test)
  // }, [props.data])
  console.log('----------------')
  console.log(props.data?.fetchAllProduct.urls)
  console.log('----------------')
  console.log(arr)

  return (
    <S.Position>
      <S.Wrapper>
        <DesktopItem
          onClickMain={props.onClickMain}
          onClickSub={props.onClickSub}
          onClickBrand={props.onClickBrand}
          main={props.main}
          sub={props.sub}
          brand={props.brand}
          isClickMain={props.isClickMain}
          isClickSub={props.isClickSub}
        />
        <TabletItem
          onClickMain={props.onClickMain}
          onClickSub={props.onClickSub}
          onClickBrand={props.onClickBrand}
          main={props.main}
          sub={props.sub}
          brand={props.brand}
        />
        <S.WrapperBottom>
          {props.data?.fetchAllProduct.map((el) => (
            <S.WrapperUseditem
              key={el.product_id}
              id={el.product_id}
              onClick={props.onClickProduct(el)}
            >
              <img src={`https://storage.googleapis.com/${arr}`} />
              <S.UseditemName>{el.name}</S.UseditemName>
              <S.UseditemPrice>{el.price}</S.UseditemPrice>
            </S.WrapperUseditem>
          ))}
        </S.WrapperBottom>
      </S.Wrapper>
    </S.Position>
  )
}
