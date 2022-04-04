import * as S from './MyAskWrite.styles'

export default function MyAskWriteUI(props) {
  return (
    <S.WrapperResponse>
      <S.Wrapper>
        <S.Row>
          <S.Key>분류</S.Key>
          <S.Value>
            <S.SettingOptionDropBox onChange={props.onChangeInput()}>
              <option value="- 분류선택 -">- 분류선택 -</option>
              <option value="회원정보문의">회원정보문의</option>
              <option value="주문결제문의">주문결제문의</option>

              <option value="상품정보문의">상품정보문의</option>

              <option value="배송문의">배송문의</option>

              <option value="취소문의">취소문의</option>

              <option value="반품문의">반품문의</option>

              <option value="환불문의">환불문의</option>

              <option value="기타문의">기타문의</option>
            </S.SettingOptionDropBox>
          </S.Value>
        </S.Row>
        <S.Row>
          <S.Key>작성자</S.Key>
          <S.Value>
            <S.WriterInput
              readOnly={true}
              value={props.data?.fetchUser?.name}
            ></S.WriterInput>
          </S.Value>
        </S.Row>
        <S.Row>
          <S.Key>제목</S.Key>
          <S.Value>
            <S.Title
              onChange={props.onChangeInput('title')}
              placeholder="제목을 입력해주세요"
            ></S.Title>
          </S.Value>
        </S.Row>
        <S.Content
          onChange={props.onChangeInput('contents')}
          placeholder="내용을 입력해주세요"
        ></S.Content>

        <S.BtnBox>
          <S.SubmitBtn onClick={props.onClickSubmit}>저장</S.SubmitBtn>
          <S.CancelBtn>취소</S.CancelBtn>
        </S.BtnBox>
      </S.Wrapper>
    </S.WrapperResponse>
  )
}
