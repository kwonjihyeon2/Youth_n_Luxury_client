import SideBar from '../../../units/market/myPage/sideBar/SideBar.container'
import styled from '@emotion/styled'
import WelcomeBox from '../../../units/market/myPage/welcomeBox/WelcomeBox.container'
import { ReactChild } from 'react'
const Position = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`
const Wrapper = styled.div`
  width: 1200px;
  display: flex;
`
const RightContainer = styled.div`
  width: 794px;
  display: flex;
  flex-direction: column;
  margin-left: 39px;
`
interface IMyPageLayout {
  children: ReactChild
}

export default function MyPageLayout(props: IMyPageLayout) {
  return (
    <Position>
      <SideBar />
      <RightContainer>
        <WelcomeBox />
        {props.children}
      </RightContainer>
    </Position>
  )
}
