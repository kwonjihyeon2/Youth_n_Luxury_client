import * as S from './UseditemList.styles'
export default function UseditemListUI(props) {
  return (
    <S.Position>
      <S.Wrapper>
        <S.WrapperSelect>
          <S.WrapperSelectTop>
            <S.SelectTopBox1>상세 카테고리</S.SelectTopBox1>
            <S.SelectTopBox2>
              <S.TopBox2Top>
                <S.MainCategory id="All" onClick={props.onClickMain}>
                  ALL
                </S.MainCategory>
                <S.MainCategory id="Bag" onClick={props.onClickMain}>
                  BAG
                </S.MainCategory>
                <S.MainCategory id="Acc" onClick={props.onClickMain}>
                  ACC
                </S.MainCategory>
                <S.MainCategory id="Top" onClick={props.onClickMain}>
                  TOP
                </S.MainCategory>
                <S.MainCategory id="Bottom" onClick={props.onClickMain}>
                  BOTTOM
                </S.MainCategory>
                <S.MainCategory id="Shoes" onClick={props.onClickMain}>
                  SHOES
                </S.MainCategory>
              </S.TopBox2Top>
              <S.TopBox2Bot>
                {props.main === 'All' ? '' : ''}
                {props.main === 'Bag' ? (
                  <S.WrapperSubCategory>
                    <div id="CrossBag" onClick={props.onClickSub}>
                      크로스백
                    </div>
                    <div id="Backpack" onClick={props.onClickSub}>
                      백팩
                    </div>
                    <div id="Suitcase" onClick={props.onClickSub}>
                      수트케이스
                    </div>
                    <div id="EcoBag" onClick={props.onClickSub}>
                      에코백
                    </div>
                  </S.WrapperSubCategory>
                ) : (
                  ''
                )}
                {props.main === 'Acc' ? (
                  <S.WrapperSubCategory>
                    <div id="Ring" onClick={props.onClickSub}>
                      반지
                    </div>
                    <div id="Necklace" onClick={props.onClickSub}>
                      목걸이
                    </div>
                    <div id="Bracelet" onClick={props.onClickSub}>
                      팔찌
                    </div>
                    <div id="Earring" onClick={props.onClickSub}>
                      귀걸이
                    </div>
                  </S.WrapperSubCategory>
                ) : (
                  ''
                )}
                {props.main === 'Top' ? (
                  <S.WrapperSubCategory>
                    <div id="Hoodie" onClick={props.onClickSub}>
                      후드티
                    </div>
                    <div id="T-shirt" onClick={props.onClickSub}>
                      티셔츠
                    </div>
                    <div id="SweatShirt" onClick={props.onClickSub}>
                      맨투맨
                    </div>
                    <div id="DressShirt" onClick={props.onClickSub}>
                      와이셔츠
                    </div>
                  </S.WrapperSubCategory>
                ) : (
                  ''
                )}
                {props.main === 'Bottom' ? (
                  <S.WrapperSubCategory>
                    <div id="BlueJeans" onClick={props.onClickSub}>
                      청바지
                    </div>
                    <div id="CottonPants" onClick={props.onClickSub}>
                      면바지
                    </div>
                    <div id="Slacks" onClick={props.onClickSub}>
                      슬랙스
                    </div>
                    <div id="Shorts" onClick={props.onClickSub}>
                      반바지
                    </div>
                  </S.WrapperSubCategory>
                ) : (
                  ''
                )}
                {props.main === 'Shoes' ? (
                  <S.WrapperSubCategory>
                    <div id="HighHeels" onClick={props.onClickSub}>
                      하이힐
                    </div>
                    <div id="Shoes" onClick={props.onClickSub}>
                      구두
                    </div>
                    <div id="CombatBoots" onClick={props.onClickSub}>
                      워커
                    </div>
                    <div id="Sneakers" onClick={props.onClickSub}>
                      운동화
                    </div>
                  </S.WrapperSubCategory>
                ) : (
                  ''
                )}
              </S.TopBox2Bot>
            </S.SelectTopBox2>
          </S.WrapperSelectTop>
          <S.WrapperSelectMid>
            <S.SelectMidBox1>브랜드</S.SelectMidBox1>
            <S.SelectMidBox2>
              <div>프라다</div>
              <input
                value="Prada"
                style={{ width: '20px', height: '20px' }}
                onClick={props.onClickBrand}
                type="radio"
                name="brand"
              />
              <div>버버리</div>
              <input
                value="Burberry"
                style={{ width: '20px', height: '20px' }}
                onClick={props.onClickBrand}
                type="radio"
                name="brand"
              />
              <div>루이비통</div>
              <input
                value="LouisVuitton"
                style={{ width: '20px', height: '20px' }}
                onClick={props.onClickBrand}
                type="radio"
                name="brand"
              />
              <div>사넬</div>
              <input
                value="Chanel"
                style={{ width: '20px', height: '20px' }}
                onClick={props.onClickBrand}
                type="radio"
                name="brand"
              />
              <div>구찌</div>
              <input
                value="Gucci"
                style={{ width: '20px', height: '20px' }}
                onClick={props.onClickBrand}
                type="radio"
                name="brand"
              />
              <div>에르메스</div>
              <input
                value="Hermes"
                style={{ width: '20px', height: '20px' }}
                onClick={props.onClickBrand}
                type="radio"
                name="brand"
              />
            </S.SelectMidBox2>
          </S.WrapperSelectMid>
          <S.WrapperSelectBot>
            <S.SelectBotBox1>상세</S.SelectBotBox1>
            <S.SelectBotBox2>
              <div>검색</div>
              <input className="SearchInput" type="text" />
              <button>적용</button>
              <div>가격</div>
              <input className="PriceInput" type="text" /> ~
              <input className="PriceInput" type="text" />
              <button>적용</button>
            </S.SelectBotBox2>
          </S.WrapperSelectBot>
        </S.WrapperSelect>
        <S.WrapperBottom>
          <S.WrapperUseditem onClick={props.onClickProduct}>
            <S.UseditemImg></S.UseditemImg>
            <S.UseditemName>{}루이비통 알마 뭐시기</S.UseditemName>
            <S.UseditemPrice>{}100,000,000원</S.UseditemPrice>
          </S.WrapperUseditem>
          <S.WrapperUseditem>
            <S.UseditemImg></S.UseditemImg>
            <S.UseditemName>{}루이비통 알마 뭐시기</S.UseditemName>
            <S.UseditemPrice>{}100,000,000원</S.UseditemPrice>
          </S.WrapperUseditem>
          <S.WrapperUseditem>
            <S.UseditemImg></S.UseditemImg>
            <S.UseditemName>{}루이비통 알마 뭐시기</S.UseditemName>
            <S.UseditemPrice>{}100,000,000원</S.UseditemPrice>
          </S.WrapperUseditem>
          <S.WrapperUseditem>
            <S.UseditemImg></S.UseditemImg>
            <S.UseditemName>{}루이비통 알마 뭐시기</S.UseditemName>
            <S.UseditemPrice>{}100,000,000원</S.UseditemPrice>
          </S.WrapperUseditem>
          <S.WrapperUseditem>
            <S.UseditemImg></S.UseditemImg>
            <S.UseditemName>{}루이비통 알마 뭐시기</S.UseditemName>
            <S.UseditemPrice>{}100,000,000원</S.UseditemPrice>
          </S.WrapperUseditem>
          <S.WrapperUseditem>
            <S.UseditemImg></S.UseditemImg>
            <S.UseditemName>{}루이비통 알마 뭐시기</S.UseditemName>
            <S.UseditemPrice>{}100,000,000원</S.UseditemPrice>
          </S.WrapperUseditem>
          <S.WrapperUseditem>
            <S.UseditemImg></S.UseditemImg>
            <S.UseditemName>{}루이비통 알마 뭐시기</S.UseditemName>
            <S.UseditemPrice>{}100,000,000원</S.UseditemPrice>
          </S.WrapperUseditem>
          <S.WrapperUseditem>
            <S.UseditemImg></S.UseditemImg>
            <S.UseditemName>{}루이비통 알마 뭐시기</S.UseditemName>
            <S.UseditemPrice>{}100,000,000원</S.UseditemPrice>
          </S.WrapperUseditem>
          <S.WrapperUseditem>
            <S.UseditemImg></S.UseditemImg>
            <S.UseditemName>{}루이비통 알마 뭐시기</S.UseditemName>
            <S.UseditemPrice>{}100,000,000원</S.UseditemPrice>
          </S.WrapperUseditem>
          <S.WrapperUseditem>
            <S.UseditemImg></S.UseditemImg>
            <S.UseditemName>{}루이비통 알마 뭐시기</S.UseditemName>
            <S.UseditemPrice>{}100,000,000원</S.UseditemPrice>
          </S.WrapperUseditem>
          <S.WrapperUseditem>
            <S.UseditemImg></S.UseditemImg>
            <S.UseditemName>{}루이비통 알마 뭐시기</S.UseditemName>
            <S.UseditemPrice>{}100,000,000원</S.UseditemPrice>
          </S.WrapperUseditem>
          <S.WrapperUseditem>
            <S.UseditemImg></S.UseditemImg>
            <S.UseditemName>{}루이비통 알마 뭐시기</S.UseditemName>
            <S.UseditemPrice>{}100,000,000원</S.UseditemPrice>
          </S.WrapperUseditem>
          <S.WrapperUseditem>
            <S.UseditemImg></S.UseditemImg>
            <S.UseditemName>{}루이비통 알마 뭐시기</S.UseditemName>
            <S.UseditemPrice>{}100,000,000원</S.UseditemPrice>
          </S.WrapperUseditem>
          <S.WrapperUseditem>
            <S.UseditemImg></S.UseditemImg>
            <S.UseditemName>{}루이비통 알마 뭐시기</S.UseditemName>
            <S.UseditemPrice>{}100,000,000원</S.UseditemPrice>
          </S.WrapperUseditem>
          <S.WrapperUseditem>
            <S.UseditemImg></S.UseditemImg>
            <S.UseditemName>{}루이비통 알마 뭐시기</S.UseditemName>
            <S.UseditemPrice>{}100,000,000원</S.UseditemPrice>
          </S.WrapperUseditem>
        </S.WrapperBottom>
      </S.Wrapper>
    </S.Position>
  )
}
