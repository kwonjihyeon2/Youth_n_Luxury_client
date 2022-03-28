import * as S from './fetchSeller.styled'
import { Rating } from '@mui/material'

export default function SellerInfo(props) {
  const onClickClose = () => {
    props.setIsOpen((prev) => !prev)
  }

  return (
    <S.Wrapper>
      <S.WrapperContents>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <S.ProfileBox></S.ProfileBox>
          <S.ContentBox>
            <S.ProfileName>유저네임</S.ProfileName>
            <div>
              판매상품 <S.BoldSpan> 2개 </S.BoldSpan> 거래후기
              <S.BoldSpan> 4개 </S.BoldSpan>
            </div>
            <S.Content>
              <S.BoldSpan style={{ marginRight: '10px' }}>
                판매자평가
              </S.BoldSpan>
              <Rating name="read-only" defaultValue={5} readOnly />
            </S.Content>
          </S.ContentBox>
        </div>
        <div>
          <div>
            <S.BoldSpan style={{ fontSize: '1.25rem' }}>유저네임</S.BoldSpan>
            님이 판매중인 상품
          </div>
          <S.SpaceImg>
            <img style={{ width: '90px' }} src="/detail/bag.png" />
            <img style={{ width: '90px' }} src="/detail/bag.png" />
            <img style={{ width: '90px' }} src="/detail/bag.png" />
          </S.SpaceImg>
        </div>
        <S.CancelBtn onClick={onClickClose}>X</S.CancelBtn>
      </S.WrapperContents>
    </S.Wrapper>
  )
}
