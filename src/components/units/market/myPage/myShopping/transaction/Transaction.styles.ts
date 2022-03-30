import styled from '@emotion/styled'

export const Wrapper = styled.div`
  width: 793px;
  display: flex;
  flex-direction: column;
  margin-bottom: 143px;
`

export const TransactionHeaderTxt = styled.div`
  margin-top: 42px;
  margin-bottom: 24px;
  font-size: 19px;
  font-weight: 400;
`

export const SelectTransactionBar = styled.div`
  width: 100%;
  height: 39px;
  display: flex;
  border-bottom: 1px solid #333333;
  margin-bottom: 8px;
`
export const SelectDetailBtn = styled.button`
  width: 187px;
  height: 39px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => (props.isBuy ? 'white' : '#747474')};
  background-color: ${(props) => (props.isBuy ? 'black' : '#F1F1F1')};
  font-size: 14px;
  font-weight: 300;
  border: none;
  cursor: pointer;
`

export const PeriodSettingBox = styled.div`
  width: 389px;
  height: 23px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
`
export const PeriodBtnBox = styled.div`
  width: 168px;
  display: flex;
  justify-content: space-between;
  height: 23px;
`
export const PeriodBtn = styled.button`
  height: 23px;
  width: 42px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #646464;
  font-size: 12px;
  font-weight: 300;
  border: none;
`
export const TodayPeriodBtn = styled.button`
  height: 23px;
  width: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #646464;
  font-size: 12px;
  font-weight: 300;
  border: none;
`

export const PeriodCalenderBox = styled.div`
  width: 217px;
  height: 23px;
  display: flex;
`
export const PeriodFetchBtn = styled.button`
  width: 40px;
  height: 23px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #33cdd7;
  color: white;
  border: none;
`
export const TxtBox = styled.div`
  height: 16px;
  font-size: 12px;
  font-weight: 300;
  color: #646464;
  margin-bottom: 5px;
`
export const ProductDetailTxt = styled.div`
  margin-top: 77px;
  color: #333333;
  font-size: 16px;
  font-weight: 400;
  margin-bottom: 10px;
`

export const TableHeaderBox = styled.div`
  display: flex;
  border: 1px solid #00000033;
  align-items: center;
  height: 38px;
`
export const DateTableHeaderEl = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #646464;
  font-size: 12px;
  font-weight: 400;
  flex: 2;
`
export const ImgTableHeaderEl = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #646464;
  font-size: 12px;
  font-weight: 400;
  flex: 3;
`
export const NameTableHeaderEl = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #646464;
  font-size: 12px;
  font-weight: 400;
  flex: 3;
`
export const PriceTableHeaderEl = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #646464;
  font-size: 12px;
  font-weight: 400;
  flex: 2;
`
export const StatusTableHeaderEl = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #646464;
  font-size: 12px;
  font-weight: 400;
  flex: 2;
`
export const SellerNameTableHeaderEl = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #646464;
  font-size: 12px;
  font-weight: 400;
  flex: 2;
`
export const ReviewTableHeaderEl = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #646464;
  font-size: 12px;
  font-weight: 400;
  flex: 3;
`

export const Row = styled.div`
  border-bottom: 1px solid #00000033;
  border-left: 1px solid #00000033;
  border-right: 1px solid #00000033;
  display: flex;
  height: 142px;
`
export const RowImg = styled.div`
  height: 142px;
  background-color: grey;
  flex: 3;
`
export const RowDateBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 400;
  color: #646464;
  flex: 2;
`
export const RowNameBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 400;
  color: #646464;
  flex: 3;
`
export const RowPriceBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 400;
  color: #646464;
  flex: 2;
`

export const RowStatusBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 400;
  color: #646464;
  flex: 2;
`
export const RowSellerNameBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 400;
  color: #646464;
  flex: 2;
`
export const RowReviewBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 400;
  color: #646464;
  flex: 3;
`
export const ReviewBtn = styled.button`
  width: 61px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #dbdbdb;
  font-size: 12px;
  font-weight: 400;
  border: none;
`
