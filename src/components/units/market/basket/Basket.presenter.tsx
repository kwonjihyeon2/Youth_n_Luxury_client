import * as S from './Basket.styles'

export default function BasketUI(props) {
  return (
    <S.WrapperResponse>
      <S.Wrapper>
        <S.BasketTitleTxt>장바구니</S.BasketTitleTxt>
        <S.Container>
          <S.LeftContainer>
            <S.AllCheckBoxRow>
              <S.AllCheckBox type="checkbox"></S.AllCheckBox>
              <S.AllCheckTxt>전체선택</S.AllCheckTxt>
              <S.SelectDeleteBtn>선택삭제</S.SelectDeleteBtn>
            </S.AllCheckBoxRow>
            <S.BasketTable>
              <S.TableTopRow>
                <S.TopMainTxt>배송 :</S.TopMainTxt>
                <S.TopSubTxt>{`택배(선물)무료`}</S.TopSubTxt>
              </S.TableTopRow>
              {props.basket.map((el) => (
                <S.Row>
                  <S.CheckBox></S.CheckBox>
                  <S.ProductImg />
                  <S.ProductNameTxtBox>
                    <S.ProductNameTxt>{el.fetchProduct.name}</S.ProductNameTxt>
                    <S.BuyBtn>바로구매</S.BuyBtn>
                  </S.ProductNameTxtBox>

                  <S.ProductPriceBox>
                    <S.PriceKey>상품금액</S.PriceKey>
                    <S.PriceValue>{el.fetchProduct.price + '원'}</S.PriceValue>
                  </S.ProductPriceBox>
                </S.Row>
              ))}
            </S.BasketTable>
          </S.LeftContainer>
          <S.RightContainer>
            <S.PriceTitleTxt>전체 주문시 금액</S.PriceTitleTxt>

            <S.RightPriceBox>
              <S.AllPriceHeadBox>
                <S.PriceKeyTxt>총 상품금액</S.PriceKeyTxt>
                <S.PriceTitleValueTxt>670,000원</S.PriceTitleValueTxt>
              </S.AllPriceHeadBox>

              <S.AllPriceHeadBox>
                <S.PriceKeyTxt>배송비</S.PriceKeyTxt>
                <S.SendPrice>{`(+)0원`}</S.SendPrice>
              </S.AllPriceHeadBox>
              <S.AllPriceHeadBox>
                <S.AllPriceKeyTxt>총 결제금액</S.AllPriceKeyTxt>
                <S.AllPriceValueTxt>670,000원</S.AllPriceValueTxt>
              </S.AllPriceHeadBox>
            </S.RightPriceBox>
            <S.AllBuyBtn>결제하기</S.AllBuyBtn>
          </S.RightContainer>
        </S.Container>
      </S.Wrapper>
    </S.WrapperResponse>
  )
}
