import styled from '@emotion/styled'
import { useState } from 'react'
import { RightOutlined } from '@ant-design/icons'

const Wrapper = styled.div`
  width: 300px;
  height: 100%;
  position: absolute;
  transition: 0.5s;
  left: ${(props) => (props.isTrue === true ? '0px' : '-300px')};
  display: flex;
  flex-direction: column;
  align-items: center;
`

const WrapperTop = styled.div`
  width: 250px;
  display: flex;
  margin-top: 20px;
  align-items: center;
  padding-bottom: 20px;
  border-bottom: 1px solid black;
`

const LoginBtn = styled.button`
  margin-right: 10px;
  height: 30px;
  cursor: pointer;
  color: white;
  border: none;
  background-color: #2f2f2f;
`

const SigninBtn = styled.button`
  height: 30px;
  cursor: pointer;
  color: white;
  border: none;
  background-color: #2f2f2f;
`

const LoginText = styled.div`
  margin-right: 40px;
`

const WelcomeText = styled.div`
  margin-right: 25px;
`

const WrapperMid = styled.div`
  width: 250px;
  display: flex;
  margin-top: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid black;
`

const WrapperIcon1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 10px;
`
const WrapperIcon2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 10px;
`
const WrapperIcon3 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 10px;
`
const WrapperIcon4 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Icon1Img = styled.div`
  width: 20px;
  height: 20px;
  background-color: red;
  margin-bottom: 10px;
`
const Icon2Img = styled.div`
  width: 20px;
  height: 20px;
  background-color: red;
  margin-bottom: 10px;
`
const Icon3Img = styled.div`
  width: 20px;
  height: 20px;
  background-color: red;
  margin-bottom: 10px;
`
const Icon4Img = styled.div`
  width: 20px;
  height: 20px;
  background-color: red;
  margin-bottom: 10px;
  cursor: pointer;
`

const IconText = styled.div`
  cursor: pointer;
`

const WrapperBot = styled.div`
  width: 250px;
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  margin-bottom: 40px;
`

const WrapperNavi = styled.div`
  display: flex;
  margin-bottom: 30px;
  align-items: center;
`

const BrnadText = styled.div`
  margin-left: 15px;
  padding: 5px;
  cursor: pointer;
`
const WrapperHelp = styled.div`
  display: flex;
  flex-direction: column;
  text-align: start;
`

const PhoneText = styled.div`
  font-size: 24px;
  margin-top: 5px;
`

const OpenTime = styled.div`
  margin-top: 5px;
  margin-bottom: 5px;
`

const HelpBtn = styled.button`
  margin-top: 15px;
  border: none;
  height: 35px;
  background-color: #2f2f2f;
  color: white;
  cursor: pointer;
`

const MenuBtn = styled.div`
  left: ${(props) => (props.isTrue === true ? '300px' : '0px')};
  transition: 0.5s;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 35px;
  width: 35px;
  cursor: pointer;
  &:hover :nth-of-type(1) {
    transform: rotate(360deg);
    transition: 1s;
  }
  &:hover :nth-of-type(2) {
    transform: rotate(360deg);
    transition: 0.8s;
  }
  &:hover :nth-of-type(3) {
    transform: rotate(360deg);
    transition: 0.6s;
  }
  &:hover :nth-of-type(4) {
    transform: rotate(360deg);
    transition: 0.4s;
  }
  span {
    border-bottom: 2px solid black;
    width: 20px;
    margin-bottom: 5px;
  }
`
const BtnLine1 = styled.span`
  margin-top: 5px;
`
const BtnLine2 = styled.span``
const BtnLine3 = styled.span``
const BtnLine4 = styled.span``

// overflow: auto 스크롤생성
// span 태그로 작대기 3개 만들고
// position: absolute;
// display: block;
// tarnsform: rotate(45deg) 로 막대기 움직이게 하기
// transition-delay: .2s ~몇초뒤에 실행해라
// transition: .5s ~몇초안에 실행해라

export default function LayoutSidebar() {
  const [isTrue, setIsTrue] = useState(false)

  const onClickOpen = () => {
    setIsTrue((prev) => !prev)
  }
  return (
    <>
      <Wrapper isTrue={isTrue}>
        <WrapperTop>
          <LoginText>로그인하세요.</LoginText>
          {/* <WelcomeText>??님</WelcomeText> */}
          <LoginBtn>로그인</LoginBtn>
          <SigninBtn>회원가입</SigninBtn>
        </WrapperTop>
        <WrapperMid>
          <WrapperIcon1>
            <Icon1Img></Icon1Img>
            <IconText>주문조회</IconText>
          </WrapperIcon1>
          <WrapperIcon2>
            <Icon2Img></Icon2Img>
            <IconText>회원정보</IconText>
          </WrapperIcon2>
          <WrapperIcon3>
            <Icon3Img></Icon3Img>
            <IconText>1:1문의</IconText>
          </WrapperIcon3>
          <WrapperIcon4>
            <Icon4Img></Icon4Img>
            <IconText>CS게시판</IconText>
          </WrapperIcon4>
        </WrapperMid>
        <WrapperBot>
          <WrapperNavi>
            <RightOutlined />
            <BrnadText>구찌</BrnadText>
          </WrapperNavi>
          <WrapperNavi>
            <RightOutlined />
            <BrnadText>버버리</BrnadText>
          </WrapperNavi>
          <WrapperNavi>
            <RightOutlined />
            <BrnadText>에르메스</BrnadText>
          </WrapperNavi>
          <WrapperNavi>
            <RightOutlined />
            <BrnadText>샤넬</BrnadText>
          </WrapperNavi>
          <WrapperNavi>
            <RightOutlined />
            <BrnadText>루이비통</BrnadText>
          </WrapperNavi>
          <WrapperNavi>
            <RightOutlined />
            <BrnadText>프라다</BrnadText>
          </WrapperNavi>
        </WrapperBot>
        <WrapperHelp>
          <PhoneText>CS CENTER</PhoneText>
          <PhoneText>02-000-0000</PhoneText>
          <OpenTime>WEEKDAY: 10:10 ~ 20:00</OpenTime>
          <OpenTime>WEEKEND: 12:00 ~ 19:00</OpenTime>
          <HelpBtn>고객센터</HelpBtn>
        </WrapperHelp>
      </Wrapper>

      <MenuBtn isTrue={isTrue} onClick={onClickOpen}>
        <BtnLine1></BtnLine1>
        <BtnLine2></BtnLine2>
        <BtnLine3></BtnLine3>
        <BtnLine4></BtnLine4>
      </MenuBtn>
    </>
  )
}
