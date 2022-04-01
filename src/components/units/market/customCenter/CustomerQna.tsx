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
    { index: 0, content: '환불안되용~' },
    { index: 1, content: '이건 질문이지' },
    { index: 2, content: '텍스트 해볼까요' },
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
