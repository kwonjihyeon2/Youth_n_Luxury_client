import * as S from './FindAccount.styles'
import { IFindAccountUIProps } from './FindAccount.types'

export default function FindAccountUI(props: IFindAccountUIProps) {
  return (
    <S.ResponsiveBox>
      <S.Wrapper>
        <S.FlexRow>
          <S.SelectSwitchBtn>아이디 찾기</S.SelectSwitchBtn>
          <S.SelectSwitchBtn>비밀번호 찾기</S.SelectSwitchBtn>
        </S.FlexRow>
        <S.FindTxtHeaderBox>
          <S.FindMainTxtBox>
            <S.FindHeaderLine></S.FindHeaderLine>
            <S.FindMainTxt>등록 정보로 아이디 찾기</S.FindMainTxt>
            <S.FindHeaderLine></S.FindHeaderLine>
          </S.FindMainTxtBox>

          <S.FindSubTxt>
            회원가입 시 등록한 정보로 찾을 수 있습니다.
          </S.FindSubTxt>
        </S.FindTxtHeaderBox>

        <S.FindIdTable>
          <S.Row>
            <S.VarTxt>이름</S.VarTxt>
            <S.ValueBox>
              <S.PasswordInput></S.PasswordInput>
            </S.ValueBox>
          </S.Row>

          {!props.isSend ? (
            <S.IsSubmitPhoneNumRow>
              <S.IsSubmitPhoneNumVar>휴대폰번호</S.IsSubmitPhoneNumVar>
              <S.PhoneNumValueBox>
                <S.ValueBox
                  style={{
                    color: '#00000033',
                  }}
                >
                  <S.NumInput style={{ marginRight: '3px' }}></S.NumInput>-
                  <S.NumInput
                    style={{ marginRight: '3px', marginLeft: '3px' }}
                  ></S.NumInput>
                  -<S.NumInput style={{ marginLeft: '3px' }}></S.NumInput>
                  <S.SendAuthNumBtn>인증번호 보내기</S.SendAuthNumBtn>
                </S.ValueBox>
                <S.ValueBox>
                  <S.CheckNumInput></S.CheckNumInput>
                  <S.SendAuthNumBtn>인증번호 확인</S.SendAuthNumBtn>
                </S.ValueBox>
              </S.PhoneNumValueBox>
            </S.IsSubmitPhoneNumRow>
          ) : (
            <S.Row>
              <S.VarTxt>휴대폰번호</S.VarTxt>
              <S.ValueBox
                style={{
                  color: '#00000033',
                }}
              >
                <S.NumInput
                  maxLength={3}
                  style={{ marginRight: '3px' }}
                ></S.NumInput>
                -
                <S.NumInput
                  maxLength={4}
                  style={{ marginRight: '3px', marginLeft: '3px' }}
                ></S.NumInput>
                -
                <S.NumInput
                  maxLength={4}
                  style={{ marginLeft: '3px' }}
                ></S.NumInput>
                <S.SendAuthNumBtn>인증번호 보내기</S.SendAuthNumBtn>
              </S.ValueBox>
            </S.Row>
          )}
        </S.FindIdTable>
        <S.OkBtn>확인</S.OkBtn>
      </S.Wrapper>
    </S.ResponsiveBox>
  )
}
