import * as S from './JoinWrite.styles'

export default function JoinWriteUI(props) {
  return (
    <S.Wrapper>
      <S.JoinHeaderTxt>회원정보 입력</S.JoinHeaderTxt>
      <S.InputBox>
        <S.Row>
          <S.VarTxt>이메일</S.VarTxt>
          <S.ValueBox>
            <S.EmailInput style={{ marginRight: '5px' }}></S.EmailInput> @
            <S.EmailInput style={{ marginLeft: '5px' }}></S.EmailInput>
            <S.EmailDropdown>
              <option value="" selected>
                직접입력
              </option>
              <option value="1">naver.com</option>

              <option value="2">nate.com</option>
              <option value="3">dreamwiz.com</option>

              <option value="4">gmail.com</option>
              <option value="5">hanmail.net</option>
              <option value="6">daum.net</option>
            </S.EmailDropdown>
          </S.ValueBox>
        </S.Row>
        <S.Row>
          <S.VarTxt>비밀번호</S.VarTxt>
          <S.ValueBox>
            <S.PasswordInput></S.PasswordInput>
          </S.ValueBox>
        </S.Row>

        <S.Row>
          <S.VarTxt>비밀번호 확인</S.VarTxt>
          <S.ValueBox>
            <S.PasswordInput></S.PasswordInput>
          </S.ValueBox>
        </S.Row>

        <S.Row>
          <S.VarTxt>이름</S.VarTxt>
          <S.ValueBox>
            <S.PasswordInput></S.PasswordInput>
          </S.ValueBox>
        </S.Row>

        <S.Row>
          <S.VarTxt>닉네임</S.VarTxt>
          <S.ValueBox>
            <S.PasswordInput></S.PasswordInput>{' '}
            <S.NickNameTxt>{`(공백 없는 영문/숫자 포함 6~20자)`}</S.NickNameTxt>
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
      </S.InputBox>
      <S.SubmitBtn>입력완료</S.SubmitBtn>
    </S.Wrapper>
  )
}
