// import Carousel from './Carousel'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
import * as S from './Main.styles'
import { useMoveToPage } from '../../../commons/hooks/useMoveToPage'

export default function MainUI(props) {
  const { moveToPage } = useMoveToPage()

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
          <S.ResponsiveBox>
            <S.NewArrivalsTxtBox>
              <S.NewArrivalsTitleTxt>New Arrivals</S.NewArrivalsTitleTxt>
              <S.NewArrivalsSubTxt>
                새로 입고된 아이템들을 만나보세요!
              </S.NewArrivalsSubTxt>
            </S.NewArrivalsTxtBox>

            <S.ProductBox>
              {props.NewArrival?.map((el) => (
                <S.Product onClick={moveToPage(`market/${el.id}`)}>
                  <S.ProductImg />
                  <S.ProductTxt>{el.name}</S.ProductTxt>
                  <S.ProductTxt>{el.price}원</S.ProductTxt>
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
              {new Array(12).fill(1).map((el) => (
                <S.Product>
                  <S.ProductImg />
                  <S.ProductTxt>샤넬 가방 나도사고싶어</S.ProductTxt>
                  <S.ProductTxt>24,500,000원</S.ProductTxt>
                </S.Product>
              ))}
            </S.ProductBox>

            <S.LoadBtn>
              <S.LoadMoreBtn>더보기</S.LoadMoreBtn>
            </S.LoadBtn>
          </S.ResponsiveBox>
        </S.Wrapper>
      </S.Position>
    </>
  )
}
