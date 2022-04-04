import * as S from './WelcomeBox.styles'

export default function WelcomeBoxUI(props) {
  return (
    <>
      <S.Wrapper>
        <S.UserBox>
          <img src="/images/myPageProfile.png" />
          <S.UserTxtBox>
            <S.UserHeadTxt>
              {props.userData?.fetchUser?.name}님 반갑습니다
            </S.UserHeadTxt>
            <S.UserSubTxt>회원정보수정</S.UserSubTxt>
          </S.UserTxtBox>
        </S.UserBox>
        <S.TempInfoBox>
          <S.InfoBox>
            <S.InfoKeyTxt>
              좋아요 <img src="/images/Like18.png" />
            </S.InfoKeyTxt>

            <S.InfoValueBox>
              <S.InfoValueNumTxt>
                {props.data?.fetchProductLike.length}
              </S.InfoValueNumTxt>
              <S.InfoValueTxt>개</S.InfoValueTxt>
            </S.InfoValueBox>
          </S.InfoBox>
          <S.Line></S.Line>
          <S.InfoBox>
            <S.InfoKeyTxt>최근 본 상품</S.InfoKeyTxt>
            <S.InfoValueBox>
              <S.InfoValueNumTxt>{props.recentView?.length}</S.InfoValueNumTxt>
              <S.InfoValueTxt>개</S.InfoValueTxt>
            </S.InfoValueBox>
          </S.InfoBox>
        </S.TempInfoBox>
      </S.Wrapper>
    </>
  )
}
