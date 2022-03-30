import styled from '@emotion/styled'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
import { FiHeart } from 'react-icons/fi'
import { BsSuitHeartFill } from 'react-icons/bs'
import { LeftOutlined, RightOutlined } from '@ant-design/icons'
import { keyframes } from '@emotion/react'

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
  font-size: 1.75rem;
  padding: 40px 0 15px 0;
  text-align: center;
`

export const Titleprice = styled.div`
  padding: 20px 0 10px 0;
  border-bottom: 1px solid #c4c4c4;
  margin-bottom: 10px;
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

export const PageContainer = styled.div`
  width: 580px;
`

export const PagingSlickBox = styled(Slider)`
  padding: 0 20px;
  .anticon {
    width: 20px;
    height: 100%;
    padding: 5px;
    top: 50%;
    background: #fff;
    border: 1px solid rgba(196, 196, 196, 0.4);
    &:hover {
      color: #000;
    }
  }
  .anticon svg {
    width: 100%;
    height: 100%;
  }
  .slick-prev {
    left: 0;
    color: #000;
  }
  .slick-next {
    right: 0;
    color: #000;
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

export const NextButton = styled(RightOutlined)`
  width: 100%;
  height: 100%;
`

export const PreviousButton = styled(LeftOutlined)`
  width: 100%;
  height: 100%;
`

export const ButtonFlexBox = styled.div`
  display: flex;
  justify-content: space-between;
  button {
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
  }
`

export const ButtonBlackStyle = styled.button`
  background-color: black !important;
  color: #fff;
`

export const PhoneIconSpan = styled.span`
  width: 16px;
  height: 16px;
  background: url('/detail/Group.png') center;
  background-size: contain;
  margin-left: 5px;
`

interface propsIsHeart {
  isHeart: boolean
}

export const HeartIconSpan = styled.span`
  width: 19px;
  height: 16px;
  background: ${(props: propsIsHeart) =>
      props.isHeart ? "url('/detail/redHeart.png')" : "url('/detail/Like.png')"}
    center;
  background-size: cover;
  margin-left: 5px;
`

export const ButtonStyle = styled.button`
  &:hover {
    span {
      background: url('/detail/blackphone.png') center;
      background-size: cover;
    }
  }
`

export const ButtonRightStyle = styled.button`
  &:hover {
    span {
      /* background: url('/detail/BlackLike.png') center; */
      background: ${(props: propsIsHeart) =>
          props.isHeart
            ? "url('/detail/redHeart.png')"
            : "url('/detail/BlackLike.png')"}
        center;
      background-size: cover;
    }
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
  position: relative;
`
export const RedCount = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 100%;
  background-color: #ce0909;
  color: #fff;
  line-height: 10px;
  font-size: 8px;
  font-weight: 600;
  text-align: center;
  position: absolute;
  top: 2px;
  right: -2px;
`

interface propsIsShare {
  isShare: boolean
}

export const KakaoButton = styled.div`
  /* display: flex; */
  display: ${(props: propsIsShare) => (props.isShare ? 'flex' : 'none')};
  position: absolute;
  top: 130%;
  right: -100px;
  width: 100px;
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
  padding: 0px 20px;
  .slick-slide {
    padding: 0 10px;
  }
  .anticon {
    width: 20px;
    height: 80%;
    top: 40%;
    padding: 5px;
    background: #fff;
    border: 1px solid rgba(196, 196, 196, 0.4);
    &:hover {
      color: #000;
    }
  }
  .anticon svg {
    width: 100%;
    height: 100%;
  }
  .slick-prev {
    left: 0;
    color: #000;
  }
  .slick-next {
    right: 0;
    color: #000;
  }
  .slick-prev:before,
  .slick-next:before {
    /* color: black; */
    font-size: 50px;
  }
  p {
    margin: 0;
    padding: 5px 0;
  }
`

export const SlickStyle = styled.div`
  margin-bottom: 85px;
`

export const SliderBox = styled.div`
  height: 200px;
  width: 100%;
  background-color: #bdbdbd;
`
export const RelativeTitle = styled.div`
  font-size: 1rem;
  padding: 15px;
  font-weight: 300;
  background-color: #f8f8f8;
  border-bottom: 1px solid #c4c4c4;
  margin-bottom: 50px;
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

export const WrapperSellerInfo = styled.div`
  display: ${(props: propsIsOpen) => (props.isOpen ? 'block' : 'none')};
  position: fixed;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
`
const boxOpen = keyframes`
  from{
    display : block;
    opacity : 100%;
  }
  to{
    display : none;
    opacity : 0;
  }
`

export const HeartBox = styled.div`
  display: ${(props: propsIsHeart) => (props.isHeart ? 'block' : 'none')};
  opacity: 0;
  position: fixed;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 200px;
  height: 220px;
  animation: ${boxOpen};
  animation-duration: 3.5s;
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

export const ButtonBox = styled.div`
  text-align: center;
  button {
    cursor: pointer;
  }
`
export const ListButton = styled.button`
  width: 200px;
  padding: 10px;
  background-color: #fff;
  border: 1px solid #000;
`
export const CancelBtn = styled.button`
  width: 100px;
  padding: 10px 0;
  margin: 25px 0;
  border: 1px solid #000;
  background-color: #fff;
`
export const EditBtn = styled.button`
  width: 100px;
  padding: 10px 0;
  margin: 25px 0;
  margin-right: 10px;
  border: 1px solid #000;
  background-color: #000;
  color: white;
`
