import styled from '@emotion/styled'

export const Position = styled.div`
  display: flex;
  justify-content: center;
`
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1200px;
  min-height: 2000px;
  height: auto;
`
export const WrapperSelect = styled.div`
  width: 1000px;
  height: 200px;
  display: flex;
  flex-direction: column;
  z-index: 9999;
`

export const WrapperSelectTop = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
`

export const SelectTopBox1 = styled.div`
  width: 20%;
  height: 100%;
  background-color: #8243ff;
  display: flex;
  align-items: center;
  font-size: 20px;
  padding-left: 20px;
  border-bottom: 2px solid gray;
  border-top: 2px solid gray;
`
export const SelectTopBox2 = styled.div`
  width: 80%;
  height: 100%;
`
export const TopBox2Top = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  align-items: center;
  padding-left: 20px;
  border-bottom: 2px solid gray;
  border-top: 2px solid gray;
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
  border-bottom: 2px solid gray;
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
`

export const WrapperSelectMid = styled.div`
  width: 100%;
  height: 25%;
  display: flex;
`
export const SelectMidBox1 = styled.div`
  width: 20%;
  height: 100%;
  background-color: #8243ff;
  font-size: 20px;
  display: flex;
  align-items: center;
  padding-left: 20px;
  border-bottom: 2px solid gray;
`
export const SelectMidBox2 = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  align-items: center;
  font-size: 18px;
  border-bottom: 2px solid gray;

  div {
    padding-left: 20px;
  }
  input {
    margin-left: 10px;
    cursor: pointer;
  }
`

export const WrapperSelectBot = styled.div`
  width: 100%;
  height: 25%;
  display: flex;
`
export const SelectBotBox1 = styled.div`
  width: 20%;
  height: 100%;
  background-color: #8243ff;
  display: flex;
  align-items: center;
  font-size: 20px;
  padding-left: 20px;
  border-bottom: 2px solid gray;
`
export const SelectBotBox2 = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  align-items: center;
  border-bottom: 2px solid gray;

  div {
    padding-left: 20px;
  }
  input {
    width: 150px;
    height: 30px;
    margin-left: 10px;
    margin-right: 10px;
    border: 0.5px solid black;
  }
  button {
    width: 40px;
    height: 30px;
    background-color: white;
    border: 0.5px solid black;
    cursor: pointer;
  }
`
export const WrapperBottom = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`

export const WrapperUseditem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 250px;
  height: 250px;
  background-color: green;
  margin-top: 50px;
  margin-left: 50px;
  margin-right: 50px;
  cursor: pointer;
`
export const UseditemImg = styled.div`
  width: 200px;
  height: 200px;
  background-color: red;
`
export const UseditemName = styled.div``
export const UseditemPrice = styled.div``
