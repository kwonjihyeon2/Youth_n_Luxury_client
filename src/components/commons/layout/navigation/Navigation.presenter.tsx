import * as S from './Navigation.styles'

export default function NavigationUI(props) {
  return (
    <S.Position>
      <S.Wrapper>
        <S.Container>
          <S.LogoImg
            onClick={props.onClickLogo}
            src="/images/MainLogoImg.png"
          />
          <S.DropDownColBox>
            <S.DropDownCol>
              <S.TopNavEl>BRAND</S.TopNavEl>
              <S.DropDownBox className="dropDown">
                <S.DropDownEl onClick={props.onClickEl}>프라다</S.DropDownEl>
                <S.DropDownEl onClick={props.onClickEl}>버버리</S.DropDownEl>
                <S.DropDownEl onClick={props.onClickEl}>루이비통</S.DropDownEl>
                <S.DropDownEl onClick={props.onClickEl}>샤넬</S.DropDownEl>
                <S.DropDownEl onClick={props.onClickEl}>구찌</S.DropDownEl>
                <S.DropDownEl onClick={props.onClickEl}>에르메스</S.DropDownEl>
              </S.DropDownBox>
            </S.DropDownCol>
            <S.TopNavEl>ALL</S.TopNavEl>
            <S.DropDownCol>
              <S.TopNavEl>BAG</S.TopNavEl>
              <S.DropDownBox className="dropDown">
                <S.DropDownEl onClick={props.onClickEl}>크로스백</S.DropDownEl>
                <S.DropDownEl onClick={props.onClickEl}>백팩</S.DropDownEl>
                <S.DropDownEl onClick={props.onClickEl}>
                  수트케이스
                </S.DropDownEl>
                <S.DropDownEl onClick={props.onClickEl}>에코백</S.DropDownEl>
              </S.DropDownBox>
            </S.DropDownCol>
            <S.DropDownCol>
              <S.TopNavEl>TOP</S.TopNavEl>
              <S.DropDownBox className="dropDown">
                <S.DropDownEl onClick={props.onClickEl}>후드티</S.DropDownEl>
                <S.DropDownEl onClick={props.onClickEl}>티셔츠</S.DropDownEl>
                <S.DropDownEl onClick={props.onClickEl}>맨투맨</S.DropDownEl>
                <S.DropDownEl onClick={props.onClickEl}>와이셔츠</S.DropDownEl>
              </S.DropDownBox>
            </S.DropDownCol>
            <S.DropDownCol style={{ width: '80px' }}>
              <S.TopNavEl>BOTTOM</S.TopNavEl>
              <S.DropDownBox className="dropDown">
                <S.DropDownEl onClick={props.onClickEl}>청바지</S.DropDownEl>
                <S.DropDownEl onClick={props.onClickEl}>면바지</S.DropDownEl>
                <S.DropDownEl onClick={props.onClickEl}>슬랙스</S.DropDownEl>
                <S.DropDownEl onClick={props.onClickEl}>반바지</S.DropDownEl>
              </S.DropDownBox>
            </S.DropDownCol>
            <S.DropDownCol>
              <S.TopNavEl>ACC</S.TopNavEl>
              <S.DropDownBox className="dropDown">
                <S.DropDownEl onClick={props.onClickEl}>반지</S.DropDownEl>
                <S.DropDownEl onClick={props.onClickEl}>목걸이</S.DropDownEl>
                <S.DropDownEl onClick={props.onClickEl}>팔찌</S.DropDownEl>
                <S.DropDownEl onClick={props.onClickEl}>귀걸이</S.DropDownEl>
              </S.DropDownBox>
            </S.DropDownCol>
            <S.DropDownCol>
              <S.TopNavEl>SHOES</S.TopNavEl>
              <S.DropDownBox className="dropDown">
                <S.DropDownEl onClick={props.onClickEl}>하이힐</S.DropDownEl>
                <S.DropDownEl onClick={props.onClickEl}>구두</S.DropDownEl>
                <S.DropDownEl onClick={props.onClickEl}>워커</S.DropDownEl>
                <S.DropDownEl onClick={props.onClickEl}>운동화</S.DropDownEl>
              </S.DropDownBox>
            </S.DropDownCol>
          </S.DropDownColBox>

          <S.NavRightBox>
            <S.IconBox>
              <S.IconContainer>
                <img
                  style={{ width: '15.5px', height: '18.5px' }}
                  src="/images/myPageNav/navProfile.png"
                  onClick={props.onClickMyIcon}
                />
              </S.IconContainer>
              <S.IconContainer>
                <img
                  style={{ width: '15.5px', height: '18.5px' }}
                  src="/images/myPageNav/navBasket.png"
                  onClick={props.onClickMyWish}
                />
              </S.IconContainer>
            </S.IconBox>
            <S.SellBtn onClick={props.onClickMySell}>내 명품 팔기</S.SellBtn>
          </S.NavRightBox>
        </S.Container>
      </S.Wrapper>
    </S.Position>
  )
}
