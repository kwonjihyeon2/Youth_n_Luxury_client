import Navigation from '../src/components/commons/layout/navigation/Navigation.container'
import FindAccount from '../src/components/units/market/account/find/FindAccount.container'
import Basket from '../src/components/units/market/basket/Basket.container'
import Main from '../src/components/units/market/main/Main.container'
import MyAskDetail from '../src/components/units/market/myPage/myActivity/myAsk/detail/MyAskDetail.container'
import MyAskWrite from '../src/components/units/market/myPage/myActivity/myAsk/write/MyAskWrite.container'
import Review from '../src/components/units/market/myPage/myActivity/review/Review.container'
import DeleteUser from '../src/components/units/market/myPage/myInfo/deleteUser/DeleteUser.container'
import MyList from '../src/components/units/market/myPage/myShopping/myList/MyList.container'
import Transaction from '../src/components/units/market/myPage/myShopping/transaction/Transaction.container'
import WelcomeBox from '../src/components/units/market/myPage/welcomeBox/WelcomeBox.container'
import MyPage from './mypage'

export default function Home() {
  return <MyPage />
}
