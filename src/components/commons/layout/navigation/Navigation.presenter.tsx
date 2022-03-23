import * as S from './Navigation.styles';

export default function NavigationUI() {
  return (
    <S.Wrapper>
      <S.MainNavContainer>
        <S.NavEl>BRAND</S.NavEl>
        <S.TopNavEl>ALL</S.TopNavEl>
        <S.TopNavEl>BAG</S.TopNavEl>
        <S.TopNavEl>TOP</S.TopNavEl>
        <S.BottomNavEl>BOTTOM</S.BottomNavEl>
        <S.TopNavEl>ACC</S.TopNavEl>
        <S.NavEl>SHOES</S.NavEl>
      </S.MainNavContainer>

      <S.NavRightBox>
        <S.IconBox>
          <S.IconContainer>
            <S.IconImg />
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
    </S.Wrapper>
  );
}
