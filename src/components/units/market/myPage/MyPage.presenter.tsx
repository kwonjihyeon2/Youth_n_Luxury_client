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
      <SideBar onClickSwitchPage={props.onClickSwitchPage} />
      <S.RightContainer>
        <WelcomeBox />
        {props.pageNum === 0 && <Transaction />}
        {(props.pageNum === 1 || props.pageNum === 2) && <MyList />}
        {props.pageNum === 3 && <MyAsk />}
        {(props.pageNum === 4 || props.pageNum === 5) && <Review />}
        {props.pageNum === 6 && <EditUser />}
        {props.pageNum === 7 && <DeleteUser />}
      </S.RightContainer>
    </S.Position>
  )
}
