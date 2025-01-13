import * as S from './Review.styles'
import 'antd/dist/antd.css'
export default function ReviewUI(props) {
  return (
    <>
      <S.ReviewTable>
        <S.ReviewTitleTxt>
          {props.isReviewIWrite ? `내가 한 평가` : `내가 받은 평가`}
        </S.ReviewTitleTxt>
        {new Array(3).fill(0).map(() => (
          <S.Row>
            <S.ReviewImg></S.ReviewImg>
            <S.ReviewContent>
              <S.ReviewHeader>
                <S.ProductNameTxt>
                  샤넬 유강 그레인드 카프스킨..
                </S.ProductNameTxt>
                <S.CreatedAt>2022.03.03</S.CreatedAt>
              </S.ReviewHeader>
              <S.ReviewContentTxt>역시 샤넬이네요!</S.ReviewContentTxt>
            </S.ReviewContent>

            <S.StarRate defaultValue={0} />

            <S.EditBtn>수정</S.EditBtn>
          </S.Row>
        ))}
      </S.ReviewTable>
    </>
  )
}
