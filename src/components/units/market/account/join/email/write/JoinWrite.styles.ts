import styled from '@emotion/styled'
import { breakPoints } from '../../../../../../commons/utils/media'

export const ResponsiveBox = styled.div`
  width: 100%;
  padding: 60px;
  display: flex;
  justify-content: center;
  @media ${breakPoints.tablet} {
    padding: 100px;
  }
  @media ${breakPoints.mobile} {
    padding: 60px;
  }
`

export const Wrapper = styled.div`
  width: 726px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 51px;
  @media ${breakPoints.tablet} {
    width: 100%;
  }
  @media ${breakPoints.mobile} {
    width: 100%;
  }
`

export const JoinHeaderTxt = styled.div`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 51px;
`

export const Row = styled.div`
  width: 723px;
  height: 48px;
  display: flex;
  align-items: center;
  @media ${breakPoints.tablet} {
    width: 100%;
  }
`

export const VarTxt = styled.div`
  width: 140px;
  height: 48px;
  padding: 14px 12px;
  background-color: #fafafa;
  font-weight: 400;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
`
export const InputBox = styled.div`
  width: 723px;
  border-top: 1px solid rgba(0, 0, 0, 0.2);
  @media ${breakPoints.tablet} {
    width: 100%;
  }
`
export const ValueBox = styled.div`
  width: 583px;
  height: 48px;
  padding: 0px 12px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  @media ${breakPoints.tablet} {
    width: 100%;
  }
`
export const EmailInput = styled.input`
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 2px;
  height: 30px;
  width: 117px;
  padding: 5px 7px;
`
export const PasswordInput = styled.input`
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 2px;
  height: 30px;
  width: 198px;
  padding: 5px 7px;
`
export const NumInput = styled.input`
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 2px;
  height: 30px;
  width: 59px;
  padding: 5px 7px;
`
export const CheckNumInput = styled.input`
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 2px;
  height: 30px;
  width: 98px;
  padding: 5px 7px;
`
export const EmailDropdown = styled.select`
  width: 122px;
  height: 30px;
  padding: 5px 7px;
  font-size: 13px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  margin-left: 5px;
`
export const SendAuthNumBtn = styled.button`
  width: 97px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 28px;
  font-size: 12px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 2px;
`

export const SubmitBtn = styled.button`
  background-color: ${(props) => (props.disabled ? '#CCCCCC' : '#393939')};
  width: 723px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => (props.disabled ? '#333333' : 'white')};
  font-size: 20px;
  font-weight: 600;
  margin-top: 57px;
  border: none;
  @media ${breakPoints.tablet} {
    width: 100%;
  }
`
export const IsSubmitPhoneNumRow = styled.div`
  width: 723px;
  height: 96px;
  display: flex;
  @media ${breakPoints.tablet} {
    width: 100%;
  }
`
export const IsSubmitPhoneNumVar = styled.div`
  width: 140px;
  height: 96px;
  background-color: #fafafa;
  padding: 14px 12px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
`
export const PhoneNumValueBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 583px;
  height: 96px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
`

export const NickNameTxt = styled.div`
  color: #00000066;
  font-weight: 400;
  font-size: 12px;
  margin-left: 11px;
`
