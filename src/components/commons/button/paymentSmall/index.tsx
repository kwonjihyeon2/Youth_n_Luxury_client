import styled from '@emotion/styled'

// const SmallButton = styled.button`
//   padding: 5px 15px;
//   background-color: #fff;
//   border: 1px solid #000;
//   cursor: pointer;
// `

const CommonsButton = styled.button`
  padding: 5px 10px;
  border: 1px solid #c4c4c4;
  border-radius: 5px;
  background-color: #fff;
  font-weight: 700;
  margin-left: 5px;
  cursor: pointer;
`

export default function PaymentSmallButton(props) {
  return (
    <CommonsButton style={props.style} onClick={props.onClick}>
      {props.name}
    </CommonsButton>
  )
}
