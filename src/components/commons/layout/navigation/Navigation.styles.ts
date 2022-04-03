import styled from '@emotion/styled'
import { breakPoints } from '../../utils/media'

export const Position = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 0 60px;
`
export const LogoImg = styled.img`
  margin-left: 225px;
  :hover {
    cursor: pointer;
  }
`

export const Wrapper = styled.div`
  max-width: 1200px;
  width: 100%;
  height: 90px;
  display: flex;
  flex-direction: row;
  align-items: center;
`
export const Container = styled.div`
  display: flex;
  align-items: center;
  height: 80px;
  justify-content: space-between;
  width: 100%;
`

export const MainNavContainer = styled.div`
  display: flex;
  align-items: center;
`
export const NavEl = styled.div`
  width: 72px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const TopNavEl = styled.div`
  width: 62px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`
export const BottomNavEl = styled.div`
  width: 72px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const NavRightBox = styled.div`
  height: 40px;
  display: flex;
  justify-content: space-between;
`

export const IconBox = styled.div`
  width: 120px;
  height: 40px;
  display: flex;
  align-items: center;
  @media ${breakPoints.tablet} {
    width: 0px;
    display: none;
  }
`
export const IconContainer = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  :hover {
    cursor: pointer;
  }
`

export const IconImg = styled.img`
  width: 24px;
  height: 24px;
`
export const SellBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  background-color: #333333;
  color: white;
  width: 98px;
  height: 40px;
  border: none;
  :hover {
    color: #7a36ff;
    cursor: pointer;
  }
`
export const DropDownColBox = styled.div`
  width: 464px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`
export const DropDownCol = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 62px;
  &:hover .dropDown {
    display: block;
  }
`
export const DropDownBox = styled.div`
  width: 147px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 4px;
  background-color: #333333;
  margin-top: 2px;
  position: absolute;
  top: 38px;
  display: none;
  z-index: 40000;
`

export const DropDownEl = styled.div`
  width: 100%;
  height: 41px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 400;
  cursor: pointer;
  :hover {
    color: #7a36ff;
  }
`
