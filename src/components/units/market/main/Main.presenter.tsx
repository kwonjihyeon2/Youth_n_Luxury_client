// import Carousel from './Carousel'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'

import * as S from './Main.styles'
export default function MainUI() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  }
  return (
    <>
      <S.Position>
        <S.Wrapper>
          <S.CarouselBox>
            <Slider {...settings}>
              <S.Carousel>
                <S.CarouselTxt>전 상품 100% 정품 보장</S.CarouselTxt>
              </S.Carousel>
              <S.Carousel>
                <S.CarouselTxt>전 상품 100% 정품 보장</S.CarouselTxt>
              </S.Carousel>
            </Slider>
          </S.CarouselBox>
          <S.NewArrivalsTxtBox>
            <S.NewArrivalsTitleTxt>New Arrivals</S.NewArrivalsTitleTxt>
            <S.NewArrivalsSubTxt>
              새로 입고된 아이템들을 만나보세요!
            </S.NewArrivalsSubTxt>
          </S.NewArrivalsTxtBox>

          <S.ProductBox>
            {new Array(9).fill(0).map(() => (
              <S.Product>
                <S.ProductImg />
                <S.ProductTxt>
                  샤넬 유광 그레인드 카프스킨, 골드메탈 ..
                </S.ProductTxt>
                <S.ProductTxt>24,500,000원</S.ProductTxt>
              </S.Product>
            ))}
          </S.ProductBox>
          {/* <S.BannerChanelImg src="/images/MainPgChanelBannerImg.png" /> */}
          <S.NewArrivalsTxtBox>
            <S.NewArrivalsTitleTxt>BEST PRODUCT</S.NewArrivalsTitleTxt>
            <S.NewArrivalsSubTxt>
              지금 핫한 상품들을 만나보세요!
            </S.NewArrivalsSubTxt>
          </S.NewArrivalsTxtBox>
          <S.ProductBox>
            {new Array(9).fill(0).map(() => (
              <S.Product>
                <S.ProductImg />
                <S.ProductTxt>
                  샤넬 유광 그레인드 카프스킨, 골드메탈 ..
                </S.ProductTxt>
                <S.ProductTxt>24,500,000원</S.ProductTxt>
              </S.Product>
            ))}
          </S.ProductBox>

          <S.LoadMoreBtn>더보기</S.LoadMoreBtn>
        </S.Wrapper>
      </S.Position>
    </>
  )
}
