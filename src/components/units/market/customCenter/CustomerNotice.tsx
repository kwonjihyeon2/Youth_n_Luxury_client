import styled from '@emotion/styled'

const ContentBox = styled.div`
  text-align: left;
`

const WrapperContent = styled.div`
  width: 100%;
  height: 40vh;
  padding: 50px;
  background-color: #f8f8f8;
`

export default function NoticeItem(props) {
  const contentArr = [
    { index: 0, content: '환불은 중고거래 특성상 불가능합니다' },
    { index: 1, content: '검수는 보증합니다' },
    { index: 2, content: '오픈 축하기념 이벤트' },
  ]

  return (
    <>
      {props.el === props.int ? (
        <WrapperContent>
          <ContentBox>{contentArr[props.int].content}</ContentBox>
        </WrapperContent>
      ) : (
        <></>
      )}
    </>
  )
}
