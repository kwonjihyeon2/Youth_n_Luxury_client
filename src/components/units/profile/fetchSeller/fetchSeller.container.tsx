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
            <S.ProfileName>
              {props.data?.fetchProduct.user.name}님
            </S.ProfileName>
            <div>
              판매상품{' '}
              <S.BoldSpan>
                {props.productData?.fetchSellerProduct.length}
              </S.BoldSpan>
              개, 거래후기
              <S.BoldSpan> 4</S.BoldSpan>개
            </div>
            <S.Content>
              <S.BoldSpan style={{ marginRight: '10px' }}>
                판매자평가
              </S.BoldSpan>
              <Rating
                name="read-only"
                defaultValue={Number(props.data?.fetchProduct.user.ratingAvg)}
                readOnly
              />
            </S.Content>
          </S.ContentBox>
        </div>
        <div>
          <div>
            <S.BoldSpan style={{ fontSize: '1.25rem' }}>
              {props.data?.fetchProduct.user.name}
            </S.BoldSpan>
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
