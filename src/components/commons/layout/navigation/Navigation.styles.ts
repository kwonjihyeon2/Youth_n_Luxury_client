import styled from '@emotion/styled'

export const Wrapper = styled.div`
  width: 1200px;
  height: 90px;
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const Img = styled.div`
  width: 34px;
  height: 34px;
  background-color: grey;
`

export const MainNavContainer = styled.div`
  width: 464px;
  height: 40px;
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
  width: 226px;
  height: 40px;
  display: flex;
  justify-content: space-between;
`

export const IconBox = styled.div`
  width: 120px;
  height: 40px;
  display: flex;
  align-items: center;
`
export const IconContainer = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
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
  top: 40px;
  display: none;
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
`
