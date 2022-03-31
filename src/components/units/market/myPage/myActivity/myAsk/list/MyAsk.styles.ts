import styled from '@emotion/styled'
import { breakPoints } from '../../../../../../commons/styles/media'

export const WrapperResponse = styled.div`
  @media ${breakPoints.tablet} {
    width: 100%;
    padding: 0 60px;
  }
`
export const Wrapper = styled.div`
  width: 795px;
  display: flex;
  flex-direction: column;
  @media ${breakPoints.tablet} {
    width: 100%;
  }
`

export const AskHeaderTxt = styled.div`
  margin-top: 30px;
  margin-left: 7px;
  margin-bottom: 21px;
  font-size: 28px;
  font-weight: 300;
`
export const SearchBox = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: space-between;
`
export const SearchRightBar = styled.div`
  width: 251px;
  height: 30px;
  display: flex;
  justify-content: space-between;
`
export const DropDown = styled.select`
  width: 117px;
  height: 30px;
  border: 1px solid #cccccc;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #666666;
  font-size: 13px;
  font-weight: 300;
`
export const Option = styled.option``

export const SearchInput = styled.input`
  border: 1px solid #cccccc;
  align-items: center;
  display: flex;
  justify-content: center;
  padding-left: 9px;
  font-weight: 300;
  font-size: 13px;
  border: 1px solid #cccccc;
  width: 200px;
`
export const SearchBtn = styled.button`
  width: 40px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #cccccc;
  background-color: white;
  font-weight: 300;
`
export const Table = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  border-top: 1px solid black;
  margin-top: 33px;
`
export const Row = styled.div`
  height: 48px;
  width: 100%;
  align-items: center;
  border-bottom: 1px solid #dddddd;
  display: flex;
`
export const HeadRow = styled.div`
  height: 48px;
  width: 100%;
  display: flex;
  align-items: center;
  background: #f8f8f8;
  border-bottom: 1px solid #dddddd;
`
export const HeadColFlex1 = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: 400;
`
export const HeadColFlex2 = styled.div`
  flex: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: 400;
`
export const HeadColFlex5 = styled.div`
  flex: 5;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: 400;
`
export const ColFlex1 = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 300;
  color: #767676;
`

export const ColFlex5 = styled.div`
  flex: 5;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 300;
  color: #767676;
`
export const ColFlex2 = styled.div`
  flex: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 300;
  color: #767676;
`
export const StatusRedTxt = styled.div`
  color: #b80606;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 400;
`
export const WriteAskBtnBox = styled.div`
  display: flex;
  justify-content: flex-end;
`
export const WriteAskBtn = styled.button`
  width: 86px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: black;
  color: white;
  font-size: 13px;
  font-weight: 300;
  border: none;
`
export const PaginationBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 28px;
  margin-bottom: 26px;
`
