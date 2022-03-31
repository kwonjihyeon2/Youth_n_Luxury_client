import styled from '@emotion/styled'
import { breakPoints } from '../../../../../../commons/styles/media'

export const WrapperResponse = styled.div`
  @media ${breakPoints.tablet} {
    width: 100%;
    padding: 0 60px;
  }
`

export const Wrapper = styled.div`
  width: 794px;
  display: flex;
  flex-direction: column;
  border-top: 1px solid black;
  align-items: center;
  @media ${breakPoints.tablet} {
    width: 100%;
  }
`
export const Row = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  border-bottom: 1px solid #cccccc;
`
export const Key = styled.div`
  width: 107px;
  height: 49px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f8f8f8;
  color: #666666;
  border-right: 1px solid #cccccc;
`
export const Value = styled.div`
  width: 686px;
  height: 50px;
  display: flex;
  align-items: center;
  padding-left: 8px;
  @media ${breakPoints.tablet} {
    width: 100%;
  }
`
export const SettingOptionDropBox = styled.select`
  width: 95px;
  height: 34px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #cccccc;
  border-radius: 2px;
  color: #666666;
  font-weight: 300;
`
export const WriterInput = styled.input`
  min-width: 123px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 9px;
  border: 1px solid #cccccc;
  border-radius: 2px;
  font-weight: 300;
  color: #666666;
`

export const Title = styled.input`
  width: 671px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 9px;
  font-size: 13px;
  font-weight: 300;
  border: 1px solid #cccccc;
  border-radius: 2px;
  color: #666666;
  @media ${breakPoints.tablet} {
    width: 100%;
  }
`

export const Content = styled.textarea`
  width: 794px;
  height: 192px;
  padding: 8px;
  font-size: 13px;
  font-weight: 300;
  border: 1px solid #cccccc;
  border-radius: 2px;
  color: #666666;
  margin-top: 14px;
  @media ${breakPoints.tablet} {
    width: 100%;
  }
`
export const AttachmentsRow = styled.div`
  width: 100%;
  height: 39px;
  display: flex;
  align-items: center;
  margin-top: 24px;
`
export const AttachmentsKeyTxt = styled.div`
  font-size: 13px;
  font-weight: 400;
  color: #666666;
`
export const AddAttachmentBtn = styled.button`
  width: 77px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #666666;
  border: 1px solid #767676;
  background-color: white;
  margin-left: 20px;
  border-radius: 2px;
`
export const BtnBox = styled.div`
  display: flex;
  height: 34px;
  width: 150px;
  justify-content: space-between;
  margin-top: 24px;
  margin-bottom: 42px;
`
export const SubmitBtn = styled.button`
  width: 70px;
  height: 34px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  background-color: black;
  border: none;
  border-radius: 2px;
`
export const CancelBtn = styled.button`
  width: 70px;
  height: 34px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #767676;
  background-color: white;
  border: 1px solid #767676;
  border-radius: 2px;
`
