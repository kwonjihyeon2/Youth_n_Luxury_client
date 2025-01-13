import * as S from './createReview.styled'
import { ICreateReviewPageUIProps } from './createReview.types'

export default function CreateReviewPageUI(props: ICreateReviewPageUIProps) {
  return (
    <S.WrapperMain>
      <S.Wrapper>
        <S.WrapperContents>
          <S.WrapperTitle>
            리뷰쓰기
            <S.CancleButton onClick={props.onClickOpenReview}>X</S.CancleButton>
          </S.WrapperTitle>
          <S.ReviewTable>
            <div>
              <S.TableBox>
                <img src="/detail/reviewBag.png" />
                <S.TableRight>
                  <S.UserInfo>
                    {props.data?.fetchProduct.user.name}님
                  </S.UserInfo>
                  <div>{props.data?.fetchProduct.description}</div>
                </S.TableRight>
              </S.TableBox>
              <div>
                <S.TableLeft>별점평가</S.TableLeft>
                <S.StarRate defaultValue={0} onChange={props.setReviewRate} />
              </div>
              <div>
                <S.TableLeft>
                  사진 첨부<S.ImageText>최대 1장</S.ImageText>
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
                  <S.ContentText
                    onChange={props.onChangeContent}
                    cols={30}
                    rows={10}
                    placeholder="자세하고 솔직한 리뷰는 다른 고객분들에게 큰 도움이 됩니다. (최소 20자이상)"
                  ></S.ContentText>
                </div>
              </div>
            </div>
            <S.ButtonSection>
              <S.SubmitButton onClick={props.onClickSubmit}>
                완료
              </S.SubmitButton>
            </S.ButtonSection>
          </S.ReviewTable>
        </S.WrapperContents>
        <S.CancleBackground onClick={() => props.setIsReview(false)} />
      </S.Wrapper>
    </S.WrapperMain>
  )
}
