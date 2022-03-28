import MyAsk from './myActivity/myAsk/list/MyAsk.container'
import Review from './myActivity/review/Review.container'
import DeleteUser from './myInfo/deleteUser/DeleteUser.container'
import EditUser from './myInfo/editUser/EditUser.container'
import MyList from './myShopping/myList/MyList.container'
import Transaction from './myShopping/transaction/Transaction.container'
import SideBar from './sideBar/SideBar.container'
import * as S from './MyPage.styles'
import WelcomeBox from './welcomeBox/WelcomeBox.container'
export default function MyPageUI(props) {
  return (
    <S.Position>
      <SideBar />
      <S.RightContainer>
        <WelcomeBox />
        <Transaction />
        <MyList />
        <MyAsk />
        <Review />
        <EditUser />
        <DeleteUser />
      </S.RightContainer>
    </S.Position>
  )
}
