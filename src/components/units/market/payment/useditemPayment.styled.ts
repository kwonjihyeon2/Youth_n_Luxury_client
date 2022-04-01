import styled from '@emotion/styled'

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  font-size: 14px;
  ul {
    padding: 0;
    margin: 0;
  }
  li {
    list-style: none;
  }
  p {
    margin: 0;
  }
`

export const WrapperTitle = styled.div`
  text-align: center;
  padding-top: 64px;
  font-size: 2rem;
  font-weight: 500;
`

export const WrapperBox = styled.div`
  max-width: 1200px;
  padding: 0 60px;
  width: 100%;
`
export const WrapperContentBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`

export const CommonTitle = styled.p`
  padding: 25px 0;
  font-size: 1.5rem;
`

export const WrapperLeft = styled.div`
  width: 100%;
  border: 1px solid #999;
  > div {
    width: 100%;
    display: flex;
    padding: 10px;
  }
`
export const PriceInfo = styled.div`
  margin-left: 10px;
`

export const ClickButton = styled.button`
  border: 1px solid #b3b9c7;
  background-color: #fff;
  font-size: 12px;
  color: #999;
  margin: 0 5px;
  cursor: pointer;
`

export const LeftText = styled.div`
  background-color: #f4f4f4;
  justify-content: space-between;
  align-items: center;
`

export const LeftcontentBox = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
`

export const PostSelect = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  border: 1px solid #fff;
  border-bottom: 1px solid #000;
  margin-bottom: 15px;
  text-align: center;
  div {
    width: 200px;
    padding: 10px;
  }
`
interface IPropStyle {
  isOpenAdd: boolean
}

interface IPropModal {
  isModalAdd: boolean
}

export const ChangeSelect = styled.div`
  width: 200px;
  padding: 10px;
  background-color: ${(props: IPropStyle) =>
    props.isOpenAdd ? '#fff' : '#ddd'};
  color: ${(props) => (props.isOpenAdd ? '#000' : '#767676')};
  border: ${(props) => (props.isOpenAdd ? '1px solid #000' : '1px solid #ddd')};
  border-bottom: ${(props) => (props.isOpenAdd ? '1px solid #fff' : 'none')};
  margin-bottom: -1px;
`

export const AddressSelect = styled.div`
  width: 200px;
  padding: 10px;
  background-color: #fff;
  color: #000;
  border: 1px solid #000;
  border-bottom: 1px solid #fff;
  margin-bottom: -1px;
`

export const ModalAddress = styled.div`
  display: ${(props: IPropStyle) => (props.isOpenAdd ? 'block' : 'none')};
  z-index: 999;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
`
export const DeliveryText = styled.div`
  display: flex;
  align-items: center;
`
export const DeliveryTextSmallInput = styled.input`
  padding: 5px;
  text-align: center;
  width: 60px;
  border: 1px solid #c4c4c4;
  border-radius: 5px;
  margin: 3px 0;
`

export const DeliveryTextInput = styled.input`
  padding: 5px;
  border: 1px solid #c4c4c4;
  border-radius: 5px;
  margin-bottom: 5px;
  width: 165px;
`
export const DeliveryLongInput = styled.input`
  padding: 5px;
  border: 1px solid #c4c4c4;
  border-radius: 5px;
  margin-bottom: 5px;
  width: 100%;
`

export const CommonsButton = styled.button`
  padding: 5px 10px;
  border: 1px solid #c4c4c4;
  border-radius: 5px;
  background-color: #fff;
  font-weight: 700;
  margin-left: 5px;
  cursor: pointer;
`
export const DeliveryTextselect = styled.select`
  width: 100%;
  padding: 8px 10px;
  border: 1px solid #c4c4c4;
  border-radius: 5px;
  margin-bottom: 5px;
`

export const PaymentItem = styled.div`
  padding: 10px;
  border: 1px solid #454954;
  display: flex;
  justify-content: space-between;
  align-items: center;
  li {
    padding: 5px 0;
  }
`

export const RightUl = styled.ul`
  text-align: right;
`

export const Leftli = styled.li`
  font-size: 17px;
  font-weight: 300;
`

export const Rightli = styled.li`
  font-size: 30px;
  font-weight: 500;
`

export const LeftPrice = styled.li`
  font-size: 20px;
  font-weight: 500;
`

export const PayRoutebox = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
`

export const PaymentIcon = styled.div`
  width: 50px;
  height: 50px;
  background: url('/detail/payment.png');
  &:hover {
    background: url('/detail/hoverpayment.png');
  }
`

export const CommonsPayment = styled.div`
  background-color: #eee;
  border-radius: 8px;
  margin: 0 10px 10px 10px;
  padding: 20px;
  &:hover {
    background-color: #000;
    div {
      background: url('/detail/hoverpayment.png');
    }
  }
`

export const PaymentResult = styled.button`
  width: 100%;
  background-color: #333;
  padding: 10px;
  color: #fff;
  border: none;
  border-radius: 5px;
  margin-top: 50px;
  font-size: 26px;
  font-weight: 300;
  cursor: pointer;
`

export const ModalBox = styled.div`
  width: 500px;
  background-color: #fff;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`
export const ModalCenter = styled.div`
  width: 100%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`
export const submitAddress = styled.div`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid black;
  text-align: left;
`
export const MoreAddress = styled.div`
  text-align: center;
  padding: 10px;
  margin: 20px 10px;
  border: 1px solid #000;
`
// export const
