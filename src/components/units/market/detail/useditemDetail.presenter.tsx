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
        <S.TitleStyle>디올 에센셜 선글라스 10A0 Dior Essential</S.TitleStyle>
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
                6,900,000
                <span style={{ fontSize: '24px' }}>원</span>
                <S.VerifyBox>
                  <img src="/detail/verified_user.png" />
                  &nbsp; 사용자 인증 완료
                  {/* 계좌인증되면 업데이트되도록 */}
                </S.VerifyBox>
              </S.PriceStyleColor>
              <S.FlexPocket>
                <S.IconBox>
                  <BsFillEyeFill />
                </S.IconBox>
                <S.IconBox>
                  <FiHeart />
                </S.IconBox>
                <S.IconBox>
                  <FiShoppingCart />
                </S.IconBox>
                <S.IconBox className="kakao-share-button">
                  {/* <FiShare2 style={{fontSize:28, marginRight:"5px"}}/>공유 */}
                  <S.ShareButton id="kakao-link-btn">
                    <FiShare2 />
                  </S.ShareButton>
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
                <S.WrapperLiStyle>[데이터값 브랜드]</S.WrapperLiStyle>
                <S.WrapperLiStyle>[상의]</S.WrapperLiStyle>
                <S.WrapperLiStyle>택배</S.WrapperLiStyle>
              </S.WrapperBodyUl>
            </S.FlexPocket>
            <S.PriceResult>
              총 상품금액
              <S.PriceStyleColor>
                &nbsp; [데이터값] 2,450,000 &nbsp;
              </S.PriceStyleColor>{' '}
              원
            </S.PriceResult>

            <S.ButtonFlexBox>
              <S.ButtonBlackStyle>바로구매</S.ButtonBlackStyle>
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
                  <div>유저닉네임</div>
                  <span style={{ fontWeight: '300' }}>
                    판매 상품 0개 거래 후기 0개
                  </span>
                </div>
                <S.SellerRate>
                  판매자 정보
                  <Rating
                    name="read-only"
                    size="small"
                    defaultValue={5}
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
          디올 에센셜 선글라스입니다. <br />
          공식 온라인 구매 상품으로
          <br />
          보증서 포함된 완벽한 새상품 + 정품입니다.
          <br />
          남녀 모두 사용하시기 좋은 심플한 디자인입니다.
          <br />
          <S.ContentsImg src="/detail/sunglass03.jpeg" />
          <br />
          <S.ContentsImg src="/detail/sunglass04.jpeg" />
          <br />
        </S.ContentsBox>
        <S.SlickStyle>
          <S.RelativeTitle>[데이터값] 유저님의 다른상품</S.RelativeTitle>
          <S.SliderContainer {...settings}>
            <div>
              <S.SliderBox></S.SliderBox>
              <div>에르메스 사고싶다</div>
              <div>2000만원이다</div>
            </div>
            <div>
              <S.SliderBox></S.SliderBox>
              <div>에르메스 사고싶다</div>
              <div>1000만원이다</div>
            </div>
            <div>
              <S.SliderBox></S.SliderBox>
              <div>에르메스 사고싶다</div>
              <div>2000만원이다</div>
            </div>
            <div>
              <S.SliderBox></S.SliderBox>
              <div>에르메스 사고싶다</div>
              <div>2000만원이다</div>
            </div>
            <div>
              <S.SliderBox></S.SliderBox>
              <div>에르메스 사고싶다</div>
              <div>2000만원이다</div>
            </div>
            <div>
              <S.SliderBox></S.SliderBox>
              <div>에르메스 사고싶다</div>
              <div>2000만원이다</div>
            </div>
          </S.SliderContainer>
        </S.SlickStyle>
        <S.SlickStyle>
          <S.RelativeTitle>[데이터값] 유저님의 다른상품</S.RelativeTitle>
          <S.SliderContainer {...settings}>
            <div>
              <S.SliderBox></S.SliderBox>
              <div>에르메스 사고싶다</div>
              <div>2000만원이다</div>
            </div>
            <div>
              <S.SliderBox></S.SliderBox>
              <div>에르메스 사고싶다</div>
              <div>1000만원이다</div>
            </div>
            <div>
              <S.SliderBox></S.SliderBox>
              <div>에르메스 사고싶다</div>
              <div>2000만원이다</div>
            </div>
            <div>
              <S.SliderBox></S.SliderBox>
              <div>에르메스 사고싶다</div>
              <div>2000만원이다</div>
            </div>
            <div>
              <S.SliderBox></S.SliderBox>
              <div>에르메스 사고싶다</div>
              <div>2000만원이다</div>
            </div>
            <div>
              <S.SliderBox></S.SliderBox>
              <div>에르메스 사고싶다</div>
              <div>2000만원이다</div>
            </div>
          </S.SliderContainer>
        </S.SlickStyle>

        <S.ButtonBox>
          <S.ListButton>등록하기</S.ListButton>
          <div style={{ textAlign: 'right' }}>
            <S.EditBtn>수정</S.EditBtn>
            <S.CancelBtn>취소</S.CancelBtn>
          </div>
        </S.ButtonBox>
      </S.WrapperBody>
      <S.WrapperSellerInfo isOpen={props.isOpen}>
        <SellerInfo isOpen={props.isOpen} setIsOpen={props.setIsOpen} />
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
