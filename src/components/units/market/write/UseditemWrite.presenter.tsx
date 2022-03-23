import { useState } from "react";
import * as S from "./UseditemWrite.styles";

export default function UseditemWriteUI(props) {
  const [currentTab, setCurrentTab] = useState(0);

  const selectCategoryHandler = (index: number) => {
    setCurrentTab(index);
  };
  const categoryArr = [
    { main: "상의", sub: ["후드티", "티셔츠", "맨투맨", "와이셔츠"] },
    { main: "하의", sub: ["청바지", "면바지", "슬랙스", "기모바지"] },
    { main: "신발", sub: ["하이힐", "구두", "워커", "운동화"] },
    { main: "가방", sub: ["크로스백", "백팩", "수트케이스", "에코백"] },
    { main: "악세사리", sub: ["반지", "목걸이", "팔찌", "귀걸이"] },
  ];

  return (
    <S.Position>
      <S.Wrapper>
        <S.WrapperImages>
          <S.WrapperInput>
            <S.TitleName>상품이미지</S.TitleName>
            <S.UploadImage>이미지 등록</S.UploadImage>
          </S.WrapperInput>
          <S.WrapperContents>
            <S.ContentsImageBold>
              상품 이미지는 640x640에 최적화 되어 있습니다.
            </S.ContentsImageBold>
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
            <S.CategoryMain>
              {categoryArr.map((el, index) => {
                return (
                  <S.MainElement
                    key={index}
                    onClick={() => selectCategoryHandler(index)}
                  >
                    {el.main}
                  </S.MainElement>
                );
              })}
            </S.CategoryMain>
            <S.CategorySub>
              <S.SubElement>{categoryArr[currentTab].sub[0]}</S.SubElement>
              <S.SubElement>{categoryArr[currentTab].sub[1]}</S.SubElement>
              <S.SubElement>{categoryArr[currentTab].sub[2]}</S.SubElement>
              <S.SubElement>{categoryArr[currentTab].sub[3]}</S.SubElement>
            </S.CategorySub>
          </S.CategoryList>
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
          <S.ExplainsCounts>{props.Count}0/1000</S.ExplainsCounts>
        </S.WrapperExplains>
        <S.WrapperButton>
          <S.SubmitBtn>등록하기</S.SubmitBtn>
        </S.WrapperButton>
      </S.Wrapper>
    </S.Position>
  );
}
