import * as S from "./useditemDetail.styled";
import { FiShare2, FiHeart, FiShoppingCart } from "react-icons/fi";
import { BsFillEyeFill } from "react-icons/bs";
import { useEffect } from "react";
import { useState } from "react";
import SellerInfo from "../../profile/fetchSeller/fetchSeller.container";
import { useRef } from "react";

declare const window: typeof globalThis & {
  //window 안에 카카오 넣어주는 것
  Kakao: any;
};

export default function UseditemDetailPage() {
  //   const el = useRef();
  const [isOpen, setIsOpen] = useState(false);
  const [isHeart, setIsHeart] = useState(false);

  const onClickOpen = () => {
    setIsOpen((prev) => !prev);
  };

  //   const CloseModal = ({ target }) => {
  //     console.log(!el.current.contains(target));
  //     if (isOpen && !el.current.contains(target)) {
  //       setIsOpen(false);
  //     }
  //   };
  //   console.log(isOpen);
  //   useEffect(() => {
  //     window.addEventListener("click", CloseModal);
  //     return () => {
  //       window.removeEventListener("click", CloseModal);
  //     };
  //   }, []);

  const onClickHeart = () => {
    setIsHeart((prev) => !prev);
    setTimeout(() => {
      setIsHeart((prev) => !prev);
    }, 1000);
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://developers.kakao.com/sdk/js/kakao.js";
    script.async = true;

    document.body.appendChild(script);

    script.onload = () => {
      createKakaoButton();
    };
  }, []);

  const createKakaoButton = () => {
    // kakao sdk script이 정상적으로 불러와졌으면 window.Kakao로 접근이 가능합니다
    if (window.Kakao) {
      const kakao = window.Kakao;

      // 중복 initialization 방지
      if (!kakao.isInitialized()) {
        // 두번째 step 에서 가져온 javascript key 를 이용하여 initialize
        kakao.init("a6737013adeb3b6bc159d974a287f791");
      }

      kakao.Link.createDefaultButton({
        // Render 부분 id=kakao-link-btn 을 찾아 그부분에 렌더링을 합니다
        container: "#kakao-link-btn",
        objectType: "feed",
        content: {
          title: "타이틀",
          description: "#리액트 #카카오 #공유버튼",
          imageUrl: "http://localhost:3000/vercel.svg", // i.e. process.env.FETCH_URL + '/logo.png'
          link: {
            mobileWebUrl: window.location.href,
            webUrl: window.location.href,
          },
        },
        social: {
          likeCount: 77,
          commentCount: 55,
          sharedCount: 333,
        },
        buttons: [
          {
            title: "웹으로 보기",
            link: {
              mobileWebUrl: window.location.href,
              webUrl: window.location.href,
            },
          },
          {
            title: "앱으로 보기",
            link: {
              mobileWebUrl: window.location.href,
              webUrl: window.location.href,
            },
          },
        ],
      });
    }
  };

  return (
    <S.Wrapper>
      <S.WrapperBody>
        <h2 style={{ textAlign: "center" }}>
          디올 에센셜 선글라스 10A0 Dior Essential
        </h2>
        <S.WrapperTitle>
          <S.TitleBox>
            <S.TitleImg src="/sunglass.jpeg" />
          </S.TitleBox>
          <S.TitleBox>
            <S.Titleprice>
              <S.PriceStyleColor>380,000</S.PriceStyleColor>
              <span>원</span>
            </S.Titleprice>
            <div style={{ display: "flex" }}>
              <S.IconBox>
                <FiHeart />0
              </S.IconBox>
              <S.IconBox>
                <BsFillEyeFill /> 0
              </S.IconBox>
              <S.IconBox>
                <FiShoppingCart />
                장바구니
              </S.IconBox>
              <S.IconBox className="kakao-share-button">
                {/* <FiShare2 style={{fontSize:28, marginRight:"5px"}}/>공유 */}
                <S.ShareButton id="kakao-link-btn">
                  <FiShare2 />
                  공유하기
                </S.ShareButton>
              </S.IconBox>
            </div>
            <div style={{ display: "flex" }}>
              <S.WrapperBodyUl>
                <S.WrapperLiStyle>상품상태</S.WrapperLiStyle>
                <S.WrapperLiStyle>브랜드</S.WrapperLiStyle>
                <S.WrapperLiStyle>상품종류</S.WrapperLiStyle>
                <S.WrapperLiStyle>구입년도</S.WrapperLiStyle>
              </S.WrapperBodyUl>
              <S.WrapperBodyUl>
                <S.WrapperLiStyle>중고</S.WrapperLiStyle>
                <S.WrapperLiStyle>디올</S.WrapperLiStyle>
                <S.WrapperLiStyle>상의</S.WrapperLiStyle>
                <S.WrapperLiStyle>2021.10</S.WrapperLiStyle>
              </S.WrapperBodyUl>
            </div>

            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <S.ButtonStyle onClick={onClickHeart}>
                <S.FiHeartIcon />
                찜하기
              </S.ButtonStyle>
              <S.ButtonStyle>문의하기</S.ButtonStyle>
              <S.ButtonBlackStyle>구매하기</S.ButtonBlackStyle>
            </div>
            <div>
              <h4
                style={{
                  marginBottom: "5px",
                }}
              >
                판매자 정보
              </h4>
              <S.SellerBox onClick={onClickOpen}>
                <S.SellerProfile></S.SellerProfile>
                <div>
                  <p>유저닉네임</p>
                  <p>판매 상품 0 거래 후기 0</p>
                </div>
              </S.SellerBox>
              <h4>판매자의 다른 상품도 만나보세요</h4>
              <S.SellerBox>
                <S.SellerProduct>550,000원</S.SellerProduct>
                <S.SellerProduct>550,000원</S.SellerProduct>
                <S.SellerProduct>550,000원</S.SellerProduct>
              </S.SellerBox>
            </div>
          </S.TitleBox>
        </S.WrapperTitle>
        <S.SelectBox></S.SelectBox>
        <S.ContentsBox>
          디올 에센셜 선글라스입니다. <br />
          공식 온라인 구매 상품으로
          <br />
          보증서 포함된 완벽한 새상품 + 정품입니다.
          <br />
          남녀 모두 사용하시기 좋은 심플한 디자인입니다.
          <br />
          <S.ContentsImg src="/sunglass.jpeg" />
          <br />
          <S.ContentsImg src="/sunglass02.jpeg" />
          <br />
          <S.ContentsImg src="/sunglass03.jpeg" />
          <br />
          <S.ContentsImg src="/sunglass04.jpeg" />
          <br />
        </S.ContentsBox>
        <div>
          <S.RelativeTitle>관련상품</S.RelativeTitle>
          <S.SliderContainer {...settings}>
            <S.SliderBox></S.SliderBox>
            <S.SliderBox></S.SliderBox>
            <S.SliderBox></S.SliderBox>
            <S.SliderBox></S.SliderBox>
            <S.SliderBox></S.SliderBox>
            <S.SliderBox></S.SliderBox>
          </S.SliderContainer>
        </div>
      </S.WrapperBody>
      <S.WrapperSellerInfo isOpen={isOpen}>
        <SellerInfo isOpen={isOpen} setIsOpen={setIsOpen} />
      </S.WrapperSellerInfo>
      <S.HeartBox isHeart={isHeart}>
        <S.HeartOnbox>
          <S.HeartFill fontSize={52} />
          <p>
            위시리스트에 <br />
            추가되었습니다.
          </p>
        </S.HeartOnbox>
      </S.HeartBox>
    </S.Wrapper>
  );
}
