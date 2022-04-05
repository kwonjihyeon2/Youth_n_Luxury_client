import * as S from './MyList.styles'

export default function MyListUI(props) {
  console.log(props.data)
  return (
    <>
      <S.Wrapper>
        <S.HeaderTxtBox>
          <S.HeaderTxt>
            {props.isWishList ? `위시리스트` : `최근 본 상품`}
          </S.HeaderTxt>
          {props.isWishList ? (
            <S.HeaderNum>
              {props.data?.fetchProductLike.length || '0'}
            </S.HeaderNum>
          ) : (
            <S.HeaderNum>{props.isSaw.length || '0'}</S.HeaderNum>
          )}
        </S.HeaderTxtBox>
        <S.SelectBtnBox>
          <S.SelectAllBox>
            <S.SelectAllCheckBox type="checkbox"></S.SelectAllCheckBox>
            <S.SelectAllTxt>전체선택</S.SelectAllTxt>
          </S.SelectAllBox>
          <S.SelectDeleteBtn>선택삭제</S.SelectDeleteBtn>
        </S.SelectBtnBox>
        <S.ProductBox>
          {!props.isWishList
            ? props.isSaw.map((el) => (
                <S.Product>
                  <S.ProductImg src={`${el.urls[0]}`}></S.ProductImg>
                  <S.ProductRightContent>
                    <S.ProductTopCol>
                      <S.ProductTopRow>
                        <S.ProductCheckBox type="checkbox"></S.ProductCheckBox>
                        <S.ProductName>{el.name}</S.ProductName>
                      </S.ProductTopRow>
                      <S.Price>{el.price + '원'}</S.Price>
                    </S.ProductTopCol>
                    <S.ProductBtnBox>
                      <S.TopBtnBox>
                        <S.BasketBtn>장바구니담기</S.BasketBtn>
                        <S.DeleteBtn>삭제</S.DeleteBtn>
                      </S.TopBtnBox>
                      <S.BuyBtn>바로구매하기</S.BuyBtn>
                    </S.ProductBtnBox>
                  </S.ProductRightContent>
                </S.Product>
              ))
            : props.data?.fetchProductLike.map((el) => (
                <S.Product>
                  <S.ProductImg src={`${el.urls[0]}`}></S.ProductImg>
                  <S.ProductRightContent>
                    <S.ProductTopCol>
                      <S.ProductTopRow>
                        <S.ProductCheckBox type="checkbox"></S.ProductCheckBox>
                        <S.ProductName>{el.name}</S.ProductName>
                      </S.ProductTopRow>
                      <S.Price>{el.price || +'원'}</S.Price>
                    </S.ProductTopCol>
                    <S.ProductBtnBox>
                      <S.TopBtnBox>
                        <S.BasketBtn>장바구니담기</S.BasketBtn>
                        <S.DeleteBtn>삭제</S.DeleteBtn>
                      </S.TopBtnBox>
                      <S.BuyBtn>바로구매하기</S.BuyBtn>
                    </S.ProductBtnBox>
                  </S.ProductRightContent>
                </S.Product>
              ))}
        </S.ProductBox>
      </S.Wrapper>
    </>
  )
}
