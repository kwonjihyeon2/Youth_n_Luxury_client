import * as S from './SideBar.styles'
export default function SideBarUI(props) {
  console.log(props.asPath)
  return (
    <>
      <S.Wrapper>
        <S.MyPagePath>
          {/* <S.PathImg></S.PathImg>
          <S.PathImg></S.PathImg>
          <S.PathTxt>마이페이지</S.PathTxt> */}
        </S.MyPagePath>

        <S.MyShoppingHeaderTxt>MY SHOPPING</S.MyShoppingHeaderTxt>
        <S.TitleTxt>나의 쇼핑</S.TitleTxt>
        <S.SubTxt
          onClick={props.onClickSwitchPage('/mypage/myShopping/transaction')}
          isSelected={props.asPath === '/mypage/myShopping/transaction/'}
        >
          거래내역
        </S.SubTxt>
        <S.SubTxt
          onClick={props.onClickSwitchPage('/mypage/myShopping/wishList')}
          isSelected={props.asPath === '/mypage/myShopping/wishList/'}
        >
          위시리스트
        </S.SubTxt>
        <S.SubTxt
          onClick={props.onClickSwitchPage('/mypage/myShopping/recentView')}
          isSelected={props.asPath === '/mypage/myShopping/recentView/'}
        >
          최근 본 상품
        </S.SubTxt>
        <S.TitleTxt>나의 활동</S.TitleTxt>
        <S.SubTxt
          onClick={props.onClickSwitchPage('/mypage/myActivity/myAsk')}
          isSelected={props.asPath === '/mypage/myActivity/myAsk/'}
        >
          나의 1:1문의
        </S.SubTxt>
        <S.SubTxt
          onClick={props.onClickSwitchPage('/mypage/myActivity/reviewIWrite')}
          isSelected={props.asPath === '/mypage/myActivity/reviewIWrite/'}
        >
          내가 한 평가
        </S.SubTxt>
        <S.SubTxt
          onClick={props.onClickSwitchPage('/mypage/myActivity/reviewIGot')}
          isSelected={props.asPath === '/mypage/myActivity/reviewIGot/'}
        >
          내가 받은 평가
        </S.SubTxt>
        <S.TitleTxt>나의 정보</S.TitleTxt>
        <S.SubTxt
          onClick={props.onClickSwitchPage('/mypage/myInfo/editUser')}
          isSelected={props.asPath === '/mypage/myInfo/editUser/'}
        >
          회원정보 수정
        </S.SubTxt>
        <S.SubTxt
          onClick={props.onClickSwitchPage('/mypage/myInfo/deleteUser')}
          isSelected={props.asPath === '/mypage/myInfo/deleteUser/'}
        >
          회원탈퇴
        </S.SubTxt>
      </S.Wrapper>
    </>
  )
}
