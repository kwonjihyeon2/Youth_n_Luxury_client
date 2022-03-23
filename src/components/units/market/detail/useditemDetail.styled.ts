import styled from '@emotion/styled';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FiHeart } from 'react-icons/fi'
import { BsSuitHeartFill } from 'react-icons/bs'

export const Wrapper = styled.div`
    width : 100%;
    display : flex;
    justify-content : center;
`

export const WrapperBody = styled.div`
    max-width : 1200px;
    width : 100%;
`

export const WrapperTitle = styled.div`
    width : 100%;
    display : flex;
`

export const TitleBox = styled.div`
    width : 50%;
    padding-bottom:20px;
`

export const Titleprice = styled.div`
    padding : 20px 0;
    border-bottom : 1px solid #c4c4c4;
    margin-bottom : 10px;
`
export const MyRightBox = styled.div`
    display : flex;
    align-items : center;
    justify-content : flex-end;
    padding : 10px 0;
`
export const IconBox = styled.div`
    display : flex;
    align-items : center;
    margin-right : 10px;
`

export const ShareButton = styled.button`
  display : flex;
    align-items : center;
    margin-right : 10px;
    background-color : #fff;
    border : none;
`

export const SelectBox = styled.div`
    width : 100%;
    display:flex;
    padding : 0px 80px;
    justify-content : center;
    border-bottom: 1px solid #bdbdbd;
`

export const Selectcontents = styled.div`
    padding :10px 100px;
    border : 1px solid #bdbdbd;
    border-bottom : none;
`

export const ContentsBox = styled.div`
    text-align : center;
    padding : 80px 0;
`


export const TitleImg = styled.img`
    width : 100%;
    object-fit : cover;
`

export const WrapperBodyUl = styled.ul`
    display : flex;
    flex-direction:column;
    justify-content:space;
    padding : 0;
    margin-right : 30px;
`

export const PriceStyle = styled.div`
    font-weight : 500;
    font-size : 30px;
    list-style : none;
    margin-bottom : 10px;
`

export const ButtonStyle = styled.button`
    width : 30%;
    padding : 15px 0;
    background-color : white;
    border : 1px solid #c4c4c4;
`

export const ButtonBlackStyle = styled.button`
    width : 30%;
    padding : 15px 0;
    background-color : black;
    color : white;
    border : 1px solid #000;
`

export const FiHeartIcon = styled(FiHeart)`
    color : red;
`

export const PriceStyleColor = styled.span`
    font-weight : 500;
    font-size : 30px;
    list-style : none;
`

export const WrapperLiStyle = styled.li`
    padding : 5px 0;
    list-style : none;
    font-size : 14px;
    color : gray;
`

export const ContentsImg = styled.img`
    width : 500px;
`

export const SliderContainer = styled(Slider)`
    padding : 20px;
    .slick-slide div{
        margin-right :20px;
    }
    .slick-prev{
        left : 0px;
        z-index : 999;
    }
    .slick-next{
        right : 4%;
        z-index : 999;
    }
    .slick-prev:before, .slick-next:before{
        color : black;
        font-size: 50px;
    }
`

export const SliderBox = styled.div`
    height : 200px;
    margin : 80px 0;
    width : 200px;
    background-color : #bdbdbd;
`

export const RelativeTitle = styled.div`
    font-size : 24px;
    font-weight : 300;
`

export const SellerBox = styled.div`
    display :flex;
    align-items : center;
    cursor : pointer;
`

export const SellerProfile =styled.div`
    border-radius : 100%;
    width:80px;
    height : 80px;
    background-color : #bdbdbd;
    margin-right : 30px;
`

export const SellerProduct = styled.div`
    background-color : #bdbdbd;
    margin-right : 10px;
    display : flex;
    justify-content : center;
    align-items: flex-end;
    padding-bottom: 10px;
    width: 80px;
    font-size: 14px;
    color: white;
    height: 80px;
`


//more

interface propsIsOpen{
    isOpen : boolean;
}

interface propsIsHeart{
    isHeart : boolean
}
export const WrapperSellerInfo = styled.div`
    display : ${(props:propsIsOpen)=> props.isOpen ? "block" : "none"} ;
    position : fixed;
    width : 100%;
    height : 100vh;
    background-color : rgba(0,0,0,0.5);
`

export const HeartBox = styled.div`
    display : ${(props:propsIsHeart)=> props.isHeart ? "block" : "none"};
    position : fixed;
    top : 40%;
    left : 50%;
    transform : translate(-50%,-50%);
    width : 220px;
    height : 220px;
`
export const HeartOnbox = styled.div`
    background-color : rgba(0,0,0,0.5);
    padding : 50px;
    border-radius : 20px;
    color : white;
    display: flex;
    flex-direction : column;
    align-items : center;
`

export const HeartFill = styled(BsSuitHeartFill)`
    color : red;
`