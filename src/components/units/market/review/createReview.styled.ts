import styled from '@emotion/styled'
import { Rate } from 'antd'
import 'antd/dist/antd.css'
import { breakPoints } from '../../../commons/utils/media'

export const WrapperMain = styled.div`
  /* width: 100%;
  height: 100%; */
  z-index: 3;
`
export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  font-size: 14px;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

export const WrapperContents = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 860px;
  /* height: 100vh; */
  background-color: #fff;
  border-radius: 20px 20px 0 0;
  @media ${breakPoints.tablet} {
    width: 80%;
  }
  @media ${breakPoints.mobile} {
    width: 80%;
  }
`
export const WrapperTitle = styled.p`
  color: #333;
  padding: 20px 0;
  font-size: 20px;
  font-weight: 700;
  text-align: center;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.06);
  position: relative;
`

export const CancleButton = styled.button`
  position: absolute;
  top: 3%;
  right: 1%;
  background-color: #f0f0f0;
  color: #333;
  border: none;
  border-radius: 100%;
`

export const ReviewTable = styled.div`
  padding: 20px 90px 30px;
  width: 100%;
  @media ${breakPoints.tablet} {
    padding: 20px 50px 30px;
  }
`

export const TableBox = styled.div`
  display: flex;
  align-items: center;
`

export const TableInput = styled.input`
  border-radius: 5px;
  padding: 5px;
  border: 1px solid #ddd;
`
export const UserInfo = styled.div`
  font-weight: 700;
  margin-bottom: 5px;
`

export const TableLeft = styled.div`
  font-size: 15px;
  margin: 30px 0 15px 0;
  color: #000;
  font-weight: 600;
`

export const StarRate = styled(Rate)`
  .ant-rate-star-half .ant-rate-star-first,
  .ant-rate-star-full .ant-rate-star-second {
    color: #000;
  }
`

export const TableRight = styled.div`
  margin-left: 25px;
`

export const TableProfile = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  background-color: #ddd;
  margin-right: 10px;
`

export const ContentText = styled.textarea`
  width: 100%;
  resize: none;
  border: 1px solid #666;
  height: 20vh;
  padding: 10px;
`

export const ButtonSection = styled.div`
  padding: 20px 0;
  width: 100%;
  display: flex;
  justify-content: center;
  font-size: 1rem;
`
export const FileUpload = styled.div`
  width: 100%;
  border: 1px solid #333;
  background-color: #fff;
  font-weight: 600;
  font-size: 15px;
  padding: 10px 0px;
  text-align: center;
`
export const InputFiles = styled.input`
  display: none;
`
export const ImageText = styled.span`
  color: #767676;
  font-size: 12px;
  margin-left: 5px;
  font-weight: 300;
`

export const NoticeText = styled.span`
  color: #ff0606;
  font-size: 12px;
  margin-left: 5px;
  font-weight: 300;
`
export const SubmitButton = styled.button`
  padding: 10px 0px;
  width: 100%;
  background-color: #333;
  color: white;
  border: 1px solid #333;
`

export const CancleBackground = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  top: 0;
  background-color: gray;
  opacity: 0.3;
  z-index: -1;
`
