import styled from '@emotion/styled'

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  font-size: 14px;
  position: relative;
  overflow: hidden;
`

interface IPropAlert {
  isAlert: boolean
}

export const ModalAlert = styled.div`
  width: 400px;
  position: absolute;
  background-color: #fff;
  top: 10px;
  right: ${(props: IPropAlert) => (props.isAlert ? '30px' : '-1500px')};
  transition: all 0.5s;
  padding: 15px;
  margin: 20px 0;
  font-size: 12px;
  border: 1px solid #ccc;
  border-radius: 5px;
  display: flex;
  align-items: center;
`
export const WrapperContents = styled.div`
  max-width: 1200px;
  width: 100%;
  padding: 40px 200px;
`

export const WrapperTop = styled.div`
  margin: 10px 0;
  display: flex;
  justify-content: space-between;
`

export const HeadText = styled.div`
  display: flex;
  align-items: center;
  div {
    margin-left: 10px;
  }
`

export const CommonsButton = styled.button`
  border: 1px solid #dedede;
  padding: 5px 8px;
  margin-left: 5px;
  background-color: #fff;
  color: #646464;
  cursor: pointer;
`

export const WrapperMessage = styled.div`
  padding: 30px 0;
  border-top: 1px solid #c4c4c4;
`

export const Wrappercalendar = styled.div`
  font-weight: 700;
  display: flex;
  align-items: center;
  img {
    margin-right: 10px;
  }
`
export const MessagesBox = styled.div`
  margin: 10px 0;
  padding-left: 50px;
`
export const MessageBox = styled.div`
  padding: 15px;
  margin: 20px 0;
  font-size: 12px;
  border: 1px solid #ccc;
  border-radius: 5px;
  display: flex;
  align-items: center;
  position: relative;
  &::before {
    position: absolute;
    content: '';
    width: 10px;
    height: 10px;
    top: 50%;
    transform: translateY(-50%);
    left: -41px;
    border-radius: 100%;
    background-color: #ecf0f7;
    border: 2px solid #cdd7e5;
  }
  &::after {
    position: absolute;
    content: '';
    width: 5px;
    height: 160%;
    left: -37px;
    background-color: #cdd7e5;
    z-index: -1;
  }
`
export const AlertRed = styled.span`
  position: absolute;
  width: 5px;
  height: 5px;
  border-radius: 100%;
  background-color: #b80606;
`
export const MessageImage = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 100%;
  background-color: #bdbdbd;
  margin-right: 15px;
`
export const MessageDelete = styled.button`
  position: absolute;
  top: 0%;
  right: 0%;
  padding: 5px 10px;
  color: #bdbdbd;
  margin: 5px;
  border: none;
  background-color: #fff;
  cursor: pointer;
`
