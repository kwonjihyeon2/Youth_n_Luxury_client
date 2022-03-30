import styled from '@emotion/styled'
import { Rate } from 'antd'

export const ReviewTable = styled.div`
  width: 793px;
  display: flex;
  flex-direction: column;
`
export const ReviewTitleTxt = styled.div`
  font-size: 28px;
  font-weight: 400;
  margin-top: 29px;
  margin-bottom: 24px;
`
export const Row = styled.div`
  display: flex;
  height: 114px;
  width: 793px;
  align-items: center;
  border-bottom: 1px solid #afb2b7;
`
export const ReviewImg = styled.div`
  width: 126px;
  height: 84px;
  background-color: gray;
`
export const ReviewContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 14px;
`
export const StarRate = styled(Rate)`
  .ant-rate-star-half .ant-rate-star-first,
  .ant-rate-star-full .ant-rate-star-second {
    color: #000;
  }

  font-size: 16px;
  margin-bottom: 4px;
`
export const ReviewHeader = styled.div`
  display: flex;
  width: 437px;
  height: 25px;
  align-items: center;
`
export const ProductNameTxt = styled.div`
  font-size: 18px;
  font-weight: 700;
`
export const CreatedAt = styled.div`
  color: #767676;
  font-size: 12px;
  font-weight: 400;
  margin-left: 14px;
`
export const ReviewContentTxt = styled.div`
  height: 44px;
  width: 437px;
`
export const StarBox = styled.div`
  width: 98px;
  height: 18px;
  background-color: grey;
`
export const EditBtn = styled.button`
  width: 44px;
  height: 23px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 37px;
  background-color: #afb2b7;
  border: none;
  color: white;
`
