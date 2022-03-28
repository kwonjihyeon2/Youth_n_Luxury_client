import * as S from './MyAskDetail.styles'

export default function MyAskDetailUI() {
  return (
    <>
      <S.Wrapper>
        <S.Row>
          <S.Key>분류</S.Key>
          <S.TopValue>배송문의</S.TopValue>
          <S.Key>등록일</S.Key>
          <S.CreatedAtValue>2022-03-26</S.CreatedAtValue>
        </S.Row>
        <S.Row>
          <S.Key>작성자</S.Key>
          <S.Value>쑤잉</S.Value>
        </S.Row>
        <S.Row>
          <S.Key>제목</S.Key>
          <S.Value>왜안와요 왜왜왜왜왜왜오애왜왱??? </S.Value>
        </S.Row>
        <S.ContentValue>왜 안오는거에요 왜왜왜왜ㅐㅇ??????</S.ContentValue>

        <S.BtnBox>
          <S.CancelBtn>목록</S.CancelBtn>
          <S.EditDeleteBtnBox>
            <S.CancelBtn>수정</S.CancelBtn>
            <S.SubmitBtn>삭제</S.SubmitBtn>
          </S.EditDeleteBtnBox>
        </S.BtnBox>
      </S.Wrapper>
    </>
  )
}
