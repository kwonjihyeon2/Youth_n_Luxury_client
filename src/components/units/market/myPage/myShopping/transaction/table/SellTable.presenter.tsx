import * as S from '../Transaction.styles'

export default function SellTableUI(props) {
  return (
    <>
      <S.ProductDetailTxt>판매 상품 정보</S.ProductDetailTxt>
      <S.TableHeaderBox>
        <S.DateTableHeaderEl>주문 일자</S.DateTableHeaderEl>
        <S.ImgTableHeaderEl>이미지</S.ImgTableHeaderEl>
        <S.NameTableHeaderEl>상품정보</S.NameTableHeaderEl>
        <S.PriceTableHeaderEl>상품판매금액</S.PriceTableHeaderEl>
        <S.StatusTableHeaderEl>주문처리상태</S.StatusTableHeaderEl>
        <S.SellerNameTableHeaderEl>구매자 닉네임</S.SellerNameTableHeaderEl>
      </S.TableHeaderBox>
      {props.dataSeller?.fetchSellerOrders.map((el) => (
        <S.Row>
          <S.RowDateBox>{el.createdAt.slice(0, 10)}</S.RowDateBox>
          <S.RowImg></S.RowImg>
          <S.RowNameBox>{el.product.name}</S.RowNameBox>
          <S.RowPriceBox>{el.product.price}</S.RowPriceBox>
          <S.RowStatusBox>{el.status}</S.RowStatusBox>
          <S.RowSellerNameBox>{el.product.user.name}</S.RowSellerNameBox>
        </S.Row>
      ))}
    </>
  )
}
