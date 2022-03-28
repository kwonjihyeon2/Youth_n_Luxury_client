import { BellOutlined } from '@ant-design/icons'
import { useState } from 'react'
import * as S from './AlertMessage.styled'

export default function AlertMessagePageUI() {
  const [isAlert, setAlert] = useState(false)
  const onClickAlert = () => {
    setAlert((prev) => !prev)
  }
  //   console.log(isAlert)

  return (
    <S.Wrapper>
      <S.ModalAlert isAlert={isAlert}>
        <S.MessageImage></S.MessageImage>
        <div>
          <div>양진영님으로부터 메세지가 왔어요!</div>
          <div>
            알림센터 | <span>3월 24일</span>
          </div>
        </div>
      </S.ModalAlert>
      <S.WrapperContents>
        <S.WrapperTop>
          <S.HeadText>
            <div style={{ position: 'relative' }} onClick={onClickAlert}>
              <BellOutlined />
              <S.AlertRed></S.AlertRed>
            </div>
            <div>알림 모아보기</div>
          </S.HeadText>
          <div>
            <S.CommonsButton>새로고침</S.CommonsButton>
            <S.CommonsButton>읽은 알림 삭제</S.CommonsButton>
            <S.CommonsButton>모두삭제</S.CommonsButton>
          </div>
        </S.WrapperTop>
        <S.WrapperMessage>
          <div>
            <S.Wrappercalendar>
              <div>
                <img src="/detail/timer.png" />
              </div>
              3월 24일
            </S.Wrappercalendar>
            <S.MessagesBox>
              <S.MessageBox>
                <S.MessageImage></S.MessageImage>
                <div>
                  <div>양진영님으로부터 메세지가 왔어요!</div>
                  <div>
                    알림센터 | <span>3월 24일</span>
                  </div>
                </div>
                <S.MessageDelete>X</S.MessageDelete>
              </S.MessageBox>
              <S.MessageBox>
                <S.MessageImage></S.MessageImage>
                <div>
                  <div>양진영님으로부터 메세지가 왔어요!</div>
                  <div>
                    알림센터 | <span>3월 24일</span>
                  </div>
                  <S.MessageDelete>X</S.MessageDelete>
                </div>
              </S.MessageBox>
            </S.MessagesBox>
          </div>
          <div>
            <S.Wrappercalendar>
              <div>
                <img src="/detail/timer.png" />
              </div>
              3월 24일
            </S.Wrappercalendar>
            <S.MessagesBox>
              <S.MessageBox>
                <S.MessageImage></S.MessageImage>
                <div>
                  <div>양진영님으로부터 메세지가 왔어요!</div>
                  <div>
                    알림센터 | <span>3월 24일</span>
                  </div>
                </div>
                <S.MessageDelete>X</S.MessageDelete>
              </S.MessageBox>
              <S.MessageBox>
                <S.MessageImage></S.MessageImage>
                <div>
                  <div>양진영님으로부터 메세지가 왔어요!</div>
                  <div>
                    알림센터 | <span>3월 24일</span>
                  </div>
                  <S.MessageDelete>X</S.MessageDelete>
                </div>
              </S.MessageBox>
            </S.MessagesBox>
          </div>
          <div>
            <S.Wrappercalendar>
              <div>
                <img src="/detail/timer.png" />
              </div>
              3월 24일
            </S.Wrappercalendar>
            <S.MessagesBox>
              <S.MessageBox>
                <S.MessageImage></S.MessageImage>
                <div>
                  <div>양진영님으로부터 메세지가 왔어요!</div>
                  <div>
                    알림센터 | <span>3월 24일</span>
                  </div>
                </div>
                <S.MessageDelete>X</S.MessageDelete>
              </S.MessageBox>
              <S.MessageBox>
                <S.MessageImage></S.MessageImage>
                <div>
                  <div>양진영님으로부터 메세지가 왔어요!</div>
                  <div>
                    알림센터 | <span>3월 24일</span>
                  </div>
                  <S.MessageDelete>X</S.MessageDelete>
                </div>
              </S.MessageBox>
            </S.MessagesBox>
          </div>
        </S.WrapperMessage>
      </S.WrapperContents>
    </S.Wrapper>
  )
}
