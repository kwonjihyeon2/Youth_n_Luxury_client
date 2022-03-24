import styled from '@emotion/styled'

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 60px;
  font-size: 14px;
`

export const WrapperBox = styled.div`
  max-width: 1200px;
  width: 100%;
  padding: 40px 0;
`

export const WrapperTitle = styled.h2`
  font-size: 34px;
  margin: 0 0 10px 0;
`

export const WrapperTable = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 40px 0;
`

export const TableSelect = styled.div`
  width: 10%;
  margin-right: 50px;
`

export const ParentTable = styled.div`
  width: 80%;
`

interface IpropsStyle {
  onDisplay: boolean
}

export const TableBox = styled.div`
  width: 100%;
  height: ${(props: IpropsStyle) => (props.onDisplay ? '100%' : '0')};
  opacity: ${(props) => (props.onDisplay ? '100' : '0')};
  visibility: ${(props) => (props.onDisplay ? 'visible' : 'hidden')};
  transition: opacity 0.3s;
`

export const RightTableBox = styled.div`
  width: 100%;
  height: ${(props: IpropsStyle) => (props.onDisplay ? '0' : '100%')};
  visibility: ${(props) => (props.onDisplay ? 'hidden' : 'visible')};
  opacity: ${(props) => (props.onDisplay ? '0' : '100')};
  /* visibility: hidden; */
  transition: opacity 0.3s;
`

export const TableList = styled.div`
  justify-content: space-between;
  display: flex;
  border-top: 1px solid #e8e8e8;
  border-bottom: 1px solid #e8e8e8;
  padding: 20px 0;
  cursor: pointer;
  text-align: center;
`

export const TableListRow = styled.div`
  width: 10%;
`

export const TableListLongRow = styled.div`
  width: 60%;
`
export const CommonsTitle = styled.div`
  padding-bottom: 10px;
  border-bottom: 3px solid #000;
  font-size: 24px;
  font-weight: 500;
`
export const CommonIndex = styled.div`
  padding: 10px 0;
  color: #bdbdbd;
  &:hover {
    color: #000;
  }
  cursor: pointer;
`
