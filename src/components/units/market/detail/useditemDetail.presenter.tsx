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
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
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
    responsive: [
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  }

  const [arr, setArr] = useState([])
  const [sellerArr, setSellerArr] = useState([])
  const [resArr, setResArr] = useState([])
  useEffect(() => {
    if (!props.data?.fetchProduct.urls) return
    // console.log(props.data?.fetchProduct.urls)

    let urls = props.data?.fetchProduct.urls
    const result = urls.substring(1, urls.length - 1).split(',')
    // 0 번째 사진만쓴다. 대표이미지

    setArr(result)
  }, [props.data])

  return (
    <S.Wrapper>
      <S.WrapperBody>
        <S.TitleStyle>{props.data?.fetchProduct.name}</S.TitleStyle>
        <S.WrapperTitle>
          <S.PageContainer>
            <Slider asNavFor={nav2} {...mainSettings} ref={slider1}>
              {arr.map((el, index) => (
                <S.PagingSlick key={index}>
                  <img
                    src={`https://storage.googleapis.com/${el}`}
                    alt="이미지"
                    style={{ width: '100%', height: '100%' }}
                  />
                </S.PagingSlick>
              ))}
            </Slider>
            <S.PagingSlickBox asNavFor={nav1} ref={slider2} {...pagingSettings}>
              {arr.map((el, index) => (
                <S.PagingSmallSlick key={index}>
                  <img
                    src={`https://storage.googleapis.com/${el}`}
                    alt="이미지"
                    style={{ height: '100%' }}
                  />
                </S.PagingSmallSlick>
              ))}
            </S.PagingSlickBox>
          </S.PageContainer>
          <S.ResponsiveMiddle>
            <S.Titleprice>
              <S.PriceStyleColor>
                {props.data?.fetchProduct.price}
                <span style={{ fontSize: '24px' }}>원</span>
                <S.VerifyBox>
                  <img src="/detail/verified_user.png" />
                  <S.VerifySpan> 사용자 인증 완료 </S.VerifySpan>
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
                  <FiShoppingCart onClick={props.onClickBasketBtn} />
                </S.IconBox>
                <S.IconBox style={{ cursor: 'pointer' }}>
                  <div onClick={props.onClickShare}>
                    <FiShare2 />
                    <S.KakaoButton isShare={props.isShare}>
                      <div id="kakao-link-btn">
                        <S.ShareButton className="kakao-share-button"></S.ShareButton>
                      </div>
                      <S.CopyButton></S.CopyButton>
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
                  {props.data?.fetchProduct.brand?.name}
                </S.WrapperLiStyle>
                <S.WrapperLiStyle>
                  {props.data?.fetchProduct.subCategory?.name}
                </S.WrapperLiStyle>
                <S.WrapperLiStyle>택배</S.WrapperLiStyle>
              </S.WrapperBodyUl>
            </S.FlexPocket>
            <S.PriceResult>
              총 상품금액
              <S.PriceStyleColor>
                &nbsp; {props.data?.fetchProduct.price} &nbsp;
              </S.PriceStyleColor>
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
              <S.ButtonStyle onClick={props.onClickMakeRoom}>
                문의하기
                <S.PhoneIconSpan></S.PhoneIconSpan>
              </S.ButtonStyle>
              <S.ButtonRightStyle
                isHeart={props.isHeart}
                isKeep={props.isKeep}
                onClick={props.onClickHeart}
              >
                찜하기
                <S.HeartIconSpan isKeep={props.isKeep}></S.HeartIconSpan>
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
          </S.ResponsiveMiddle>
        </S.WrapperTitle>
        <S.SelectBox></S.SelectBox>
        <S.ContentsBox>
          <S.ContentsImg src={`https://storage.googleapis.com/${arr[0]}`} />
          <br />
          {props.data?.fetchProduct.description}
          <br />
          <S.ContentsImg src={`https://storage.googleapis.com/${arr[1]}`} />
        </S.ContentsBox>
        <S.SlickStyle>
          <S.RelativeTitle>
            [ {props.data?.fetchProduct.user.name} ]님의 다른상품
          </S.RelativeTitle>
          <S.SliderContainer {...settings}>
            {props.productData?.fetchSellerProduct.map((el, index) => (
              <div key={el.id}>
                <S.SliderBox key={el.id}>
                  {/* <div>{el.urls}</div> */}
                  <img
                    style={{ width: '100%', height: '100%' }}
                    src={`https://storage.googleapis.com/${arr[index]}`}
                  />
                </S.SliderBox>
                <p>{el.name}</p>
                <div>{el.price}원</div>
              </div>
            ))}
          </S.SliderContainer>
        </S.SlickStyle>
        <S.SlickStyle>
          <S.RelativeTitle>
            [ {props.data?.fetchProduct.subCategory?.name} ]과 연관된 상품
            미리보기
          </S.RelativeTitle>
          <S.SliderContainer {...settings}>
            {props.relativeData?.fetchProductRelateMainCategory.map(
              (el, index) => (
                <div>
                  <div key={el.id}>
                    <S.SliderBox>
                      <img
                        style={{ width: '100%', height: '100%' }}
                        src={`https://storage.googleapis.com/${arr[index]}`}
                      />
                    </S.SliderBox>
                    <p>{el.name}</p>
                    <div>{el.price}원</div>
                  </div>
                </div>
              )
            )}
            {props.relativeData?.fetchProductRelateMainCategory.length < 4 && (
              <div>
                <S.SliderBox></S.SliderBox>
                <p>에르메스 버킷백</p>
                <div>2000만원</div>
              </div>
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
