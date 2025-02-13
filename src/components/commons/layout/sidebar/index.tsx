import styled from '@emotion/styled'
import { useState } from 'react'
import { RightOutlined } from '@ant-design/icons'
import { useRouter } from 'next/router'
import { gql, useMutation, useQuery } from '@apollo/client'

interface Status {
  isTrue: boolean
}

const Position = styled.div`
  height: 100vh;
  position: fixed;
  top: 0px;
  z-index: 30000;
`
const Wrapper = styled.div`
  width: 300px;
  height: 100%;
  position: absolute;
  transition: 0.5s;
  left: ${(props: Status) => (props.isTrue === true ? '0px' : '-300px')};
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f2f2f2;
  overflow: scroll;
`

const WrapperTop = styled.div`
  display: flex;
  flex-direction: column;
  width: 250px;
  display: flex;
  margin-top: 20px;
  align-items: center;
  padding-bottom: 20px;
  border-bottom: 1px solid black;
  div {
    display: flex;
    flex-direction: row;
  }
`

const LoginBtn = styled.button`
  width: 80px;
  font-size: 14px;
  margin-right: 10px;
  height: 30px;
  cursor: pointer;
  color: white;
  border: none;
  background-color: #2f2f2f;
  :hover {
    color: #7a36ff;
  }
`

const SigninBtn = styled.button`
  width: 80px;
  font-size: 14px;
  height: 30px;
  cursor: pointer;
  color: white;
  border: none;
  background-color: #2f2f2f;
  :hover {
    color: #7a36ff;
  }
`

const LoginText = styled.div`
  display: flex;
  justify-content: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`

const WelcomeText = styled.div`
  display: flex;
  justify-content: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`

const WrapperMid = styled.div`
  width: 250px;
  display: flex;
  margin-top: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid black;
  justify-content: center;
  align-items: center;
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

const Icon1Img = styled.img`
  width: 20px;
  height: 20px;
  margin-bottom: 10px;
  cursor: pointer;
`
const Icon2Img = styled.img`
  width: 20px;
  height: 20px;
  margin-bottom: 10px;
  cursor: pointer;
`
const Icon3Img = styled.img`
  width: 20px;
  height: 20px;
  margin-bottom: 10px;
  cursor: pointer;
`
const Icon4Img = styled.img`
  width: 20px;
  height: 20px;
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
  left: ${(props: Status) => (props.isTrue === true ? '300px' : '0px')};
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
const WpapperTopMid = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

// overflow: auto 스크롤생성
// span 태그로 작대기 3개 만들고
// position: absolute;
// display: block;
// tarnsform: rotate(45deg) 로 막대기 움직이게 하기
// transition-delay: .2s ~몇초뒤에 실행해라
// transition: .5s ~몇초안에 실행해라

const FETCH_USER = gql`
  query fetchUser {
    fetchUser {
      nickname
    }
  }
`

const JOIN_SELLER = gql`
  query joinSeller {
    joinSeller {
      event_id
      roomId
    }
  }
`
const LOGOUT = gql`
  mutation logout {
    logout
  }
`

export default function LayoutSidebar() {
  const { data } = useQuery(FETCH_USER)
  const router = useRouter()
  const [isTrue, setIsTrue] = useState(false)

  const onClickOrder = () => {
    router.push(`/mypage/myShopping/transaction`)
  }
  const onClickUserInfo = () => {
    router.push(`/mypage/myInfo/editUser`)
  }

  const { data: join } = useQuery(JOIN_SELLER)
  const onClickQuery = () => {
    console.log(join)
    router.push(`/market/chatting`)
  }

  const onClickCreateProduct = () => {
    router.push(`/market/new`)
  }
  const onClickJoin = () => {
    router.push(`/join`)
  }

  const onClickLogin = () => {
    router.push(`/login`)
  }
  const onclickMoveToList = () => {
    router.push(`/market/list`)
  }
  const [logout] = useMutation(LOGOUT)
  const onClickLogout = () => {
    logout()
    console.log('로그아웃되었습니다. 메인페이지로 이동합니다')
    router.push('/')
  }
  const onClickOpen = () => {
    setIsTrue((prev) => !prev)
  }
  return (
    <>
      <Position>
        <Wrapper isTrue={isTrue}>
          <WrapperTop>
            {data?.fetchUser.nickname === undefined ? (
              <LoginText onClick={onClickLogin}>로그인해주세요.</LoginText>
            ) : (
              <WelcomeText>{data?.fetchUser.nickname}님환영합니다!</WelcomeText>
            )}
            <WpapperTopMid>
              {data?.fetchUser.nickname === undefined ? (
                <LoginBtn onClick={onClickLogin}>로그인</LoginBtn>
              ) : (
                <LoginBtn onClick={onClickLogout}>로그아웃</LoginBtn>
              )}
              {data?.fetchUser.nickname === undefined ? (
                <SigninBtn onClick={onClickJoin}>회원가입</SigninBtn>
              ) : (
                ''
              )}
            </WpapperTopMid>
          </WrapperTop>
          <WrapperMid>
            <WrapperIcon1>
              <Icon1Img onClick={onClickOrder} src="/images/sidebar/cart.png" />
              <IconText onClick={onClickOrder}>거래내역</IconText>
            </WrapperIcon1>
            <WrapperIcon2>
              <Icon2Img
                onClick={onClickUserInfo}
                src="/images/sidebar/info.png"
              />
              <IconText onClick={onClickUserInfo}>나의정보</IconText>
            </WrapperIcon2>
            <WrapperIcon3>
              <Icon3Img
                onClick={onClickQuery}
                src="/images/sidebar/alert.png"
              />
              <IconText onClick={onClickQuery}>1:1채팅</IconText>
            </WrapperIcon3>
            <WrapperIcon4>
              <Icon4Img
                onClick={onClickCreateProduct}
                src="/images/sidebar/product.png"
              />
              <IconText onClick={onClickCreateProduct}>상품등록</IconText>
            </WrapperIcon4>
          </WrapperMid>
          <WrapperBot>
            <WrapperNavi onClick={onclickMoveToList}>
              <RightOutlined />
              <BrnadText>구찌</BrnadText>
            </WrapperNavi>
            <WrapperNavi onClick={onclickMoveToList}>
              <RightOutlined />
              <BrnadText>버버리</BrnadText>
            </WrapperNavi>
            <WrapperNavi onClick={onclickMoveToList}>
              <RightOutlined />
              <BrnadText>에르메스</BrnadText>
            </WrapperNavi>
            <WrapperNavi onClick={onclickMoveToList}>
              <RightOutlined />
              <BrnadText>샤넬</BrnadText>
            </WrapperNavi>
            <WrapperNavi onClick={onclickMoveToList}>
              <RightOutlined />
              <BrnadText>루이비통</BrnadText>
            </WrapperNavi>
            <WrapperNavi onClick={onclickMoveToList}>
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
      </Position>
    </>
  )
}
