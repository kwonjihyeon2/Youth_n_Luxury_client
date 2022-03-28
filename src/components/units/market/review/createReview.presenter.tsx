import { Rate } from 'antd'
import 'antd/dist/antd.css'
import * as S from './createReview.styled'

export default function CreateReviewPageUI(props) {
  return (
    <S.Wrapper>
      <S.WrapperContents>
        <S.WrapperTitle>
          리뷰쓰기
          <S.CancleButton>X</S.CancleButton>
        </S.WrapperTitle>
        <S.ReviewTable>
          <div>
            <S.TableBox>
              <img src="/detail/reviewBag.png" />
              <S.TableRight>
                <S.UserInfo>유저닉네임</S.UserInfo>
                <div>상품명</div>
              </S.TableRight>
            </S.TableBox>
            <div>
              <S.TableLeft>별점평가</S.TableLeft>
              <Rate defaultValue={3} />
            </div>
            <div>
              <S.TableLeft>
                사진첨부<S.ImageText>최대 1장</S.ImageText>
              </S.TableLeft>
              <S.FileUpload onClick={props.onClickRef}>
                사진첨부하기
                <S.InputFiles type="file" ref={props.fileRef} />
              </S.FileUpload>
            </div>
            <div>
              <S.TableLeft>
                리뷰작성 <S.NoticeText>필수 입력 항목입니다.</S.NoticeText>
              </S.TableLeft>
              <div>
                {/* <S.TableInput
                  style={{ width: '100%' }}
                  type="text"
                  placeholder="제목을 입력해주세요"
                /> */}
                <S.ContentText
                  cols={30}
                  rows={10}
                  placeholder="자세하고 솔직한 리뷰는 다른 고객분들에게 큰 도움이 됩니다. (최소 20자이상)"
                ></S.ContentText>
              </div>
            </div>
          </div>
        </S.ReviewTable>
        <S.ButtonSection>
          <S.SubmitButton>완료</S.SubmitButton>
        </S.ButtonSection>
      </S.WrapperContents>
    </S.Wrapper>
  )
}
