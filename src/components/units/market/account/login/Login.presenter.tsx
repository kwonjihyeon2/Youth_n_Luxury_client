import * as S from './Login.styles'
import { ILoginUIProps } from './Login.types'
export default function LoginUI(props: ILoginUIProps) {
  return (
    <S.ResponsiveBox>
      <S.Wrapper>
        <S.EmailLoginBtn>이메일 로그인</S.EmailLoginBtn>

        <S.Input
          placeholder="아이디"
          onChange={props.onChangeLoginInput('email')}
        ></S.Input>
        <S.Input
          type="password"
          placeholder="비밀번호"
          onChange={props.onChangeLoginInput('password')}
        ></S.Input>
        <S.InputBox>
          <S.CheckBoxContainer>
            <S.CheckBox type="checkbox" />
            <S.CheckBoxTxt>아이디 저장</S.CheckBoxTxt>
          </S.CheckBoxContainer>
        </S.InputBox>
        <S.EmailJoinBtn onClick={props.onClickLoginBtn}>로그인</S.EmailJoinBtn>
        <S.FindTxtBox>
          <S.FindTxt>아이디 찾기</S.FindTxt>
          <S.FindTxt>비밀번호 찾기</S.FindTxt>
          <S.FindTxt>회원가입</S.FindTxt>
        </S.FindTxtBox>
      </S.Wrapper>
    </S.ResponsiveBox>
  )
}
