import styled from '@emotion/styled'
import { breakPoints } from '../../utils/media'

const LargeButton = styled.button`
  text-align: center;
  width: 200px;
  padding: 10px;
  background-color: #fff;
  border: 1px solid #000;
  cursor: pointer;
  @media ${breakPoints.mobile} ${breakPoints.xsmobile} {
    width: 50%;
  }
`

export default function ProductLargeButton(props) {
  return <LargeButton onClick={props.onClick}>{props.name}</LargeButton>
}
