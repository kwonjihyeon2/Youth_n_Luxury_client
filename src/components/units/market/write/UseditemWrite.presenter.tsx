import Uploads01 from '../../../commons/uploads/01/Uploads01.container'
import Uploads02 from '../../../commons/uploads/02/Uploads02.container'
import Uploads03 from '../../../commons/uploads/03/Uploads03.container'
import Uploads04 from '../../../commons/uploads/04/Uploads04.container'
import Uploads05 from '../../../commons/uploads/05/Uploads05.container'
import * as S from './UseditemWrite.styles'
import { IUseditemWriteUIProps } from './UseditemWrite.types'

export default function UseditemWriteUI(props: IUseditemWriteUIProps) {
  return (
    <S.Position>
      <S.Wrapper>
        <S.WrapperAccount>
          <S.WrapperImgTitle>
            <S.TitleName>통장인증</S.TitleName>
          </S.WrapperImgTitle>
          <S.WrapperAccountInput>
            <div>계좌번호입력:</div>
            <input onChange={props.onChangeAccountNum} type="text" />
            <div>은행입력:</div>
            <input onChange={props.onChangeBank} type="text" />
            <div>이름:</div>
            <input type="text" />
            <S.AccountBtn onClick={props.onClickAccountConfirm}>
              계좌인증하기
            </S.AccountBtn>
          </S.WrapperAccountInput>
        </S.WrapperAccount>
        <S.WrapperImages>
          <S.WrapperImgTitle>
            <S.TitleName>상품이미지등록</S.TitleName>
          </S.WrapperImgTitle>
          <S.WrapperInput>
            <Uploads01 fileUrl={props.urls} setUrls={props.setUrls} />
            <Uploads02 fileUrl2={props.urls2} setUrls2={props.setUrls2} />
            <Uploads03 fileUrl3={props.urls3} setUrls3={props.setUrls3} />
            <Uploads04 fileUrl4={props.urls4} setUrls4={props.setUrls4} />
            <Uploads05 fileUrl5={props.urls5} setUrls5={props.setUrls5} />
          </S.WrapperInput>
        </S.WrapperImages>
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
          <S.ContentsImage>- 개당 이미지 최대용량 10M.</S.ContentsImage>
          <S.ContentsImage>- 첫 번째 사진이 대표이미지입니다.</S.ContentsImage>
        </S.WrapperContents>
        <S.WrapperTitle>
          <S.WrapperImgTitle>
            <S.TitleName>제목</S.TitleName>
          </S.WrapperImgTitle>
          <S.WrapperTitleInput>
            <S.TitleInput
              type="text"
              placeholder="상품 제목을 입력해주세요."
              onChange={props.onChangeName}
              defaultValue={props.data?.fetchProduct.name}
            />
          </S.WrapperTitleInput>
        </S.WrapperTitle>
        <S.WrapperCategory>
          <S.WrapperImgTitle>
            <S.TitleName>카테고리</S.TitleName>
          </S.WrapperImgTitle>
          <S.CategoryList>
            <S.CategoryMain onClick={props.onChangeMainCategory}>
              <option value="">선택하세요</option>
              <option value="Top">상의</option>
              <option value="Bottom">하의</option>
              <option value="Shoes">신발</option>
              <option value="Bag">가방</option>
              <option value="Acc">악세사리</option>
            </S.CategoryMain>
            {props.selectMain === 'Top' ? (
              <S.CategorySub onClick={props.onChangeSubCategoryId}>
                <option value="">선택하세요</option>
                <option value="Hoodie">후드티</option>
                <option value="T-shirt">티셔츠</option>
                <option value="SweatShirt">맨투맨</option>
                <option value="DressShirt">와이셔츠</option>
              </S.CategorySub>
            ) : (
              ''
            )}
            {props.selectMain === 'Bottom' ? (
              <S.CategorySub onClick={props.onChangeSubCategoryId}>
                <option value="">-선택하세요-</option>
                <option value="BlueJeans">청바지</option>
                <option value="CottonPants">면바지</option>
                <option value="Slacks">슬랙스</option>
                <option value="Shorts">반바지</option>
              </S.CategorySub>
            ) : (
              ''
            )}
            {props.selectMain === 'Shoes' ? (
              <S.CategorySub onClick={props.onChangeSubCategoryId}>
                <option value="">-선택하세요-</option>
                <option value="HighHeels">하이힐</option>
                <option value="Shoes">구두</option>
                <option value="CombatBoots">워커</option>
                <option value="Sneakers">운동화</option>
              </S.CategorySub>
            ) : (
              ''
            )}
            {props.selectMain === 'Bag' ? (
              <S.CategorySub onClick={props.onChangeSubCategoryId}>
                <option value="">-선택하세요-</option>
                <option value="CrossBag">크로스백</option>
                <option value="Backpack">백팩</option>
                <option value="Suitcase">수트케이스</option>
                <option value="EcoBag">에코백</option>
              </S.CategorySub>
            ) : (
              ''
            )}
            {props.selectMain === 'Acc' ? (
              <S.CategorySub onClick={props.onChangeSubCategoryId}>
                <option value="">-선택하세요-</option>
                <option value="Ring">반지</option>
                <option value="Necklace">목걸이</option>
                <option value="Bracelet">팔찌</option>
                <option value="Earring">귀걸이</option>
              </S.CategorySub>
            ) : (
              ''
            )}
          </S.CategoryList>
        </S.WrapperCategory>
        <S.WrapperBrand>
          <S.WrapperImgTitle>
            <S.TitleName>브랜드</S.TitleName>
          </S.WrapperImgTitle>
          <S.WrapperBrandList>
            <S.BrandPosition>
              <div>프라다</div>
              <S.BrandRadio
                style={{ width: '20px', height: '20px' }}
                name="brand"
                type="radio"
                value="Prada"
                onClick={props.onChangeBrandId}
              />
              <div>버버리</div>
              <S.BrandRadio
                style={{ width: '20px', height: '20px' }}
                name="brand"
                type="radio"
                value="Burberry"
                onClick={props.onChangeBrandId}
              />
              <div>루이비통</div>
              <S.BrandRadio
                style={{ width: '20px', height: '20px' }}
                name="brand"
                type="radio"
                value="LouisVuitton"
                onClick={props.onChangeBrandId}
              />
              <div>샤넬</div>
              <S.BrandRadio
                style={{ width: '20px', height: '20px' }}
                name="brand"
                type="radio"
                value="Chanel"
                onClick={props.onChangeBrandId}
              />
              <div>구찌</div>
              <S.BrandRadio
                style={{ width: '20px', height: '20px' }}
                name="brand"
                type="radio"
                value="Gucci"
                onClick={props.onChangeBrandId}
              />
              <div>에르메스</div>
              <S.BrandRadio
                style={{ width: '20px', height: '20px' }}
                name="brand"
                type="radio"
                value="Hermes"
                onClick={props.onChangeBrandId}
              />
            </S.BrandPosition>
          </S.WrapperBrandList>
        </S.WrapperBrand>
        <S.WrapperPrice>
          <S.WrapperImgTitle>
            <S.TitleName>가격</S.TitleName>
          </S.WrapperImgTitle>
          <S.WrapperPriceInput>
            <S.PriceInput
              type="text"
              placeholder="숫자만 입력해주세요."
              defaultValue={props.data?.fetchProduct?.price}
              onChange={props.onChangePrice}
            ></S.PriceInput>
            <div style={{ fontSize: '20px' }}>원</div>
          </S.WrapperPriceInput>
        </S.WrapperPrice>
        <S.WrapperExplains>
          <S.WrapperImgTitle>
            <S.TitleName>설명</S.TitleName>
          </S.WrapperImgTitle>
          <S.WrapperTextarea>
            <S.ExplainsInput
              maxLength={500}
              placeholder="상품 설명을 입력해주세요."
              onChange={props.onChangeDescription}
              defaultValue={props.data?.fetchProduct?.description}
            />
            <S.ExplainsCounts>{props.description.length}/500</S.ExplainsCounts>
          </S.WrapperTextarea>
        </S.WrapperExplains>
        <S.WrapperButton>
          <S.SubmitBtn onClick={props.onClickSubmit}>
            {props.isEdit === true ? '수정하기' : '등록하기'}
          </S.SubmitBtn>
        </S.WrapperButton>
      </S.Wrapper>
    </S.Position>
  )
}
