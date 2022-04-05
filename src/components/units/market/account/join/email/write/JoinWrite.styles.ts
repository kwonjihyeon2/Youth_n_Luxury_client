import styled from '@emotion/styled'
import { breakPoints } from '../../../../../../commons/utils/media'

export const ResponsiveBox = styled.div`
  width: 100%;
  padding: 60px 60px 100px 60px;
  display: flex;
  justify-content: center;
  @media ${breakPoints.tablet} {
    padding: 100px;
  }
  @media ${breakPoints.mobile}, ${breakPoints.xsmobile} {
    padding: 60px 30px 100px 30px;
  }
`

export const Wrapper = styled.div`
  width: 726px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 51px;
  @media (max-width: 991px) {
    width: 100%;
  }
`

export const ErrorMsg = styled.div`
  font-size: 9px;
  font-weight: 400;
  color: #ff0000;
`
export const JoinHeaderTxt = styled.div`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 51px;
`

export const Row = styled.div`
  width: 723px;
  height: 55px;
  display: flex;
  align-items: center;
  /* line-height: 60px; */
  @media (max-width: 991px) {
    width: 100%;
    height: 70px;
  }
`

export const VarTxt = styled.div`
  width: 140px;
  line-height: 2;
  height: 100%;
  padding: 14px 12px;
  background-color: #fafafa;
  font-weight: 400;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  @media (max-width: 991px) {
    line-height: 2.5;
  }
`
export const InputBox = styled.div`
  width: 723px;
  border-top: 1px solid rgba(0, 0, 0, 0.2);
  @media (max-width: 991px) {
    width: 100%;
  }
`
export const ValueBox = styled.div`
  width: 583px;
  height: 100%;
  padding: 0px 12px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  @media (max-width: 991px) {
    width: 100%;
  }
`
export const OtherValue = styled.div`
  width: 583px;
  height: 100%;
  padding: 0px 12px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  @media (max-width: 991px) {
    width: 100%;
    justify-content: center;
    flex-direction: column;
    align-items: flex-start;
  }
`
interface IPropsPwd {
  isPwdVal?: boolean
  isPwdCheck?: boolean
  isNumCheck?: boolean
}

export const ValiText = styled.span`
  display: ${(props: IPropsPwd) =>
    props.isPwdVal || props.isPwdCheck || props.isNumCheck ? 'none' : 'block'};
  color: red;
  font-weight: 400;
  font-size: 12px;
  margin-left: 10px;
  @media (max-width: 991px) {
    margin: 5px 0 0 0;
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
  margin-left: 10px;
  font-size: 12px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 2px;
  cursor: pointer;
  :hover {
    color: #7a36ff;
  }
`

interface IpropsCheck {
  isNumCheck: boolean
}

export const SubmitBtn = styled.button`
  background-color: ${(props: IpropsCheck) =>
    props.isNumCheck ? '#393939' : '#CCCCCC'};
  width: 723px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => (props.isNumCheck ? '#fff' : '#bdbdbd')};
  font-size: 20px;
  font-weight: 600;
  margin-top: 57px;
  border: none;
  cursor: ${(props) => (props.isNumCheck ? 'pointer' : 'auto')};
  :hover {
    color: ${(props) => (props.isNumCheck ? '#7a36ff' : '#bdbdbd')};
  }
  @media (max-width: 991px) {
    width: 100%;
  }
`
export const IsSubmitPhoneNumRow = styled.div`
  width: 723px;
  height: 96px;
  display: flex;
  @media (max-width: 991px) {
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
