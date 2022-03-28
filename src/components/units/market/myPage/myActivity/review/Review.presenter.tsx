import * as S from './Review.styles'

export default function ReviewUI() {
  return (
    <>
      <S.ReviewTable>
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
            <S.StarBox></S.StarBox>
            <S.EditBtn>수정</S.EditBtn>
          </S.Row>
        ))}
      </S.ReviewTable>
    </>
  )
}
