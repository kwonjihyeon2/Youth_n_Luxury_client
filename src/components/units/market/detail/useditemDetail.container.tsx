import { useEffect } from 'react'
import { useState } from 'react'
import UseditemDetailPageUI from './useditemDetail.presenter'

declare const window: typeof globalThis & {
  Kakao: any
}

export default function UseditemDetailPage() {
  //   const el = useRef();
  const [isOpen, setIsOpen] = useState(false)
  const [isHeart, setIsHeart] = useState(false)

  const onClickOpen = () => {
    setIsOpen((prev) => !prev)
  }

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
    setIsHeart((prev) => !prev)
  }
  console.log(isHeart)

  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://developers.kakao.com/sdk/js/kakao.js'
    script.async = true

    document.body.appendChild(script)

    script.onload = () => {
      createKakaoButton()
    }
  }, [])

  const createKakaoButton = () => {
    if (window.Kakao) {
      const kakao = window.Kakao

      // 중복 initialization 방지
      if (!kakao.isInitialized()) {
        // 두번째 step 에서 가져온 javascript key 를 이용하여 initialize
        kakao.init('a6737013adeb3b6bc159d974a287f791')
      }

      kakao.Link.createDefaultButton({
        // Render 부분 id=kakao-link-btn 을 찾아 그부분에 렌더링을 합니다
        container: '#kakao-link-btn',
        objectType: 'feed',
        content: {
          title: '타이틀',
          description: '#리액트 #카카오 #공유버튼',
          imageUrl: 'http://localhost:3000/vercel.svg', // i.e. process.env.FETCH_URL + '/logo.png'
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
            title: '웹으로 보기',
            link: {
              mobileWebUrl: window.location.href,
              webUrl: window.location.href,
            },
          },
          {
            title: '앱으로 보기',
            link: {
              mobileWebUrl: window.location.href,
              webUrl: window.location.href,
            },
          },
        ],
      })
    }
  }

  return (
    <UseditemDetailPageUI
      isHeart={isHeart}
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      onClickHeart={onClickHeart}
      onClickOpen={onClickOpen}
    />
  )
}
