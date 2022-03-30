import styled from '@emotion/styled'
export const Position = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  overflow: hidden;
  align-items: center;
`
export const Wrapper = styled.div`
  width: 1200px;
  flex-direction: column;
  align-items: center;
  display: flex;
  /* overflow: hidden; */
`
export const CarouselBox = styled.div`
  width: 100%;
  /* height: 440px; */
  margin-bottom: 100px;
  .slick-dots {
    bottom: 25px;
    li button:before {
      color: #efefef73;
    }
  }
`
// export const BannerChanelImg = styled.img`
//   width: 100vw;
// `

export const Carousel = styled.div`
  width: 100%;
  height: 530px;
  background-image: url(/images/MainCarouselImg1.png);
  background-size: cover;
  font-size: 40px;
  font-weight: 400;
  color: #fffbfbbf;
  position: relative;
`
export const CarouselTxt = styled.div`
  font-size: 40px;
  font-weight: 400;
  color: #fffbfbbf;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

export const NewArrivalsTxtBox = styled.div`
  display: flex;
  width: 1078px;
  height: 56px;
  margin-top: 80px;
  align-items: center;
  margin-bottom: 32px;
  margin-left: 8px;
`
export const NewArrivalsTitleTxt = styled.div`
  font-weight: 400;

  font-size: 34px;
`

export const NewArrivalsSubTxt = styled.div`
  font-weight: 400;
  color: #999999;
  font-size: 15px;
  margin-left: 15px;
`

export const ProductBox = styled.div`
  width: 1020px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`
export const Product = styled.div`
  width: 320px;
  display: flex;
  flex-direction: column;
  margin-bottom: 48px;
  align-items: center;
`
export const ProductImg = styled.div`
  width: 320px;
  height: 374px;
  background-color: gray;
  margin-bottom: 12px;
`

export const ProductTxt = styled.div`
  font-weight: 400;
  font-size: 18px;
  margin-top: 8px;
`
export const LoadMoreBtn = styled.button`
  width: 196px;
  height: 33px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #393939;
  font-size: 12px;
  font-weight: 400;
  background-color: white;
  margin-top: 40px;
  margin-bottom: 334px;
`
