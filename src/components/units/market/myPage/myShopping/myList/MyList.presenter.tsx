import * as S from './MyList.styles'

export default function MyListUI() {
  return (
    <>
      <S.Wrapper>
        <S.HeaderTxtBox>
          <S.HeaderTxt>위시리스트</S.HeaderTxt>
          <S.HeaderNum>2</S.HeaderNum>
        </S.HeaderTxtBox>
        <S.SelectBtnBox>
          <S.SelectAllBox>
            <S.SelectAllCheckBox type="checkbox"></S.SelectAllCheckBox>
            <S.SelectAllTxt>전체선택</S.SelectAllTxt>
          </S.SelectAllBox>
          <S.SelectDeleteBtn>선택삭제</S.SelectDeleteBtn>
        </S.SelectBtnBox>
        <S.ProductBox>
          {new Array(10).fill(0).map(() => (
            <S.Product>
              <S.ProductImg></S.ProductImg>
              <S.ProductRightContent>
                <S.ProductTopCol>
                  <S.ProductTopRow>
                    <S.ProductCheckBox type="checkbox"></S.ProductCheckBox>
                    <S.ProductName>샤넬 유광 그레인드 카프스킨..</S.ProductName>
                  </S.ProductTopRow>
                  <S.Price>24,500,000원</S.Price>
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
