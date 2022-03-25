import * as S from './WelcomeBox.styles'

export default function WelcomeBoxUI() {
  return (
    <>
      <S.Wrapper>
        <S.UserBox>
          <S.UserIcon />
          <S.UserTxtBox>
            <S.UserHeadTxt>쑤잉님 반갑습니다</S.UserHeadTxt>
            <S.UserSubTxt>회원정보수정</S.UserSubTxt>
          </S.UserTxtBox>
        </S.UserBox>
        <S.TempInfoBox>
          <S.InfoBox>
            <S.InfoKeyTxt>좋아요</S.InfoKeyTxt>
            <S.InfoValueBox>
              <S.InfoValueNumTxt>1</S.InfoValueNumTxt>
              <S.InfoValueTxt>개</S.InfoValueTxt>
            </S.InfoValueBox>
          </S.InfoBox>
          <S.Line></S.Line>
          <S.InfoBox>
            <S.InfoKeyTxt>최근 본 상품</S.InfoKeyTxt>
            <S.InfoValueBox>
              <S.InfoValueNumTxt>4</S.InfoValueNumTxt>
              <S.InfoValueTxt>개</S.InfoValueTxt>
            </S.InfoValueBox>
          </S.InfoBox>
        </S.TempInfoBox>
      </S.Wrapper>
    </>
  )
}
