import { breakPoints } from '../../../commons/styles/media'
import DesktopItem from './ResposiveOnDesktopItem'
import TabletItem from './ResposiveOnTabletItem'
import * as S from './UseditemList.styles'

export default function UseditemListUI(props) {
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
          {props.data?.fetchProducts.map((el) => (
            <S.WrapperUseditem key={el.id}>
              {/* <img src="/images/uploadImg.png" /> */}
              <S.UseditemName>{el.name}</S.UseditemName>
              <S.UseditemPrice>{el.price}</S.UseditemPrice>
            </S.WrapperUseditem>
          ))}
        </S.WrapperBottom>
      </S.Wrapper>
    </S.Position>
  )
}
