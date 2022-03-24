import * as S from './SideBar.styles'
export default function SideBarUI() {
  return (
    <>
      <S.Wrapper>
        <S.MyPagePath>
          <S.PathImg></S.PathImg>
          <S.PathImg></S.PathImg>
          <S.PathTxt>마이페이지</S.PathTxt>
        </S.MyPagePath>

        <S.MyShoppingHeaderTxt>MY SHOPPING</S.MyShoppingHeaderTxt>
        <S.TitleTxt>나의 쇼핑</S.TitleTxt>
        <S.SubTxt>거래내역</S.SubTxt>
        <S.SubTxt>위시리스트</S.SubTxt>
        <S.SubTxt>최근 본 상품</S.SubTxt>
        <S.TitleTxt>나의 활동</S.TitleTxt>
        <S.SubTxt>나의 1:1문의</S.SubTxt>
        <S.SubTxt>내가 한 평가</S.SubTxt>
        <S.SubTxt>내가 받은 평가</S.SubTxt>
        <S.TitleTxt>나의 정보</S.TitleTxt>
        <S.SubTxt>회원정보 수정</S.SubTxt>
        <S.SubTxt>회원탈퇴</S.SubTxt>
      </S.Wrapper>
    </>
  )
}
