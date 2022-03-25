import * as S from './Login.styles';
export default function LoginUI() {
  return (
    <S.Wrapper>
      <S.EmailLoginBtn>이메일 로그인</S.EmailLoginBtn>

      <S.Input placeholder="아이디"></S.Input>
      <S.Input type="password" placeholder="비밀번호"></S.Input>
      <S.InputBox>
        <S.CheckBoxContainer>
          <S.CheckBox type="checkbox" />
          <S.CheckBoxTxt>아이디 저장</S.CheckBoxTxt>
        </S.CheckBoxContainer>
      </S.InputBox>
      <S.EmailJoinBtn>로그인</S.EmailJoinBtn>
      <S.FindTxtBox>
        <S.FindTxt>아이디 찾기</S.FindTxt>
        <S.FindTxt>비밀번호 찾기</S.FindTxt>
        <S.FindTxt>회원가입</S.FindTxt>
      </S.FindTxtBox>
      <S.OrBox>
        <S.OrLine></S.OrLine>또는<S.OrLine></S.OrLine>
      </S.OrBox>
      <S.SocialBox>
        <S.SocialImg></S.SocialImg>
        <S.SocialImg></S.SocialImg>
      </S.SocialBox>
    </S.Wrapper>
  );
}
