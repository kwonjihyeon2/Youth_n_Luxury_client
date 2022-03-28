import * as S from './SideBar.styles'
export default function SideBarUI(props) {
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
        <S.SubTxt isSelected={props.pageNum === 0}>거래내역</S.SubTxt>
        <S.SubTxt isSelected={props.pageNum === 1}>위시리스트</S.SubTxt>
        <S.SubTxt isSelected={props.pageNum === 2}>최근 본 상품</S.SubTxt>
        <S.TitleTxt>나의 활동</S.TitleTxt>
        <S.SubTxt isSelected={props.pageNum === 3}>나의 1:1문의</S.SubTxt>
        <S.SubTxt isSelected={props.pageNum === 4}>내가 한 평가</S.SubTxt>
        <S.SubTxt isSelected={props.pageNum === 5}>내가 받은 평가</S.SubTxt>
        <S.TitleTxt>나의 정보</S.TitleTxt>
        <S.SubTxt isSelected={props.pageNum === 6}>회원정보 수정</S.SubTxt>
        <S.SubTxt isSelected={props.pageNum === 7}>회원탈퇴</S.SubTxt>
      </S.Wrapper>
    </>
  )
}
