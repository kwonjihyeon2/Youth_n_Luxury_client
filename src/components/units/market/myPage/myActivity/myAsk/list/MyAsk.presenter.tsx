import * as S from './MyAsk.styles'
import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack'
export default function MyAskUI() {
  return (
    <S.WrapperResponse>
      <S.Wrapper>
        <S.AskHeaderTxt></S.AskHeaderTxt>
        <S.SearchBox>
          <S.DropDown name="type">
            <S.Option value="1">- 질문유형전체 -</S.Option>
            <S.Option value="2">회원정보문의</S.Option>
            <S.Option value="3">주문결제문의</S.Option>
            <S.Option value="4">상품정보문의</S.Option>
            <S.Option value="5">배송문의</S.Option>
            <S.Option value="6">취소문의</S.Option>
            <S.Option value="7">반품문의</S.Option>
            <S.Option value="8">환불문의</S.Option>
            <S.Option value="9">기타문의</S.Option>
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
          <S.Row>
            <S.ColFlex1>01</S.ColFlex1>
            <S.ColFlex1>답변대기</S.ColFlex1>
            <S.ColFlex2>{`[회원정보문의]`}</S.ColFlex2>

            <S.ColFlex5>언제와요?</S.ColFlex5>
            <S.ColFlex1>2022/03/21</S.ColFlex1>
          </S.Row>
          <S.Row>
            <S.ColFlex1>01</S.ColFlex1>
            <S.StatusRedTxt>답변완료</S.StatusRedTxt>
            <S.ColFlex2>{`[회원정보문의]`}</S.ColFlex2>

            <S.ColFlex5>언제와요?</S.ColFlex5>
            <S.ColFlex1>2022/03/21</S.ColFlex1>
          </S.Row>
        </S.Table>
        <S.PaginationBox>
          <Stack spacing={2}>
            <Pagination count={1} color="secondary" />
          </Stack>
        </S.PaginationBox>
        <S.WriteAskBtnBox>
          <S.WriteAskBtn>1:1문의 쓰기</S.WriteAskBtn>
        </S.WriteAskBtnBox>
      </S.Wrapper>
    </S.WrapperResponse>
  )
}
