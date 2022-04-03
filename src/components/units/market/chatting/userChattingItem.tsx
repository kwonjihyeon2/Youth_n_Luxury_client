export default function ChatlogPage(props) {
  return (
    <div className="WrapperRight">
      {props.chatInfo ? (
        <div className="Chatground">
          <div className="YourComments">
            <div>
              <img src="/detail/profile.png" />
            </div>
            <div>
              <div>{props.chatInfo.user.name}</div>
              <div className="TalkBalloon">
                말풍선
                <div className="LeftTriangle"></div>
              </div>
            </div>
          </div>
          <div className="MyComments">
            <div className="align">
              <div>{props.chatInfo.product.user.name}</div>
              <div className="TalkBalloon">
                말풍선
                <div className="Triangle"></div>
              </div>
            </div>
            <div>
              <img src="/detail/profile.png" />
            </div>
          </div>
        </div>
      ) : (
        <div></div>
      )}
      <div className="SendChat">
        <input
          className="ChatValue"
          type="text"
          onClick={props.onSendChat}
          placeholder="내용을 입력하세요."
        />
        <button className="SendButton" onClick={props.onChangeText}>
          전송
        </button>
      </div>
    </div>
  )
}
