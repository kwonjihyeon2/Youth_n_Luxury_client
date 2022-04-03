import styled from '@emotion/styled'

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  font-size: 16px;
  box-sizing: border-box;
`

export const WrapperContents = styled.div`
  width: 100%;
  max-width: 1200px;
  height: 800px;
  padding: 0 60px;
  display: flex;
`

export const WrapperLeft = styled.div`
  width: 40%;
  background-color: #9e9e9e;
`
export const WrapperRight = styled.div`
  width: 60%;
  background-color: rgba(204, 199, 242, 0.55);
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`
export const WrapperName = styled.div`
  font-weight: 700;
  padding: 20px;
  border-bottom: 1px solid #7b7b7b;
`

export const UserList = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid #7b7b7b;
`

export const UserProfile = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 100%;
  background-color: #fff;
  padding: 10px;
  margin-right: 10px;
`
export const UserName = styled.div`
  font-weight: 700;
  line-height: 20px;
`
export const ChatDay = styled.span`
  font-weight: 300;
  font-size: 12px;
  margin-left: 5px;
`
////////////////////////////////
////////////////////////////////
////////////////////////////////

export const MyComments = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 30px;
  justify-content: flex-end;
`

export const YourComments = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 10px;
`

export const TalkBalloon = styled.div`
  width: 50%;
  height: 50px;
  padding: 10px;
  background: #c4c4c4;
  border-radius: 10px;
  margin: 0 20px;
  margin-top: 30px;
  position: relative;
`

export const Triangle = styled.div`
  position: absolute;
  top: 0;
  right: -10%;
  width: 0;
  height: 0;
  border-bottom: 20px solid transparent;
  border-top: 0px solid transparent;
  border-left: 20px solid rgba(196, 196, 196, 0.9);
  border-right: 20px solid transparent;
`

export const LeftTriangle = styled.div`
  position: absolute;
  top: 0;
  left: -4%;
  width: 0;
  height: 0;
  border-bottom: 20px solid transparent;
  border-top: 0px solid transparent;
  border-left: 0px solid transparent;
  border-right: 20px solid rgba(196, 196, 196, 0.9);
`

export const ChatValue = styled.input`
  width: 100%;
  padding: 10px;
  border-radius: 30px;
  background-color: rgba(196, 196, 196, 0.4);
  border: none;
`
