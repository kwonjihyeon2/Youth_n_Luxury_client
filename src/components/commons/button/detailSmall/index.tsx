import styled from '@emotion/styled'
import { breakPoints } from '../../utils/media'

const SmallButton = styled.button`
  width: 100px;
  padding: 10px 0;
  margin: 25px 0 25px 10px;
  border: 1px solid #000;
  background-color: #000;
  color: #fff;
  cursor: pointer;
  &:hover {
    color: #7a36ff;
  }
  @media ${breakPoints.mobile} ${breakPoints.xsmobile} {
    width: 30%;
    margin: 0;
  }
`

export default function ProductSmallButton(props) {
  return (
    <SmallButton style={props.style} onClick={props.onClick}>
      {props.name}
    </SmallButton>
  )
}
