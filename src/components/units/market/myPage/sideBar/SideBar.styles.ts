import styled from '@emotion/styled'

export const Wrapper = styled.div`
  width: 245px;
  display: flex;
  flex-direction: column;
`
export const MyPagePath = styled.div`
  height: 32px;
  padding-left: 16px;
  padding-top: 10px;
  display: flex;
`
export const PathImg = styled.img`
  width: 20px;
  height: 20px;
  background-color: grey;
`
export const PathTxt = styled.div`
  height: 16px;
  color: #6666664d;
  font-size: 12px;
  font-weight: 500;
`

export const MyShoppingHeaderTxt = styled.div`
  font-weight: 700;
  font-size: 20px;
  margin-bottom: 10px;
  margin-top: 67px;
  padding-left: 19px;
`

export const TitleTxt = styled.div`
  width: 245px;
  height: 45px;
  display: flex;
  align-items: center;
  font-size: 19px;
  font-weight: 400;
  margin-top: 44px;
  padding-left: 19px;
  border-bottom: 1px solid #6666664d;
`
export const SubTxt = styled.div`
  color: #767676;
  font-size: 14px;
  font-weight: 300;
  padding-left: 19px;
  width: 245px;
  height: 28px;
  display: flex;
  align-items: center;
  cursor: pointer;
  background-color: ${(props: IProps) =>
    props.isSelected ? '#F8F8F8' : 'white'};
`
interface IProps {
  isSelected: boolean
}
