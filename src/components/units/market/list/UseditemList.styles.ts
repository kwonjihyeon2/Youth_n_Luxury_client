import styled from '@emotion/styled'
import { breakPoints } from '../../../commons/utils/media'

export const Position = styled.div`
  display: flex;
  justify-content: center;
  font-size: 14px;
`
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1200px;
  padding: 0 60px;
  width: 100%;
  min-height: 2000px;
`

export const WrapperTabletSelect = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 9999;
  width: 100%;
  height: 150px;
  @media ${breakPoints.tablet} {
    display: none;
    height: auto;
  }
`
export const WrapperSelect = styled.div`
  width: 100%;
  height: 150px;
  display: none;
  flex-direction: column;
  z-index: 9999;
  @media ${breakPoints.tablet} {
    display: flex;
    height: auto;
  }
`

export const WrapperSelectTop = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  @media ${breakPoints.tablet} {
    height: auto;
  }
`

export const SelectTopBox1 = styled.div`
  width: 20%;
  height: 100%;
  background-color: rgba(130, 67, 255, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid rgba(51, 51, 51, 0.3);
  border-top: 1px solid rgba(51, 51, 51, 0.3);
`
export const SelectTopBox2 = styled.div`
  width: 80%;
  height: 100%;
  @media ${breakPoints.tablet} {
    width: 100%;
  }
`
export const TopBox2Top = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  align-items: center;
  padding-left: 20px;
  border-bottom: 1px solid rgba(51, 51, 51, 0.3);
  border-top: 1px solid rgba(51, 51, 51, 0.3);
  @media ${breakPoints.tablet} {
    height: auto;
    padding: 10px 0 10px 20px;
  }
`
export const MainCategory = styled.div`
  cursor: pointer;
  margin-right: 20px;
`

export const TopBox2Bot = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 50%;
  align-items: center;
  border-bottom: 1px solid rgba(51, 51, 51, 0.3);
  @media ${breakPoints.tablet} {
    height: auto;
  }
`
export const WrapperSubCategory = styled.div`
  margin-left: 20px;
  width: 100%;
  display: flex;
  flex-direction: row;
  div {
    margin-right: 20px;
    cursor: pointer;
  }
  @media ${breakPoints.tablet} {
    padding: 10px 0;
  }
`

export const WrapperSelectMid = styled.div`
  width: 100%;
  height: 25%;
  display: flex;
  @media ${breakPoints.tablet} {
    height: auto;
  }
`
export const SelectMidBox1 = styled.div`
  width: 20%;
  height: 100%;
  background-color: rgba(130, 67, 255, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid rgba(51, 51, 51, 0.3);
  @media ${breakPoints.tablet} {
    width: 100%;
    height: auto;
    padding: 10px 0;
  }
`
export const SelectMidBox2 = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgba(51, 51, 51, 0.3);
  div {
    padding-left: 20px;
  }
  input {
    margin-left: 10px;
    cursor: pointer;
  }
  @media ${breakPoints.tablet} {
    width: 100%;
    height: auto;
    padding: 10px 0;
  }
`

export const WrapperSelectBot = styled.div`
  width: 100%;
  height: 25%;
  display: flex;
  @media ${breakPoints.tablet} {
    height: auto;
  }
`
export const SelectBotBox1 = styled.div`
  width: 20%;
  height: 100%;
  background-color: rgba(130, 67, 255, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  /* padding-left: 20px; */
  border-bottom: 1px solid rgba(51, 51, 51, 0.3);
`
export const SelectBotBox2 = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgba(51, 51, 51, 0.3);
  div {
    padding-left: 20px;
  }
  input,
  button {
    background-color: white;
    padding: 5px;
    margin: 0 5px;
    border: 1px solid rgba(51, 51, 51, 0.6);
    border-radius: 3px;
  }
  @media ${breakPoints.tablet} {
    width: 100%;
    height: auto;
    padding: 10px 0;
  }
`
export const WrapperBottom = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`

export const WrapperUseditem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 30%;
  height: 350px;
  background-color: green;
  margin-top: 50px;
  cursor: pointer;
`
export const UseditemImg = styled.div`
  width: 100%;
  height: 300px;
  background-color: red;
`
export const UseditemName = styled.div``
export const UseditemPrice = styled.div``
