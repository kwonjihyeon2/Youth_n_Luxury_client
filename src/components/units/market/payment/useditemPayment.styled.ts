import styled from "@emotion/styled";

export const Wrapper = styled.div`
    width : 100%;
    display : flex;
    justify-content : center;
    font-size : 14px;
    ul{
        padding:0;
        margin : 0;
    }
    li{
        list-style : none;
    }
    p{
        margin : 0;
    }
`

export const WrapperBox = styled.div`
    max-width : 1200px;
    padding : 60px;
    width : 100%;
`
export const WrapperTitle = styled.h1`
    margin:0;
    margin-top : 70px;
    font-size : 2rem;
    text-align : center;
`
export const WrapperContentBox = styled.div`
    padding : 40px 0;
    border-bottom : 1px solid #777;
    display:flex;
    flex-direction:column;
    >div{
        display:flex;
        border-top: 1px solid #c4c4c4;
        padding : 20px 10px;
    }
`

export const WrapperDeliveryBox = styled.div`
    padding : 20px 0;
    display:flex;
    flex-direction:column;
    >div{
        display:flex;
        /* padding : 20px 0; */
    }
`

export const ButtonText = styled.div`
    display:flex;
    justify-content: space-between;
    font-weight : 700;
    align-items:center;
`

export const TextBox = styled.div`
    background-color : #FFF8F4;
    padding : 10px;
`

export const PayList = styled.div`
    background-color : #F6F6F6;
    justify-content : space-between;
    align-items:center;
`

export const PaymentItem = styled.div`
    justify-content : space-between;
    text-align : center;
    align-items : center;
`

export const PaymentItemArgs = styled.div`
    width : 10%;
`

export const JustItemText = styled.div`
    width:50%;
    text-align : left;
    font-weight : 700;
`

export const PriceSpan = styled.span`
    font-weight : 700;
    font-size : 18px;
`

export const ItemBox = styled.div`
    width : 10%;
    height : 150px;
    background-color : #F6F6F6;
`

export const DeliveryTitle = styled.div`
    display : flex;
    justify-content : space-between;
    font-weight : 700;
    font-size : 16px;
    margin : 10px 0;
`

export const DeliveryInfo = styled.div` 
    border-top : 1px solid #c4c4c4;
    display : flex;
    flex-direction : column;
    justify-content:center;
    >div{
        display:flex;
        border-bottom :  1px solid #c4c4c4;
    }
`

export const DeliveryList = styled.div`
    width : 150px;
    text-align :center;
    padding : 20px;
    background-color :  #F6F6F6;
    font-weight : 700;
    color :  #c4c4c4;
    display:flex;
    justify-content : center;
    align-items : center;
`
export const PostText = styled.div`
    padding : 20px;
    display : flex;
    flex-direction : column;
    div{
        margin-bottom : 5px;
    }
`
export const DeliveryText = styled.div`
    padding : 20px;
    display : flex;
    align-items:center;
`
export const DeliveryTextSmallInput = styled.input`
     padding : 8px 10px;
    width : 70px;
    border : 1px solid #c4c4c4;
    border-radius : 5px;
`

export const DeliveryTextInput = styled.input`
    padding : 8px 10px;
    border : 1px solid #c4c4c4;
    border-radius : 5px;
`
export const DeliveryTextselect = styled.select`
     padding : 8px 10px;
    border : 1px solid #c4c4c4;
    border-radius : 5px;
`

export const CommonsButton = styled.button`
    padding : 8px 10px;
    border : 1px solid #c4c4c4;
    border-radius : 5px;
    background-color : #fff;
    font-weight : 700;
    margin-left : 5px;
`

export const DeleteButton = styled.button`
    padding : 8px 10px;
    border : 1px solid #c4c4c4;
    border-radius : 5px;
    font-weight : 700;
    margin-left : 5px;
`