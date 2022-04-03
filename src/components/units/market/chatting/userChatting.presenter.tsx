export default function UserChattingPageUI(props) {
  const UserArr = [
    {
      name: '조진일',
      createdAt: '3월 25일',
      content: '몇시에 만날까요?',
      profile: '이미지',
    },
    {
      name: '양진영',
      createdAt: '3월 25일',
      content: '일단 좀 자고 올게요',
      profile: '이미지',
    },
    {
      name: '황규빈',
      createdAt: '3월 25일',
      content: '저는 다 좋아요',
      profile: '이미지',
    },
  ]

  return (
    <div className="Wrapper">
      <div className="WrapperContents">
        <div className="WrapperLeft">
          <div className="WrapperName">유저이름</div>
          {UserArr.map((el, index) => (
            <div className="UserList" key={index}>
              <div className="UserProfile">{el.profile}</div>
              <div>
                <div className="UserName">
                  {el.name}
                  <span className="ChatDay">{el.createdAt}</span>
                </div>
                <div>{el.content}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="WrapperRight">
          <div className="YourComments">
            <div>
              <img src="/detail/profile.png" />
            </div>
            <div className="TalkBalloon">
              말풍선
              <div className="LeftTriangle"></div>
            </div>
          </div>
          <div className="MyComments">
            <div className="TalkBalloon">
              <div className="Triangle"></div>
              말풍선
            </div>
            <div>
              <img src="/detail/profile.png" />
            </div>
          </div>
          <input
            className="ChatValue"
            type="text"
            placeholder="내용을 입력하세요."
          />
        </div>
      </div>
    </div>
  )
}
