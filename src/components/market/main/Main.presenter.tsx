import * as S from './Main.styles';

export default function MainUI() {
  return (
    <>
      <S.Wrapper>
        <S.Carousel></S.Carousel>
        <S.PerfectTxtBox>
          <S.PerfectMainTxt>
            SOSO의 모든 상품은 완벽한 정품입니다.
          </S.PerfectMainTxt>
          <S.PerfectSubTxt>
            2022년 설립되어 지금까지 많은 판매실적을 보유하고 있습니다.
          </S.PerfectSubTxt>
        </S.PerfectTxtBox>
        <S.BrandImg />
        <S.UpdateProductBox>
          <S.UpdateProductTxt>UPDATE PRODUCT</S.UpdateProductTxt>
        </S.UpdateProductBox>
        <S.ProductWrapper>
          {new Array(12).fill(0).map(() => (
            <S.ProductBox>
              <S.ProductImg></S.ProductImg>

              <S.ProductTxtBox>
                <S.ProductTitleTxt>
                  에르메스 켈리 세리에 28CM 앱솜...
                </S.ProductTitleTxt>
                <S.ProductPriceTxt>24,500,000원</S.ProductPriceTxt>
              </S.ProductTxtBox>
            </S.ProductBox>
          ))}
        </S.ProductWrapper>
        <S.BagUpdateImg />
        <S.ProductWrapper>
          {new Array(12).fill(0).map(() => (
            <S.ProductBox>
              <S.ProductImg></S.ProductImg>

              <S.ProductTxtBox>
                <S.ProductTitleTxt>
                  에르메스 켈리 세리에 28CM 앱솜...
                </S.ProductTitleTxt>
                <S.ProductPriceTxt>24,500,000원</S.ProductPriceTxt>
              </S.ProductTxtBox>
            </S.ProductBox>
          ))}
        </S.ProductWrapper>
        <S.SheLovesImg />
      </S.Wrapper>
    </>
  );
}
