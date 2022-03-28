import styled from '@emotion/styled'

export const Wrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 850px;
  font-size: 14px;
  padding: 40px 70px;
  background-color: #fff;
  border-radius: 12px;
  h1 {
    margin: 0;
  }
`

export const BoldSpan = styled.span`
  font-weight: 700;
`
export const ProfileName = styled.div`
  font-size: 1.25rem;
  font-weight: 700;
`

export const SpaceImg = styled.div`
  margin-top: 20px;
`

export const WrapperContents = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  position: relative;
`

export const TestBox = styled.div`
  width: 400px;
  height: 400px;
  background-color: #bdbdbd;
`

export const ContentBox = styled.div`
  div {
    padding: 5px 0;
  }
  &:nth-child(3) div {
    display: flex;
    align-items: center;
  }
`

export const Content = styled.div`
  display: flex;
  align-items: center;
`

export const ProfileBox = styled.div`
  width: 130px;
  height: 130px;
  border-radius: 100%;
  background-color: #bdbdbd;
  margin-right: 25px;
`
export const CancelBtn = styled.button`
  position: absolute;
  top: -25%;
  right: -8%;
  background-color: #fff;
  border: none;
  font-size: 1.25rem;
`
