import * as S from './MyAsk.styles'

export default function MyAskUI(props) {
  return (
    <S.WrapperResponse>
      <S.Wrapper>
        <S.AskHeaderTxt></S.AskHeaderTxt>
        <S.SearchBox>
          <S.DropDown name="type">
            <S.Option value="회원정보문의">회원정보문의</S.Option>
            <S.Option value="주문결제문의">주문결제문의</S.Option>
            <S.Option value="상품정보문의">상품정보문의</S.Option>
            <S.Option value="배송문의">배송문의</S.Option>
            <S.Option value="취소문의">취소문의</S.Option>
            <S.Option value="반품문의">반품문의</S.Option>
            <S.Option value="환불문의">환불문의</S.Option>
            <S.Option value="기타문의">기타문의</S.Option>
          </S.DropDown>
          <S.SearchRightBar>
            <S.SearchInput placeholder="제목, 내용" />
            <S.SearchBtn>검색</S.SearchBtn>
          </S.SearchRightBar>
        </S.SearchBox>

        <S.Table>
          <S.HeadRow>
            <S.HeadColFlex1>번호</S.HeadColFlex1>
            <S.HeadColFlex1>상태</S.HeadColFlex1>
            <S.HeadColFlex2>분류</S.HeadColFlex2>

            <S.HeadColFlex5>제목</S.HeadColFlex5>
            <S.HeadColFlex1>날짜</S.HeadColFlex1>
          </S.HeadRow>

          {/* {props.data?.fetchUserQuerys.map((el) => (
            <S.Row>
              <S.ColFlex1>01</S.ColFlex1>
              <S.ColFlex1>답변대기</S.ColFlex1>
              <S.ColFlex2>{`[회원정보문의]`}</S.ColFlex2>

              <S.ColFlex5>언제와요?</S.ColFlex5>
              <S.ColFlex1>2022/03/21</S.ColFlex1>
            </S.Row>
          ))} */}
        </S.Table>

        <S.WriteAskBtnBox>
          <S.WriteAskBtn onClick={props.MoveToWrite}>
            1:1문의 쓰기
          </S.WriteAskBtn>
        </S.WriteAskBtnBox>
      </S.Wrapper>
    </S.WrapperResponse>
  )
}
