import styled from '@emotion/styled'
import { breakPoints } from '../../../commons/utils/media'
export const Position = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  overflow: hidden;
  align-items: center;
`
export const Wrapper = styled.div`
  width: 100%;
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
  @media ${breakPoints.mobile} {
    margin-bottom: 0;
  }
`
export const ResponsiveBox = styled.div`
  width: 100%;
  max-width: 1200px;
  padding: 0 60px;
  @media ${breakPoints.mobile} {
    padding: 0;
  }
`

export const Carousel = styled.div`
  width: 100%;
  height: 530px;
  background-image: url(/images/MainCarouselImg1.png);
  background-size: cover;
  font-size: 40px;
  font-weight: 400;
  color: #fffbfbbf;
  position: relative;
  @media ${breakPoints.mobile} {
    height: 230px;
  }
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
  max-width: 1200px;
  width: 100%;
  height: 56px;
  margin: 80px 0 32px 8px;
  align-items: center;
  @media ${breakPoints.mobile} {
    margin: 20px 0;
    flex-direction: column;
    height: auto;
  }
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
  @media ${breakPoints.mobile} {
    margin-left: 0px;
    margin-top: 5px;
  }
`

export const ProductBox = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`
export const Product = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  margin-bottom: 48px;
  align-items: center;
  @media ${breakPoints.mobile} {
    width: 48%;
  }
`
export const ProductImg = styled.div`
  width: 100%;
  height: 374px;
  background-color: gray;
  margin-bottom: 12px;
  @media ${breakPoints.mobile} {
    height: 200px;
  }
`

export const ProductTxt = styled.div`
  font-weight: 400;
  font-size: 18px;
  margin-top: 8px;
  @media ${breakPoints.mobile} {
    font-size: 14px;
    margin-top: 5px;
  }
`

export const LoadBtn = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const LoadMoreBtn = styled.button`
  width: 196px;
  height: 33px;
  border: 1px solid #393939;
  font-size: 12px;
  font-weight: 400;
  background-color: white;
  margin-top: 40px;
  margin-bottom: 334px;
`
