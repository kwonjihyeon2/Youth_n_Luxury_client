import * as S from './useditemDetail.styled'
import { FiShare2, FiHeart, FiShoppingCart } from 'react-icons/fi'
import { BsFillEyeFill } from 'react-icons/bs'
import SellerInfo from '../../profile/fetchSeller/fetchSeller.container'
import { Rating } from '@mui/material'
import { useRef, useState } from 'react'
import { useEffect } from 'react'
import Slider from 'react-slick'

export default function UseditemDetailPageUI(props) {
  const slider1 = useRef(null)
  const slider2 = useRef(null)

  const [nav1, setNav1] = useState(null)
  const [nav2, setNav2] = useState(null)

  useEffect(() => {
    setNav1(slider1.current)
    setNav2(slider2.current)
  }, [])

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <S.NextButton />,
    prevArrow: <S.PreviousButton />,
  }

  const mainSettings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  const pagingSettings = {
    dots: false,
    arrows: true,
    slidesToShow: 4,
    swipeToSlide: true,
    focusOnSelect: true,
    nextArrow: <S.NextButton />,
    prevArrow: <S.PreviousButton />,
  }

  return (
    <S.Wrapper>
      <S.WrapperBody>
        <S.TitleStyle>{props.data?.fetchProduct.name}</S.TitleStyle>
        <S.WrapperTitle>
          <S.PageContainer>
            <Slider asNavFor={nav2} {...mainSettings} ref={slider1}>
              <div>
                <S.TitleImg src="/detail/Rectangle-226.png" />
              </div>
              <div>
                <S.TitleImg src="/detail/Rectangle-226.png" />
              </div>
              <div>
                <S.PagingSlick></S.PagingSlick>
              </div>
              <div>
                <S.PagingSlick></S.PagingSlick>
              </div>
              <div>
                <S.PagingSlick></S.PagingSlick>
              </div>
              <div>
                <S.PagingSlick></S.PagingSlick>
              </div>
            </Slider>
            <S.PagingSlickBox asNavFor={nav1} ref={slider2} {...pagingSettings}>
              <div>
                <S.PagingSmallSlick>1</S.PagingSmallSlick>
              </div>
              <div>
                <S.PagingSmallSlick>2</S.PagingSmallSlick>
              </div>
              <div>
                <S.PagingSmallSlick>3</S.PagingSmallSlick>
              </div>
              <div>
                <S.PagingSmallSlick>4</S.PagingSmallSlick>
              </div>
              <div>
                <S.PagingSmallSlick>5</S.PagingSmallSlick>
              </div>
              <div>
                <S.PagingSmallSlick>6</S.PagingSmallSlick>
              </div>
            </S.PagingSlickBox>
          </S.PageContainer>
          <div>
            <S.Titleprice>
              <S.PriceStyleColor>
                {props.data?.fetchProduct.price}
                <span style={{ fontSize: '24px' }}>원</span>
                <S.VerifyBox>
                  <img src="/detail/verified_user.png" />
                  &nbsp; 사용자 인증 완료
                  {/* 계좌인증되면 업데이트되도록 */}
                </S.VerifyBox>
              </S.PriceStyleColor>
              <S.FlexPocket>
                <S.IconBox>
                  <S.RedCount>{props.data?.fetchProduct.like}</S.RedCount>
                  <BsFillEyeFill />
                </S.IconBox>
                <S.IconBox>
                  <S.RedCount>{props.data?.fetchProduct.like}</S.RedCount>
                  <FiHeart />
                </S.IconBox>
                <S.IconBox style={{ cursor: 'pointer' }}>
                  <FiShoppingCart />
                </S.IconBox>
                <S.IconBox style={{ cursor: 'pointer' }}>
                  <div onClick={props.onClickShare}>
                    <FiShare2 />
                    <S.KakaoButton isShare={props.isShare}>
                      <div id="kakao-link-btn">
                        <S.ShareButton className="kakao-share-button"></S.ShareButton>
                      </div>
                      <S.CopyButton></S.CopyButton>
                      {/* <input
                        style={{ display: 'none' }}
                        type="text"
                        value={`http://localhost:3000/market/${props.data?.fetchProduct.id}`}
                        ref={props.ShareRef}
                      /> */}
                    </S.KakaoButton>
                  </div>
                </S.IconBox>
              </S.FlexPocket>
            </S.Titleprice>
            <S.FlexPocket>
              <S.WrapperBodyUl>
                <S.WrapperLiStyle>상품정보</S.WrapperLiStyle>
                <S.WrapperLiStyle>브랜드</S.WrapperLiStyle>
                <S.WrapperLiStyle>상품종류</S.WrapperLiStyle>
                <S.WrapperLiStyle>거래방식</S.WrapperLiStyle>
              </S.WrapperBodyUl>
              <S.WrapperBodyUl>
                <S.WrapperLiStyle>아래 '상품설명' 참조</S.WrapperLiStyle>
                <S.WrapperLiStyle>
                  {props.data?.fetchProduct.brand.name}
                </S.WrapperLiStyle>
                <S.WrapperLiStyle>
                  {props.data?.fetchProduct.subCategory.name}
                </S.WrapperLiStyle>
                <S.WrapperLiStyle>택배</S.WrapperLiStyle>
              </S.WrapperBodyUl>
            </S.FlexPocket>
            <S.PriceResult>
              총 상품금액
              <S.PriceStyleColor>
                &nbsp; {props.data?.fetchProduct.price} &nbsp;
              </S.PriceStyleColor>{' '}
              원
            </S.PriceResult>

            <S.ButtonFlexBox>
              <S.ButtonBlackStyle
                onClick={props.moveToPage(
                  `/market/${props.data?.fetchProduct.id}/payment`
                )}
              >
                바로구매
              </S.ButtonBlackStyle>
              <S.ButtonStyle>
                문의하기
                <S.PhoneIconSpan></S.PhoneIconSpan>
              </S.ButtonStyle>
              <S.ButtonRightStyle
                isHeart={props.isHeart}
                onClick={props.onClickHeart}
              >
                찜하기
                <S.HeartIconSpan isHeart={props.isHeart}></S.HeartIconSpan>
              </S.ButtonRightStyle>
            </S.ButtonFlexBox>
            <S.ProfileBox>
              <S.SellerBox onClick={props.onClickOpen}>
                <S.SellerProfile>
                  <img src="/detail/rion.png" />
                </S.SellerProfile>
                <div>
                  <div>{props.data?.fetchProduct.user.name}님</div>
                  <span style={{ fontWeight: '300' }}>
                    판매 상품 {props.productData?.fetchSellerProduct.length}개
                    거래 후기 0개
                  </span>
                </div>
                <S.SellerRate>
                  판매자 정보
                  <Rating
                    name="read-only"
                    size="small"
                    defaultValue={Number(
                      props.data?.fetchProduct.user.ratingAvg
                    )}
                    readOnly
                  />
                </S.SellerRate>
              </S.SellerBox>
            </S.ProfileBox>
          </div>
        </S.WrapperTitle>
        <S.SelectBox></S.SelectBox>
        <S.ContentsBox>
          <S.ContentsImg src="/detail/sunglass.jpeg" />
          <br />
          {props.data?.fetchProduct.description}
          <br />
          <S.ContentsImg src="/detail/sunglass03.jpeg" />
          <br />
        </S.ContentsBox>
        <S.SlickStyle>
          <S.RelativeTitle>
            {props.data?.fetchProduct.user.name}님의 다른상품
          </S.RelativeTitle>
          <S.SliderContainer {...settings}>
            {props.productData?.fetchSellerProduct.map((el) => (
              <div key={el.id}>
                <S.SliderBox></S.SliderBox>
                {/* urls parse 필요 */}
                <p>{el.name}</p>
                <div>{el.price}원</div>
              </div>
            ))}
          </S.SliderContainer>
        </S.SlickStyle>
        <S.SlickStyle>
          <S.RelativeTitle>
            [ {props.data?.fetchProduct.subCategory.name} ]과 연관된 상품
            미리보기
          </S.RelativeTitle>
          <S.SliderContainer {...settings}>
            {props.relativeData?.fetchProductRelateMainCategory.map((el) => (
              <div>
                <div key={el.id}>
                  <S.SliderBox></S.SliderBox>
                  <p>{el.name}</p>
                  <div>{el.price}원</div>
                </div>
              </div>
            ))}
            {props.relativeData?.fetchProductRelateMainCategory.length < 4 ? (
              <div>
                <S.SliderBox></S.SliderBox>
                <p>에르메스 버킷백</p>
                <div>2000만원</div>
              </div>
            ) : (
              <></>
            )}
          </S.SliderContainer>
        </S.SlickStyle>

        <S.ButtonBox>
          <S.ListButton onClick={props.moveToPage('/market/list')}>
            목록으로
          </S.ListButton>
          <div style={{ textAlign: 'right' }}>
            <S.EditBtn
              onClick={props.moveToPage(
                `/market/${props.data?.fetchProduct.id}/edit`
              )}
            >
              수정
            </S.EditBtn>
            <S.CancelBtn onClick={props.onClickDelete}>삭제</S.CancelBtn>
          </div>
        </S.ButtonBox>
      </S.WrapperBody>
      <S.WrapperSellerInfo isOpen={props.isOpen}>
        <SellerInfo
          productData={props.productData}
          data={props.data}
          isOpen={props.isOpen}
          setIsOpen={props.setIsOpen}
        />
      </S.WrapperSellerInfo>
      <S.HeartBox isHeart={props.isHeart}>
        <S.HeartOnbox>
          <S.HeartFill fontSize={52} />
          <p>
            위시리스트에 <br />
            추가되었습니다.
          </p>
        </S.HeartOnbox>
      </S.HeartBox>
    </S.Wrapper>
  )
}
