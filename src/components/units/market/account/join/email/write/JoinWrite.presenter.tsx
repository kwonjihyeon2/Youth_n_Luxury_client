import * as S from './JoinWrite.styles'

export default function JoinWriteUI(props) {
  return (
    <S.ResponsiveBox>
      <S.Wrapper>
        <S.JoinHeaderTxt>회원정보 입력</S.JoinHeaderTxt>
        <S.InputBox>
          <S.Row>
            <S.VarTxt>이메일</S.VarTxt>
            <S.ValueBox>
              {props.isEdit ? (
                <>
                  <S.EmailInput
                    style={{ marginRight: '5px' }}
                    value={props.data?.fetchUser.email.split('@')[0]}
                  ></S.EmailInput>
                  @
                  <S.EmailInput
                    style={{ marginLeft: '5px' }}
                    onChange={props.onChangeEmail('emailSecond')}
                    value={props.data?.fetchUser.email.split('@')[1]}
                  ></S.EmailInput>
                </>
              ) : (
                <>
                  <S.EmailInput
                    style={{ marginRight: '5px' }}
                    onChange={props.onChangeEmail('emailFirst')}
                  ></S.EmailInput>
                  @
                  <S.EmailInput
                    style={{ marginLeft: '5px' }}
                    onChange={props.onChangeEmail('emailSecond')}
                    value={props.createUserInput.emailSecond}
                  ></S.EmailInput>
                </>
              )}

              <S.EmailDropdown onChange={props.selectBoxChange}>
                <option value="">직접입력</option>
                <option value="naver.com">naver.com</option>

                <option value="nate.com">nate.com</option>
                <option value="dreamwiz.com">dreamwiz.com</option>

                <option value="gmail.com">gmail.com</option>
                <option value="hanmail.net">hanmail.net</option>
                <option value="daum.net">daum.net</option>
              </S.EmailDropdown>
            </S.ValueBox>
          </S.Row>
          <S.Row>
            <S.VarTxt>비밀번호</S.VarTxt>
            <S.OtherValue>
              <S.PasswordInput
                onChange={props.onChangeInput('password')}
                type="password"
              ></S.PasswordInput>
              <S.ValiText isPwdVal={props.isPwdVal}>
                최소 6자, 최소 하나 이상의 영문과 숫자를 입력하세요.
              </S.ValiText>
            </S.OtherValue>
          </S.Row>

          <S.Row>
            <S.VarTxt>비밀번호 확인</S.VarTxt>
            <S.OtherValue>
              <S.PasswordInput
                type="password"
                onChange={props.onChangeInput('passwordCheck')}
              ></S.PasswordInput>
              <S.ValiText isPwdCheck={props.isPwdCheck}>
                비밀번호가 일치하지 않습니다.
              </S.ValiText>
            </S.OtherValue>
          </S.Row>

          <S.Row>
            <S.VarTxt>이름</S.VarTxt>
            <S.ValueBox>
              {props.isEdit ? (
                <S.PasswordInput
                  value={props.data?.fetchUser.name}
                ></S.PasswordInput>
              ) : (
                <S.PasswordInput
                  onChange={props.onChangeInput('name')}
                ></S.PasswordInput>
              )}
            </S.ValueBox>
          </S.Row>

          <S.Row>
            <S.VarTxt>닉네임</S.VarTxt>
            <S.ValueBox>
              <S.PasswordInput
                onChange={props.onChangeInput('nickname')}
              ></S.PasswordInput>
            </S.ValueBox>
          </S.Row>

          {props.isSend ? (
            <S.IsSubmitPhoneNumRow>
              <S.IsSubmitPhoneNumVar>휴대폰번호</S.IsSubmitPhoneNumVar>
              <S.PhoneNumValueBox>
                <S.ValueBox
                  style={{
                    color: '#00000033',
                  }}
                >
                  <S.NumInput
                    value={props.createUserInput.numberFirst}
                    style={{ marginRight: '3px' }}
                  ></S.NumInput>
                  -
                  <S.NumInput
                    value={props.createUserInput.numberSecond}
                    style={{ marginRight: '3px', marginLeft: '3px' }}
                  ></S.NumInput>
                  -
                  <S.NumInput
                    value={props.createUserInput.numberThird}
                    style={{ marginLeft: '3px' }}
                  ></S.NumInput>
                  <S.SendAuthNumBtn>인증번호 보내기</S.SendAuthNumBtn>
                  <S.ValiText isNumCheck={props.isNumCheck}>
                    {props.timer}
                  </S.ValiText>
                </S.ValueBox>
                <S.ValueBox>
                  <S.CheckNumInput
                    onChange={props.onChangeCheckNum}
                  ></S.CheckNumInput>
                  <S.SendAuthNumBtn onClick={props.onClickCheckNum}>
                    인증번호 확인
                  </S.SendAuthNumBtn>
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
                  value={props.createUserInput.numberFirst}
                  type="text"
                  onChange={props.onChangeNumber('numberFirst')}
                  maxLength={3}
                  style={{ marginRight: '3px' }}
                ></S.NumInput>
                -
                <S.NumInput
                  type="text"
                  value={props.createUserInput.numberSecond}
                  onChange={props.onChangeNumber('numberSecond')}
                  maxLength={4}
                  style={{ marginRight: '3px', marginLeft: '3px' }}
                ></S.NumInput>
                -
                <S.NumInput
                  type="text"
                  value={props.createUserInput.numberThird}
                  onChange={props.onChangeNumber('numberThird')}
                  maxLength={4}
                  style={{ marginLeft: '3px' }}
                ></S.NumInput>
                <S.SendAuthNumBtn
                  onClick={props.onClickAuthNumBtn}
                  disabled={props.isSend}
                >
                  인증번호 보내기
                </S.SendAuthNumBtn>
                {/* <S.ValiText>{props.timer}</S.ValiText> */}
              </S.ValueBox>
            </S.Row>
          )}
        </S.InputBox>
        {props.isEdit ? (
          <S.SubmitBtn
            onClick={props.onClickUpdateUser}
            disabled={!props.isNumCheck}
            isNumCheck={props.isNumCheck}
          >
            수정완료
          </S.SubmitBtn>
        ) : (
          <S.SubmitBtn
            onClick={props.onClickJoinBtn}
            disabled={!props.isNumCheck}
            isNumCheck={props.isNumCheck}
          >
            입력완료
          </S.SubmitBtn>
        )}
      </S.Wrapper>
    </S.ResponsiveBox>
  )
}
