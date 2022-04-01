import * as S from './DeleteUser.styles'

export default function DeleteUserUI() {
  return (
    <S.Wrapper>
      <S.WrapperBox>
        <S.DeleteUserHeaderTxt>회원 탈퇴</S.DeleteUserHeaderTxt>
        <S.Table>
          <S.TableRow>
            <S.DeleteReasonTxt>탈퇴사유</S.DeleteReasonTxt>
            <S.ReasonValueBox>
              <S.ReasonValueSelect>
                <S.ReasonValueOption
                  type="radio"
                  value="배송 주문 불만족"
                  name="reason"
                ></S.ReasonValueOption>
                배송 주문 불만족
                <S.ReasonValueOption
                  type="radio"
                  value="사이트 이용 불편"
                  name="reason"
                ></S.ReasonValueOption>
                사이트 이용 불편
                <S.ReasonValueOption
                  type="radio"
                  value="상품품질 불만족"
                  name="reason"
                ></S.ReasonValueOption>
                상품품질 불만족
                <S.ReasonValueOption
                  type="radio"
                  value="서비스 불만족"
                  name="reason"
                ></S.ReasonValueOption>
                서비스 불만족
                <S.ReasonValueOption
                  type="radio"
                  value="기타"
                  name="reason"
                ></S.ReasonValueOption>
                기타
              </S.ReasonValueSelect>
            </S.ReasonValueBox>
          </S.TableRow>
          <S.TableRow>
            <S.ContentTxt>내용</S.ContentTxt>
            <S.ReasonValueBox>
              <S.ContentValue></S.ContentValue>
            </S.ReasonValueBox>
          </S.TableRow>
        </S.Table>

        <S.IfDeleteTxt>
          회원탈퇴 시 회원님의 개인정보, 주문내역 등 모든 정보가 바로
          삭제됩니다.
        </S.IfDeleteTxt>
        <S.AgreeBox>
          <S.AgreeCheckBox type="checkbox" />
          <S.AgreeTxt>예, 정보삭제에 동의합니다.</S.AgreeTxt>
        </S.AgreeBox>

        <S.DeleteBtnBox>
          <S.OkBtn>확인</S.OkBtn>
          <S.CancelBtn>취소</S.CancelBtn>
        </S.DeleteBtnBox>
      </S.WrapperBox>
    </S.Wrapper>
  )
}
