import { useState } from 'react'
import * as S from './CustomerBoard.styled'
import NoticeItem from './CustomerNotice'

export default function CustomCenterPageUI() {
  const noticeArr = [
    { index: 1, title: '교환/환불 규정 안내', date: '2022-03-03', 조회: 15 },
    {
      index: 2,
      title: '검수 기준',
      date: '2022-03-03',
      조회: 110,
    },
    { index: 3, title: 'SOS NEW OPEN', date: '2022-03-03', 조회: 23 },
  ]
  const QnaArr = [
    {
      index: 1,
      title: '배송비는 항상 무료인가요?',
      date: '2022-03-03',
      조회: 15,
    },
    {
      index: 2,
      title: '100% 진품 확실한가요?',
      date: '2022-03-03',
      조회: 110,
    },
    { index: 3, title: '교환, 환불해주세요', date: '2022-03-03', 조회: 23 },
  ]

  const [toggle, setToggle] = useState(false)
  const [int, setInt] = useState(0)

  const onClickToggle = (index) => () => {
    setToggle((prev) => !prev)
    setInt(index)
  }

  const [onDisplay, setdisplay] = useState(false)
  const onVisible = () => {
    setdisplay(true)
  }

  const onClickVisible = () => {
    setdisplay(false)
  }

  return (
    <S.Wrapper>
      <S.WrapperBox>
        <S.WrapperTable>
          <S.TableSelect>
            <S.WrapperTitle>고객센터</S.WrapperTitle>
            <S.ResponsiveBox>
              <S.CommonIndex onClick={onVisible}>공지사항</S.CommonIndex>
              <S.CommonIndex onClick={onClickVisible}>
                자주묻는질문
              </S.CommonIndex>
            </S.ResponsiveBox>
          </S.TableSelect>

          <S.ParentTable>
            <S.TableBox onDisplay={onDisplay}>
              <S.CommonsTitle>공지사항</S.CommonsTitle>
              <S.TableList style={{ backgroundColor: '#FAFAFA' }}>
                <S.TableListRow>번호</S.TableListRow>
                <S.TableListLongRow>제목</S.TableListLongRow>
                <S.TableListRow>작성일</S.TableListRow>
                <S.TableListRow>조회</S.TableListRow>
              </S.TableList>
              {noticeArr.map((el, index) => (
                <div key={index}>
                  <S.TableList onClick={onClickToggle(index)}>
                    <S.TableListRow>{el.index}</S.TableListRow>
                    <S.TableListLongRow>{el.title}</S.TableListLongRow>
                    <S.TableListRow>{el.date}</S.TableListRow>
                    <S.TableListRow>{el.조회}</S.TableListRow>
                  </S.TableList>
                  {toggle && <NoticeItem el={el.index - 1} int={int} />}
                </div>
              ))}
            </S.TableBox>
            <S.RightTableBox onDisplay={onDisplay}>
              <S.CommonsTitle>자주묻는질문</S.CommonsTitle>
              <S.TableList style={{ backgroundColor: '#FAFAFA' }}>
                <S.TableListRow>번호</S.TableListRow>
                <S.TableListLongRow>제목</S.TableListLongRow>
                <S.TableListRow>작성일</S.TableListRow>
                <S.TableListRow>조회</S.TableListRow>
              </S.TableList>
              {QnaArr.map((el, index) => (
                <div key={index}>
                  <S.TableList onClick={onClickToggle(index)}>
                    <S.TableListRow>{el.index}</S.TableListRow>
                    <S.TableListLongRow>{el.title}</S.TableListLongRow>
                    <S.TableListRow>{el.date}</S.TableListRow>
                    <S.TableListRow>{el.조회}</S.TableListRow>
                  </S.TableList>
                  {toggle && <NoticeItem el={el.index - 1} int={int} />}
                </div>
              ))}
            </S.RightTableBox>
          </S.ParentTable>
        </S.WrapperTable>
      </S.WrapperBox>
    </S.Wrapper>
  )
}
