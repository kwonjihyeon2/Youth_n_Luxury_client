import SideBarUI from './SideBar.presenter'

export default function SideBar(props) {
  return <SideBarUI onClickSwitchPage={props.onClickSwitchPage} />
}
