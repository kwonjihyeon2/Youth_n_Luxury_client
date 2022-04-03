import ChatlogPage from './userChattingItem'

export default function UserChattingPageUI(props) {
  return (
    <div className="Wrapper">
      <div className="WrapperContents">
        <div className="WrapperBox">
          <div className="WrapperLeft">
            <div className="WrapperName">
              {props.chatInfo.product.user.name}
            </div>
            {props.data?.joinSeller?.map((el, index) => (
              <div
                className="UserList"
                key={index}
                onClick={props.onClickOpenRoom(el.roomId)}
              >
                <div className="UserProfile">{el.user?.profilePic}</div>
                <div>
                  <div className="UserName">
                    {el.user?.name}
                    {/* <span className="ChatDay">{el.chatLog}</span> */}
                  </div>
                  {/* <div>{el.content}</div> */}
                </div>
              </div>
            ))}
          </div>
          <ChatlogPage
            onChangeText={props.onChangeText}
            chatInfo={props.chatInfo}
            onSendChat={props.onSendChat}
          />
        </div>
      </div>
    </div>
  )
}
