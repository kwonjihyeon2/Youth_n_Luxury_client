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
          <S.WrapperUseditem onClick={props.onClickProduct}>
            <S.UseditemImg></S.UseditemImg>
            <S.UseditemName>{}루이비통 알마 뭐시기</S.UseditemName>
            <S.UseditemPrice>{}100,000,000원</S.UseditemPrice>
          </S.WrapperUseditem>
          <S.WrapperUseditem>
            <S.UseditemImg></S.UseditemImg>
            <S.UseditemName>{}루이비통 알마 뭐시기</S.UseditemName>
            <S.UseditemPrice>{}100,000,000원</S.UseditemPrice>
          </S.WrapperUseditem>
          <S.WrapperUseditem>
            <S.UseditemImg></S.UseditemImg>
            <S.UseditemName>{}루이비통 알마 뭐시기</S.UseditemName>
            <S.UseditemPrice>{}100,000,000원</S.UseditemPrice>
          </S.WrapperUseditem>
          <S.WrapperUseditem>
            <S.UseditemImg></S.UseditemImg>
            <S.UseditemName>{}루이비통 알마 뭐시기</S.UseditemName>
            <S.UseditemPrice>{}100,000,000원</S.UseditemPrice>
          </S.WrapperUseditem>
          <S.WrapperUseditem>
            <S.UseditemImg></S.UseditemImg>
            <S.UseditemName>{}루이비통 알마 뭐시기</S.UseditemName>
            <S.UseditemPrice>{}100,000,000원</S.UseditemPrice>
          </S.WrapperUseditem>
          <S.WrapperUseditem>
            <S.UseditemImg></S.UseditemImg>
            <S.UseditemName>{}루이비통 알마 뭐시기</S.UseditemName>
            <S.UseditemPrice>{}100,000,000원</S.UseditemPrice>
          </S.WrapperUseditem>
          <S.WrapperUseditem>
            <S.UseditemImg></S.UseditemImg>
            <S.UseditemName>{}루이비통 알마 뭐시기</S.UseditemName>
            <S.UseditemPrice>{}100,000,000원</S.UseditemPrice>
          </S.WrapperUseditem>
          <S.WrapperUseditem>
            <S.UseditemImg></S.UseditemImg>
            <S.UseditemName>{}루이비통 알마 뭐시기</S.UseditemName>
            <S.UseditemPrice>{}100,000,000원</S.UseditemPrice>
          </S.WrapperUseditem>
          <S.WrapperUseditem>
            <S.UseditemImg></S.UseditemImg>
            <S.UseditemName>{}루이비통 알마 뭐시기</S.UseditemName>
            <S.UseditemPrice>{}100,000,000원</S.UseditemPrice>
          </S.WrapperUseditem>
          <S.WrapperUseditem>
            <S.UseditemImg></S.UseditemImg>
            <S.UseditemName>{}루이비통 알마 뭐시기</S.UseditemName>
            <S.UseditemPrice>{}100,000,000원</S.UseditemPrice>
          </S.WrapperUseditem>
          <S.WrapperUseditem>
            <S.UseditemImg></S.UseditemImg>
            <S.UseditemName>{}루이비통 알마 뭐시기</S.UseditemName>
            <S.UseditemPrice>{}100,000,000원</S.UseditemPrice>
          </S.WrapperUseditem>
          <S.WrapperUseditem>
            <S.UseditemImg></S.UseditemImg>
            <S.UseditemName>{}루이비통 알마 뭐시기</S.UseditemName>
            <S.UseditemPrice>{}100,000,000원</S.UseditemPrice>
          </S.WrapperUseditem>
          <S.WrapperUseditem>
            <S.UseditemImg></S.UseditemImg>
            <S.UseditemName>{}루이비통 알마 뭐시기</S.UseditemName>
            <S.UseditemPrice>{}100,000,000원</S.UseditemPrice>
          </S.WrapperUseditem>
          <S.WrapperUseditem>
            <S.UseditemImg></S.UseditemImg>
            <S.UseditemName>{}루이비통 알마 뭐시기</S.UseditemName>
            <S.UseditemPrice>{}100,000,000원</S.UseditemPrice>
          </S.WrapperUseditem>
          <S.WrapperUseditem>
            <S.UseditemImg></S.UseditemImg>
            <S.UseditemName>{}루이비통 알마 뭐시기</S.UseditemName>
            <S.UseditemPrice>{}100,000,000원</S.UseditemPrice>
          </S.WrapperUseditem>
        </S.WrapperBottom>
      </S.Wrapper>
    </S.Position>
  )
}
