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
    { index: 1, content: '질문을 정확히 입력하세요' },
    { index: 2, content: '테스트중입니다.' },
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
