import * as S from './Navigation.styles'

export default function NavigationUI() {
  return (
    <S.Position>
      <S.Wrapper>
        <S.Container>
          <S.MainNavContainer>
            <img
              src="/images/MainLogoImg.png"
              style={{ marginRight: '140px' }}
            ></img>
            <S.DropDownColBox>
              <S.DropDownCol>
                <S.TopNavEl>BRAND</S.TopNavEl>
                <S.DropDownBox className="dropDown">
                  <S.DropDownEl>까르띠에</S.DropDownEl>
                  <S.DropDownEl>디올</S.DropDownEl>
                  <S.DropDownEl>롤렉스</S.DropDownEl>
                  <S.DropDownEl>루이비통</S.DropDownEl>
                  <S.DropDownEl>샤넬</S.DropDownEl>
                  <S.DropDownEl>에르메스</S.DropDownEl>
                  <S.DropDownEl>오메가</S.DropDownEl>
                </S.DropDownBox>
              </S.DropDownCol>
              <S.TopNavEl>ALL</S.TopNavEl>
              <S.DropDownCol>
                <S.TopNavEl>BAG</S.TopNavEl>
                <S.DropDownBox className="dropDown">
                  <S.DropDownEl>숄더/토트백</S.DropDownEl>
                  <S.DropDownEl>크로스백</S.DropDownEl>
                  <S.DropDownEl>클러치</S.DropDownEl>
                  <S.DropDownEl>파우치</S.DropDownEl>
                  <S.DropDownEl>백팩</S.DropDownEl>
                  <S.DropDownEl>서류가방</S.DropDownEl>
                  <S.DropDownEl>여행가방</S.DropDownEl>
                </S.DropDownBox>
              </S.DropDownCol>

              <S.DropDownCol>
                <S.TopNavEl>TOP</S.TopNavEl>
                <S.DropDownBox className="dropDown">
                  <S.DropDownEl>니트</S.DropDownEl>
                  <S.DropDownEl>폴라</S.DropDownEl>
                  <S.DropDownEl>후드</S.DropDownEl>
                  <S.DropDownEl>셔츠</S.DropDownEl>
                  <S.DropDownEl>스웨터</S.DropDownEl>
                  <S.DropDownEl>수트</S.DropDownEl>
                </S.DropDownBox>
              </S.DropDownCol>
              <S.DropDownCol style={{ width: '72px' }}>
                <S.TopNavEl>BOTTOM</S.TopNavEl>
                <S.DropDownBox className="dropDown">
                  <S.DropDownEl>진</S.DropDownEl>
                  <S.DropDownEl>데님</S.DropDownEl>
                </S.DropDownBox>
              </S.DropDownCol>
              <S.DropDownCol>
                <S.TopNavEl>ACC</S.TopNavEl>
                <S.DropDownBox className="dropDown">
                  <S.DropDownEl>귀걸이</S.DropDownEl>
                  <S.DropDownEl>목걸이</S.DropDownEl>
                  <S.DropDownEl>팔찌</S.DropDownEl>
                  <S.DropDownEl>반지</S.DropDownEl>
                  <S.DropDownEl>기타</S.DropDownEl>
                </S.DropDownBox>
              </S.DropDownCol>
              <S.DropDownCol>
                <S.TopNavEl>SHOES</S.TopNavEl>
                <S.DropDownBox className="dropDown">
                  <S.DropDownEl>구두</S.DropDownEl>
                  <S.DropDownEl>스니커즈</S.DropDownEl>
                  <S.DropDownEl>캔버스화</S.DropDownEl>
                  <S.DropDownEl>워커</S.DropDownEl>
                  <S.DropDownEl>운동화</S.DropDownEl>
                </S.DropDownBox>
              </S.DropDownCol>
            </S.DropDownColBox>
          </S.MainNavContainer>

          <S.NavRightBox>
            <S.IconBox>
              <S.IconContainer>
                <img src="/images/myPageNav/navBasket.png" />
              </S.IconContainer>
              <S.IconContainer>
                <S.IconImg />
              </S.IconContainer>
              <S.IconContainer>
                <S.IconImg />
              </S.IconContainer>
            </S.IconBox>
            <S.SellBtn>내 명품 팔기</S.SellBtn>
          </S.NavRightBox>
        </S.Container>
      </S.Wrapper>
    </S.Position>
  )
}
