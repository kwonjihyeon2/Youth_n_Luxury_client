import { useState } from 'react'
import CreateReviewPage from '../../../../review/createReview.container'
import * as S from '../Transaction.styles'

export default function BuyTableUI(props) {
  const [isReview, setIsReview] = useState(false)
  const onClickOpenReview = () => {
    setIsReview((prev) => !prev)
  }

  return (
    <>
      <S.ProductDetailTxt>구매 상품 정보</S.ProductDetailTxt>
      <S.TableHeaderBox>
        <S.DateTableHeaderEl>주문 일자</S.DateTableHeaderEl>
        <S.ImgTableHeaderEl>이미지</S.ImgTableHeaderEl>
        <S.NameTableHeaderEl>상품정보</S.NameTableHeaderEl>
        <S.PriceTableHeaderEl>상품구매금액</S.PriceTableHeaderEl>
        <S.StatusTableHeaderEl>주문처리상태</S.StatusTableHeaderEl>
        <S.SellerNameTableHeaderEl>판매자 닉네임</S.SellerNameTableHeaderEl>
        <S.ReviewTableHeaderEl>후기</S.ReviewTableHeaderEl>
      </S.TableHeaderBox>
      {props.dataBuyer?.fetchmybuyproduct.map((el) => (
        <S.Row>
          <S.RowDateBox>{el.createdAt.slice(0, 10)}</S.RowDateBox>
          <img
            src={
              'https://storage.googleapis.com/' +
              el?.product?.urls
                .substring(1, el?.product.urls.length - 1)
                .replace(/\"/gi, '')
                .split('][')[0]
            }
          />
          <S.RowNameBox>{el.product.name}</S.RowNameBox>
          <S.RowPriceBox>{el.product.price}</S.RowPriceBox>
          <S.RowStatusBox>{el.status}</S.RowStatusBox>
          <S.RowSellerNameBox>{el.product.user.name}</S.RowSellerNameBox>
          <S.RowReviewBox>
            <S.ReviewBtn onClick={onClickOpenReview}>작성하기</S.ReviewBtn>
          </S.RowReviewBox>
        </S.Row>
      ))}
      {isReview && (
        <div>
          <CreateReviewPage
            isReview={isReview}
            onClickOpenReview={onClickOpenReview}
            setIsReview={setIsReview}
          />
        </div>
      )}
    </>
  )
}
