import styled from '@emotion/styled'
import { breakPoints } from '../../../commons/utils/media'

export const WrapperResponse = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`

export const Wrapper = styled.div`
  max-width: 1200px;
  width: 100%;
  padding: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const BasketTitleTxt = styled.div`
  font-size: 28px;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 64px;
`
export const Container = styled.div`
  width: 100%;
  display: flex;
  @media ${breakPoints.tablet} {
    justify-content: space-between;
  }
`
export const LeftContainer = styled.div`
  width: 610px;
  display: flex;
  flex-direction: column;
  @media (max-width: 1024px) {
    font-size: 12px;
    width: 70%;
  }
`

export const AllSelectBox = styled.div`
  width: 141px;
  height: 23px;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  flex-direction: column;
`
export const AllCheckBoxRow = styled.div`
  display: flex;
  align-items: center;
`
export const AllCheckBox = styled.input`
  width: 11.73px;
  height: 11.73px;
`
export const AllCheckTxt = styled.div`
  font-size: 12px;
  font-weight: 400;
`

export const SelectDeleteBtn = styled.button`
  width: 65px;
  height: 23px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 300;
  color: #646464;
  border: 1px solid #dedede;
  margin-left: 7px;
  background-color: white;
  border-radius: 2px;
  border: 1px solid #dedede;
`

export const BasketTable = styled.div`
  width: 610px;
  display: flex;
  flex-direction: column;
  border-left: 1px solid #afb2b7;
  border-right: 1px solid #afb2b7;
  margin-top: 12px;
  border-radius: 8px;
  @media (max-width: 1024px) {
    width: 100%
    font-size: 12px;
  }
`
export const TableTopRow = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  background: #f4f4f4;
  height: 44px;
  padding: 0 12px 0 10px;
  border-top: 1px solid #afb2b7;
  border-radius: 8px;
`
export const TopMainTxt = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: #333333;
  margin-right: 7px;
`
export const TopSubTxt = styled.div`
  font-size: 13px;
  font-weight: 500;
  color: #666666;
`

export const Row = styled.div`
  display: flex;
  height: 133px;
  align-items: center;
  border-bottom: 1px solid #afb2b7;
  border-radius: 8px;
`
export const CheckBox = styled.input`
  width: 14.08px;
  height: 14.08px;
  margin: 0px 14px;
`
export const ProductImg = styled.div`
  width: 90px;
  height: 83px;
  background-color: grey;
  margin-right: 9px;
`
export const ProductNameTxtBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 54px;
  margin-right: 99px;
`
export const ProductNameTxt = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: #333333;
`
export const BuyBtn = styled.button`
  width: 84px;
  height: 27px;
  background-color: #b80606;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  border: none;
  font-weight: 300;
`
export const ProductPriceBox = styled.div`
  display: flex;
`
export const PriceKey = styled.div`
  font-size: 13px;
  font-weight: 400;
  color: #666666;
`
export const PriceValue = styled.div`
  font-size: 15px;
  font-weight: 500;
  color: #666666;
  margin-left: 40px;
`
export const RightContainer = styled.div`
  width: 448px;
  display: flex;
  flex-direction: column;
  margin-left: 21px;
  margin-top: 20px;
  @media (max-width: 1024px) {
    width: 30%;
  }
`
export const PriceTitleTxt = styled.div`
  font-weight: 500;
  font-size: 23px;
  color: #333333;
  margin-bottom: 16px;
`

export const RightPriceBox = styled.div`
  width: 100%;
  padding: 12px 10px 12px 16px;
  border: 1px solid #454954;
  @media ${breakPoints.tablet} {
    font-size: 12px;
  }
`
export const AllPriceHeadBox = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 10px;
  align-items: center;
`
export const PriceKeyTxt = styled.div`
  font-weight: 100;
  font-size: 17px;
`

export const PriceTitleValueTxt = styled.div`
  font-weight: 500;
  font-size: 21px;
  color: #666666;
  @media (max-width: 1024px) {
    font-size: 1rem;
  }
`

export const SendPrice = styled.div`
  font-size: 15px;
  font-weight: 300;
  color: #666666;
  @media ${breakPoints.tablet} {
    font-size: 12px;
  }
`
export const AllPriceKeyTxt = styled.div`
  font-size: 19px;
  font-weight: 500;
  @media (max-width: 1024px) {
    font-size: 1rem;
  }
`
export const AllPriceValueTxt = styled.div`
  font-size: 30px;
  font-weight: 500;
  color: #666666;
  @media (max-width: 1024px) {
    font-size: 1rem;
  }
  /* @media ${breakPoints.tablet} {
    font-size: 12px;
  } */
`
export const AllBuyBtn = styled.button`
  width: 100%;
  height: 53px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: black;
  border: none;
  color: white;
  font-size: 26px;
  font-weight: 400;
  margin-top: 40px;
  @media ${breakPoints.tablet} {
    font-size: 16px;
  }
`
