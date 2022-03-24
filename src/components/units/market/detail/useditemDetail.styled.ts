import styled from '@emotion/styled'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
import { FiHeart } from 'react-icons/fi'
import { BsSuitHeartFill } from 'react-icons/bs'
import { HeartOutlined, PhoneOutlined } from '@ant-design/icons'

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  font-size: 14px;
`

export const WrapperBody = styled.div`
  max-width: 1200px;
  width: 100%;
  padding: 60px;
`

export const WrapperTitle = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`
export const TitleStyle = styled.p`
  font-size: 26px;
  padding-top: 55px;
  text-align: center;
`

export const Titleprice = styled.div`
  padding-bottom: 5px;
  border-bottom: 1px solid #c4c4c4;
  margin-bottom: 15px;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 1.5rem;
  justify-content: space-between;
`
export const MyRightBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 10px 0;
`

export const ShareButton = styled.button`
  display: flex;
  align-items: center;
  margin-right: 10px;
  background-color: #fff;
  border: none;
`

export const SelectBox = styled.div`
  width: 100%;
  display: flex;
  padding: 0px 80px;
  justify-content: center;
`

export const Selectcontents = styled.div`
  padding: 10px 100px;
  border: 1px solid #bdbdbd;
  border-bottom: none;
`

export const ContentsBox = styled.div`
  text-align: center;
  margin: 100px 0;
  border-top: 1px solid #bdbdbd;
`

export const TitleImg = styled.img`
  width: 100%;
`

export const WrapperBodyUl = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space;
  padding: 0;
  margin: 0;
  margin-right: 30px;
`

export const PriceStyle = styled.div`
  font-weight: 500;
  font-size: 30px;
  list-style: none;
  margin-bottom: 10px;
`

export const PriceResult = styled.div`
  margin: 1.5rem 0;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
`

export const ButtonStyle = styled.button`
  width: 150px;
  margin: 0 5px;
  padding: 15px 0;
  font-size: 16px;
  background-color: white;
  border: 1px solid #c4c4c4;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`

export const PageContainer = styled.div`
  width: 580px;
`

export const PagingSlickBox = styled(Slider)`
  padding: 0 10px;
  .slick-next,
  .slick-prev {
    color: black;
  }
`

export const PagingSlick = styled.div`
  width: 580px;
  height: 470px;
  background-color: #f4f4f4;
  margin-bottom: 20px;
`

export const PagingSmallSlick = styled.div`
  width: auto;
  height: 95px;
  margin: 0px 10px;
  background-color: #f4f4f4;
`

export const ButtonBlackStyle = styled.button`
  width: 150px;
  font-size: 16px;
  padding: 15px 0;
  background-color: black;
  color: white;
  border: 1px solid #000;
  cursor: pointer;
`

export const PhoneIconSpan = styled.span`
  width: 16px;
  height: 16px;

  background: url('/detail/Like.png') center;
  background-size: cover;
  &:hover {
    background: url('/detail/BlackLike.png');
  }
`

export const FiHeartIcon = styled(FiHeart)`
  color: black;
`

export const PriceStyleColor = styled.div`
  font-size: 32px;
  font-weight: 300;
  position: relative;
`
export const VerifyBox = styled.span`
  width: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  font-size: 10px;
  top: 0px;
  right: -105px;
  padding: 5px 0;
  border-radius: 12px;
  background-color: #ffbb0b;
`

export const FlexPocket = styled.div`
  display: flex;
`

export const IconBox = styled.div`
  display: flex;
  align-items: center;
  margin-left: 10px;
  font-size: 24px;
`

export const WrapperLiStyle = styled.li`
  padding: 5px 0;
  list-style: none;
  font-size: 14px;
  color: gray;
`

export const ContentsImg = styled.img`
  width: 500px;
`

export const SliderContainer = styled(Slider)`
  padding: 20px 50px;
  .slick-slide {
    padding: 0 10px;
  }
  .slick-prev,
  .slick-next {
    top: 45%;
    z-index: 999;
  }
  .slick-prev {
    left: 0px;
  }
  .slick-next {
    right: 4%;
  }
  .slick-prev:before,
  .slick-next:before {
    color: black;
    font-size: 50px;
  }
`

export const SliderBox = styled.div`
  height: 200px;
  width: 200px;
  background-color: #bdbdbd;
`
export const RelativeTitle = styled.div`
  font-size: 1rem;
  padding: 15px;
  font-weight: 300;
  background-color: #f8f8f8;
  border-bottom: 1px solid #c4c4c4;
`

export const SellerBox = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  div {
    margin-right: 15px;
  }
  font-weight: 500;
`

export const SellerProfile = styled.div`
  width: 55px;
`

export const SellerProduct = styled.div`
  background-color: #bdbdbd;
  margin-right: 10px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding-bottom: 10px;
  width: 80px;
  font-size: 14px;
  color: white;
  height: 80px;
`

interface propsIsOpen {
  isOpen: boolean
}

interface propsIsHeart {
  isHeart: boolean
}
export const WrapperSellerInfo = styled.div`
  display: ${(props: propsIsOpen) => (props.isOpen ? 'block' : 'none')};
  position: fixed;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
`

export const HeartBox = styled.div`
  display: ${(props: propsIsHeart) => (props.isHeart ? 'block' : 'none')};
  position: fixed;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 200px;
  height: 220px;
`
export const HeartOnbox = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  padding: 30px 0px;
  border-radius: 20px;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`

export const HeartFill = styled(BsSuitHeartFill)`
  color: red;
  margin-bottom: 10px;
`
export const ProfileBox = styled.div`
  width: 100%;
  border-top: 1px solid #333;
  border-bottom: 1px solid #333;
  padding: 15px 20px;
  margin-top: 25px;
  background-color: #f4f4f4;
`

export const SellerRate = styled.div`
  display: flex;
  flex-direction: column;
  .ant-rate li {
    font-size: 14px;
  }
  .ant-rate li div {
    font-size: 14px;
    margin-right: 0;
  }
`
