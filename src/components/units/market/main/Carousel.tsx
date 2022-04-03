import styled from '@emotion/styled'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'

const Img = styled.div`
  width: 100%;

  & img {
    width: 100%;
    height: 400px;
  }
`
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
}
export const Wrapper = styled.div`
  width: 100%;
  height: 440px;
`

export default function Carousel() {
  return (
    <>
      <Wrapper>
        <Slider {...settings}>
          <Img>
            <img src="/images/MainCarouselImg1.png" />
          </Img>
          <Img>
            <img src="/images/MainCarouselImg2.png" />
          </Img>
          <Img>
            <img src="/images/MainCarouselImg3.png" />
          </Img>
        </Slider>
      </Wrapper>
    </>
  )
}
