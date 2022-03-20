import * as S from "./CreateUseditem.styles";

export default function CreateUseditemUI(props) {
  return (
    <S.Position>
      <S.Wrapper>
        <S.WrapperImages>
          <S.WrapperInput>
            <S.TitleName>상품이미지</S.TitleName>
            <S.UploadImage>이미지 등록</S.UploadImage>
          </S.WrapperInput>
          <S.WrapperContents>
            <S.ContentsImageBold>상품 이미지는 640x640에 최적화 되어 있습니다.</S.ContentsImageBold>
            <S.ContentsImage>
              - 이미지는 상품등록 시 정사각형으로 잘려서 등록됩니다.
            </S.ContentsImage>
            <S.ContentsImage>
              - 큰 이미지일경우 이미지가 깨지는 경우가 발생할 수 있습니다.
            </S.ContentsImage>
            <S.ContentsImage>개당 이미지 최대용량 10M</S.ContentsImage>
          </S.WrapperContents>
        </S.WrapperImages>
        <S.WrapperTitle>
          <S.TitleName>제목</S.TitleName>
          <S.TitleInput placeholder="상품 제목을 입력해주세요."></S.TitleInput>
        </S.WrapperTitle>
        <S.WrapperCategory>
          <S.TitleName>카테고리</S.TitleName>
          <S.CategoryList>
            <S.CategoryMainTop onClick={props.onClickTop}>상의</S.CategoryMainTop>
            <S.CategoryMainBottom>하의</S.CategoryMainBottom>
            <S.CategoryMainShoes>신발</S.CategoryMainShoes>
            <S.CategoryMainBag>가방</S.CategoryMainBag>
            <S.CategoryMainAcc>악세사리</S.CategoryMainAcc>
          </S.CategoryList>
          <S.CategoryListTop>
            <S.CategorySub>티셔츠</S.CategorySub>
            <S.CategorySub>후드티</S.CategorySub>
            <S.CategorySub>맨투맨</S.CategorySub>
          </S.CategoryListTop>
          <S.CategoryListBottom>
            <S.CategorySub>청바지</S.CategorySub>
            <S.CategorySub>면바지</S.CategorySub>
            <S.CategorySub>칠부바지</S.CategorySub>
            <S.CategorySub>슬랙스</S.CategorySub>
          </S.CategoryListBottom>
          <S.CategoryListShoes>
            <S.CategorySub>스니커즈</S.CategorySub>
            <S.CategorySub>운동화</S.CategorySub>
            <S.CategorySub>구두</S.CategorySub>
            <S.CategorySub>축구화</S.CategorySub>
          </S.CategoryListShoes>
          <S.CategoryListBag>
            <S.CategorySub>백팩</S.CategorySub>
            <S.CategorySub>수트케이스</S.CategorySub>
            <S.CategorySub>크로스백</S.CategorySub>
            <S.CategorySub>에코백</S.CategorySub>
          </S.CategoryListBag>
          <S.CategoryListAcc>
            <S.CategorySub>목걸이</S.CategorySub>
            <S.CategorySub>반지</S.CategorySub>
            <S.CategorySub>안경</S.CategorySub>
            <S.CategorySub>팔찌</S.CategorySub>
          </S.CategoryListAcc>
        </S.WrapperCategory>
        <S.WrapperBrand>
          <S.TitleName>브랜드</S.TitleName>
          <S.BrandPosition>
            <S.BrandName>프라다</S.BrandName>
            <S.BrandCheckBox type="checkbox" />
          </S.BrandPosition>
          <S.BrandPosition>
            <S.BrandName>버버리</S.BrandName>
            <S.BrandCheckBox type="checkbox" />
          </S.BrandPosition>
          <S.BrandPosition>
            <S.BrandName>루이비통</S.BrandName>
            <S.BrandCheckBox type="checkbox" />
          </S.BrandPosition>
          <S.BrandPosition>
            <S.BrandName>샤넬</S.BrandName>
            <S.BrandCheckBox type="checkbox" />
          </S.BrandPosition>
          <S.BrandPosition>
            <S.BrandName>구찌</S.BrandName>
            <S.BrandCheckBox type="checkbox" />
          </S.BrandPosition>
          <S.BrandPosition>
            <S.BrandName>에르메스</S.BrandName>
            <S.BrandCheckBox type="checkbox" />
          </S.BrandPosition>
        </S.WrapperBrand>
        <S.WrapperPrice>
          <S.TitleName>가격</S.TitleName>
          <S.PriceInput placeholder="숫자만 입력해주세요."></S.PriceInput>
          <div style={{ fontSize: "20px" }}>원</div>
        </S.WrapperPrice>
        <S.WrapperExplains>
          <S.TitleName>설명</S.TitleName>
          <S.ExplainsInput
            maxLength="1000"
            placeholder="상품 설명을 입력해주세요.(10글자 이상)"
          ></S.ExplainsInput>
          <S.ExplainsCounts>{props.Count}/1000</S.ExplainsCounts>
        </S.WrapperExplains>
      </S.Wrapper>
    </S.Position>
  );
}
