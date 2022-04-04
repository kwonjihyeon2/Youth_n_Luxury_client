import * as S from './MyAskDetail.styles'

export default function MyAskDetailUI(props) {
  console.log(props.data)
  return (
    <S.WrapperResponse>
      <S.Wrapper>
        <S.Row>
          <S.Key>분류</S.Key>
          <S.TopValue>
            {props.data?.fetchUserQuery?.adminCategory?.name}
          </S.TopValue>
          <S.Key>등록일</S.Key>
          <S.CreatedAtValue>2022-03-26</S.CreatedAtValue>
        </S.Row>
        <S.Row>
          <S.Key>작성자</S.Key>
          <S.Value>{props.data?.fetchUserQuery?.user?.name}</S.Value>
        </S.Row>
        <S.Row>
          <S.Key>제목</S.Key>
          <S.Value>{props.data?.fetchUserQuery?.title} </S.Value>
        </S.Row>
        <S.ContentValue>{props.data?.fetchUserQuery?.contents}</S.ContentValue>

        <S.BtnBox>
          <S.CancelBtn>목록</S.CancelBtn>
          <S.EditDeleteBtnBox>
            <S.CancelBtn>수정</S.CancelBtn>
            <S.SubmitBtn>삭제</S.SubmitBtn>
          </S.EditDeleteBtnBox>
        </S.BtnBox>
      </S.Wrapper>
    </S.WrapperResponse>
  )
}
