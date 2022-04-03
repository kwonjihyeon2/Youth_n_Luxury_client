import { useRouter } from 'next/router'
import NavigationUI from './Navigation.presenter'

export default function Navigation() {
  const router = useRouter()
  const onClickLogo = () => {
    router.push(`/`)
  }
  const onClickMySell = () => {
    router.push(`/market/new`)
  }
  const onClickEl = () => {
    router.push(`/market/list`)
  }
  const onClickMyIcon = () => {
    router.push(`/mypage/myShopping/transaction/`)
  }
  const onClickMyWish = () => {
    router.push(`/mypage/myShopping/wishList`)
  }
  return (
    <NavigationUI
      onClickMySell={onClickMySell}
      onClickEl={onClickEl}
      onClickMyIcon={onClickMyIcon}
      onClickLogo={onClickLogo}
      onClickMyWish={onClickMyWish}
    />
  )
}
