import { Rate } from 'antd'
import 'antd/dist/antd.css'
import * as S from './createReview.styled'

export default function CreateReviewPageUI() {
  return (
    <S.Wrapper>
      <S.WrapperContents>
        <S.WrapperTitle>거래 후기 등록</S.WrapperTitle>
        <S.ReviewTable>
          <div>
            <S.TableBox>
              <S.TableLeft>작성자</S.TableLeft>
              <S.TableRight>
                <S.TableInput type="text" value="유저" readOnly />
              </S.TableRight>
            </S.TableBox>
            <S.TableBox>
              <S.TableLeft>상품</S.TableLeft>
              <S.TableRight>
                <S.TableProfile></S.TableProfile>
                <div>상품명</div>
              </S.TableRight>
            </S.TableBox>
            <S.TableBox>
              <S.TableLeft>평점</S.TableLeft>
              <S.TableRight>
                <Rate defaultValue={3} />
              </S.TableRight>
            </S.TableBox>
            <S.TableBox>
              <S.TableLeft>제목</S.TableLeft>
              <S.TableRight>
                <S.TableInput
                  style={{ width: '100%' }}
                  type="text"
                  placeholder="제목을 입력해주세요"
                />
              </S.TableRight>
            </S.TableBox>
          </div>
          <div>
            <S.ContentText />
            <S.GetFiles>
              첨부파일 선택 <input type="file" />
            </S.GetFiles>
          </div>
        </S.ReviewTable>
        <S.ButtonSection>
          <S.SubmitButton>저장</S.SubmitButton>
          <S.CancleButton>취소</S.CancleButton>
        </S.ButtonSection>
      </S.WrapperContents>
    </S.Wrapper>
  )
}
