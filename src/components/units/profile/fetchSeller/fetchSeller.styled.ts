import styled from '@emotion/styled'
import { breakPoints } from '../../../commons/utils/media'

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
  @media${breakPoints.tablet} {
    width: 700px;
    padding: 40px;
  }
  @media${breakPoints.mobile} {
    width: 500px;
    padding: 40px;
  }
  @media${breakPoints.xsmobile} {
    width: 320px;
    padding: 40px;
  }
`

export const Productlist = styled.div`
  width: 100%;
  @media ${breakPoints.mobile} {
    margin-top: 20px;
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
  @media ${breakPoints.mobile} {
    margin-top: 0px;
  }
`
export const productImage = styled.img`
  width: 90px;
  @media ${breakPoints.tablet} {
    width: 33%;
  }
`
export const WrapperContents = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  position: relative;
  @media ${breakPoints.mobile}, ${breakPoints.xsmobile} {
    flex-direction: column;
    align-items: center;
  }
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
  @media (max-width: 1199px) {
    width: 100px;
    height: 100px;
  }
`
export const CancelBtn = styled.button`
  position: absolute;
  top: -25%;
  right: -8%;
  background-color: #fff;
  border: none;
  font-size: 1.25rem;
  @media (max-width: 1199px) {
    top: -5%;
    right: -3%;
  }
`
