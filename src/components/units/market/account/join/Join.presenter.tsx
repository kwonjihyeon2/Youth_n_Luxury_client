import * as S from './Join.styles'
export default function JoinUI(props) {
  return (
    <S.Wrapper>
      <S.JoinBox>
        <S.JoinHeaderTxt>회원가입</S.JoinHeaderTxt>
        <S.JoinSubTxt>회원이 되셔서 다양한 서비스를 받으세요!</S.JoinSubTxt>
      </S.JoinBox>
      <S.EmailJoinBtn
        onClick={() => {
          props.router.push('/join/new')
        }}
      >
        이메일 회원가입
      </S.EmailJoinBtn>
      <S.OrBox>
        <S.OrLine></S.OrLine>또는<S.OrLine></S.OrLine>
      </S.OrBox>
      <S.SocialBox>
        <S.SocialImg></S.SocialImg>
        <S.SocialImg></S.SocialImg>
      </S.SocialBox>
    </S.Wrapper>
  )
}
