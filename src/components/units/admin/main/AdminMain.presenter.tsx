import * as S from './AdminMain.styles'
import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack'

export default function AdminMainUI() {
  return (
    <S.Position>
      <S.Wrapper>
        <S.WrapperTop>
          <S.HouseImg src="/images/admin/Headset.png" />
          <S.WrapperTopText>관리자모드</S.WrapperTopText>
          <S.AvatarImg src="/images/admin/Avatar.png" />
          <S.WrapperTopName>관리자</S.WrapperTopName>
          <S.LogoutBtn>로그아웃</S.LogoutBtn>
        </S.WrapperTop>
        <S.WrapperMid>
          <S.MidBox1Title>
            <S.FileImg src="/images/admin/File.png" />
            <div>1 대 1 질문 관리</div>
          </S.MidBox1Title>
          <S.MidBox1>
            <S.Box1SearchWrapper>
              <S.SearchBar type="text" placeholder="제목, 내용" />
              <S.SearchBarBtn>검색</S.SearchBarBtn>
            </S.Box1SearchWrapper>
            <S.Box1MenuWrapper>
              <div>번호</div>
              <div>날짜</div>
              <div>분류</div>
              <div>제목</div>
              <div>질문내용</div>
              <div>상태</div>
            </S.Box1MenuWrapper>
            <S.Box1QuestionWrapper>
              <div>01</div>
              <div>2022/03/21</div>
              <div>[배송문의]</div>
              <div>왜안와요?왜?</div>
              <div>왜안오냐</div>
              <S.QuestionCheck>미답변</S.QuestionCheck>
            </S.Box1QuestionWrapper>
            <S.Box1QuestionWrapper>
              <div>01</div>
              <div>2022/03/21</div>
              <div>[배송문의]</div>
              <div>왜안와요?왜?</div>
              <div>왜안오냐</div>
              <S.QuestionCheck>미답변</S.QuestionCheck>
            </S.Box1QuestionWrapper>
            <S.Box1QuestionWrapper>
              <div>01</div>
              <div>2022/03/21</div>
              <div>[배송문의]</div>
              <div>왜안와요?왜?</div>
              <div>왜안오냐</div>
              <S.QuestionCheck>미답변</S.QuestionCheck>
            </S.Box1QuestionWrapper>
            <S.Box1QuestionWrapper>
              <div>01</div>
              <div>2022/03/21</div>
              <div>[배송문의]</div>
              <div>왜안와요?왜?</div>
              <div>왜안오냐</div>
              <S.QuestionCheck>미답변</S.QuestionCheck>
            </S.Box1QuestionWrapper>
            <S.Box1QuestionWrapper>
              <div>01</div>
              <div>2022/03/21</div>
              <div>[배송문의]</div>
              <div>왜안와요?왜?</div>
              <div>왜안오냐</div>
              <S.QuestionCheck>미답변</S.QuestionCheck>
            </S.Box1QuestionWrapper>
            <S.Box1QuestionWrapper>
              <div>01</div>
              <div>2022/03/21</div>
              <div>[배송문의]</div>
              <div>왜안와요?왜?</div>
              <div>왜안오냐</div>
              <S.QuestionCheck>미답변</S.QuestionCheck>
            </S.Box1QuestionWrapper>
            <S.Box1QuestionWrapper>
              <div>01</div>
              <div>2022/03/21</div>
              <div>[배송문의]</div>
              <div>왜안와요?왜?</div>
              <div>왜안오냐</div>
              <S.QuestionCheck>미답변</S.QuestionCheck>
            </S.Box1QuestionWrapper>
            <S.Box1QuestionWrapper>
              <div>01</div>
              <div>2022/03/21</div>
              <div>[배송문의]</div>
              <div>왜안와요?왜?</div>
              <div>왜안오냐</div>
              <S.QuestionCheck>미답변</S.QuestionCheck>
            </S.Box1QuestionWrapper>
            <S.Box1QuestionWrapper>
              <div>01</div>
              <div>2022/03/21</div>
              <div>[배송문의]</div>
              <div>왜안와요?왜?</div>
              <div>왜안오냐</div>
              <S.QuestionCheck>미답변</S.QuestionCheck>
            </S.Box1QuestionWrapper>
            <S.Box1QuestionWrapper>
              <div>01</div>
              <div>2022/03/21</div>
              <div>[배송문의]</div>
              <div>왜안와요?왜?</div>
              <div>왜안오냐</div>
              <S.QuestionCheck>미답변</S.QuestionCheck>
            </S.Box1QuestionWrapper>
            <S.PaginationWrapper>
              <Pagination count={10} color="secondary" />
            </S.PaginationWrapper>
          </S.MidBox1>
          <S.MidBox2>
            <S.UserTitleWrapper>
              <S.UserImg src="images/admin/UserIcon.png" />
              유저 검색하기
            </S.UserTitleWrapper>
            <S.UserSearch type="text" placeholder="닉네임을 입력하세요" />
            <S.TempWrapper>
              <S.UserWrapper>
                <S.UserList>
                  <S.UserImgWrapper>
                    <S.UserTempImg></S.UserTempImg>
                    <S.UserDeleteBtn>X</S.UserDeleteBtn>
                  </S.UserImgWrapper>
                  <S.UserName>{}홍길동</S.UserName>
                  <S.UserEmail>{}honggildong@naver.com</S.UserEmail>
                </S.UserList>
              </S.UserWrapper>
              <S.UserWrapper>
                <S.UserList>
                  <S.UserImgWrapper>
                    <S.UserTempImg></S.UserTempImg>
                    <S.UserDeleteBtn>X</S.UserDeleteBtn>
                  </S.UserImgWrapper>
                  <S.UserName>{}홍길동</S.UserName>
                  <S.UserEmail>{}honggildong@naver.com</S.UserEmail>
                </S.UserList>
              </S.UserWrapper>
              <S.UserWrapper>
                <S.UserList>
                  <S.UserImgWrapper>
                    <S.UserTempImg></S.UserTempImg>
                    <S.UserDeleteBtn>X</S.UserDeleteBtn>
                  </S.UserImgWrapper>
                  <S.UserName>{}홍길동</S.UserName>
                  <S.UserEmail>{}honggildong@naver.com</S.UserEmail>
                </S.UserList>
              </S.UserWrapper>
              <S.UserWrapper>
                <S.UserList>
                  <S.UserImgWrapper>
                    <S.UserTempImg></S.UserTempImg>
                    <S.UserDeleteBtn>X</S.UserDeleteBtn>
                  </S.UserImgWrapper>
                  <S.UserName>{}홍길동</S.UserName>
                  <S.UserEmail>{}honggildong@naver.com</S.UserEmail>
                </S.UserList>
              </S.UserWrapper>
              <S.UserWrapper>
                <S.UserList>
                  <S.UserImgWrapper>
                    <S.UserTempImg></S.UserTempImg>
                    <S.UserDeleteBtn>X</S.UserDeleteBtn>
                  </S.UserImgWrapper>
                  <S.UserName>{}홍길동</S.UserName>
                  <S.UserEmail>{}honggildong@naver.com</S.UserEmail>
                </S.UserList>
              </S.UserWrapper>
              <S.UserWrapper>
                <S.UserList>
                  <S.UserImgWrapper>
                    <S.UserTempImg></S.UserTempImg>
                    <S.UserDeleteBtn>X</S.UserDeleteBtn>
                  </S.UserImgWrapper>
                  <S.UserName>{}홍길동</S.UserName>
                  <S.UserEmail>{}honggildong@naver.com</S.UserEmail>
                </S.UserList>
              </S.UserWrapper>
            </S.TempWrapper>
          </S.MidBox2>
          <S.MidBox3>
            <S.Box3MenuWrapper>
              <div>주문일자</div>
              <div>이미지</div>
              <div>상품정보</div>
              <div>상품구매금액</div>
              <div>구매자</div>
              <div>주문처리상태</div>
            </S.Box3MenuWrapper>
            <S.Box3UseditemWrapper>
              <div>03/23</div>
              <S.TempImg></S.TempImg>
              <div>샤넬 유광 그레인드 카프스킨</div>
              <div>24,500,000</div>
              <div>쑤잉</div>
              <S.SelectStatus>
                <option value="">--선택하세요--</option>
                <option value="">상품수령중</option>
                <option value="">검수중</option>
                <option value="">배송중</option>
                <option value="">배송완료</option>
              </S.SelectStatus>
            </S.Box3UseditemWrapper>
            <S.Box3MenuWrapper>
              <div>주문일자</div>
              <div>이미지</div>
              <div>상품정보</div>
              <div>상품구매금액</div>
              <div>구매자</div>
              <div>주문처리상태</div>
            </S.Box3MenuWrapper>
            <S.Box3UseditemWrapper>
              <div>03/23</div>
              <S.TempImg></S.TempImg>
              <div>샤넬 유광 그레인드 카프스킨</div>
              <div>24,500,000</div>
              <div>쑤잉</div>
              <S.SelectStatus>
                <option value="">--선택하세요--</option>
                <option value="">상품수령중</option>
                <option value="">검수중</option>
                <option value="">배송중</option>
                <option value="">배송완료</option>
              </S.SelectStatus>
            </S.Box3UseditemWrapper>
            <S.Box3MenuWrapper>
              <div>주문일자</div>
              <div>이미지</div>
              <div>상품정보</div>
              <div>상품구매금액</div>
              <div>구매자</div>
              <div>주문처리상태</div>
            </S.Box3MenuWrapper>
            <S.Box3UseditemWrapper>
              <div>03/23</div>
              <S.TempImg></S.TempImg>
              <div>샤넬 유광 그레인드 카프스킨</div>
              <div>24,500,000</div>
              <div>쑤잉</div>
              <S.SelectStatus>
                <option value="">--선택하세요--</option>
                <option value="">상품수령중</option>
                <option value="">검수중</option>
                <option value="">배송중</option>
                <option value="">배송완료</option>
              </S.SelectStatus>
            </S.Box3UseditemWrapper>
            <S.Box3MenuWrapper>
              <div>주문일자</div>
              <div>이미지</div>
              <div>상품정보</div>
              <div>상품구매금액</div>
              <div>구매자</div>
              <div>주문처리상태</div>
            </S.Box3MenuWrapper>
            <S.Box3UseditemWrapper>
              <div>03/23</div>
              <S.TempImg></S.TempImg>
              <div>샤넬 유광 그레인드 카프스킨</div>
              <div>24,500,000</div>
              <div>쑤잉</div>
              <S.SelectStatus>
                <option value="">--선택하세요--</option>
                <option value="">상품수령중</option>
                <option value="">검수중</option>
                <option value="">배송중</option>
                <option value="">배송완료</option>
              </S.SelectStatus>
            </S.Box3UseditemWrapper>
            <S.Box3MenuWrapper>
              <div>주문일자</div>
              <div>이미지</div>
              <div>상품정보</div>
              <div>상품구매금액</div>
              <div>구매자</div>
              <div>주문처리상태</div>
            </S.Box3MenuWrapper>
            <S.Box3UseditemWrapper>
              <div>03/23</div>
              <S.TempImg></S.TempImg>
              <div>샤넬 유광 그레인드 카프스킨</div>
              <div>24,500,000</div>
              <div>쑤잉</div>
              <S.SelectStatus>
                <option value="">--선택하세요--</option>
                <option value="">상품수령중</option>
                <option value="">검수중</option>
                <option value="">배송중</option>
                <option value="">배송완료</option>
              </S.SelectStatus>
            </S.Box3UseditemWrapper>
            <S.PaginationWrapper>
              <Pagination count={10} color="secondary" />
            </S.PaginationWrapper>
          </S.MidBox3>
          <S.MidBox4>
            <S.UseditemSearchWrapper>
              <S.Search src="/images/admin/Search.png" />
              상품 조회하기
              <S.UseditemSearch type="text" placeholder="Search" />
            </S.UseditemSearchWrapper>
            <S.Box4MenuWrapper>
              <div>제목</div>
              <div>판매자</div>
              <div>이미지</div>
              <div>상품금액</div>
              <div>관리</div>
            </S.Box4MenuWrapper>
            <S.Box4UseditemListWrapper>
              <div>샤넬 유광 그레인드</div>
              <div>쑤잉</div>
              <S.TempImg></S.TempImg>
              <div>24,500,000원</div>
              <S.UseditemDeleteBtn>삭제하기</S.UseditemDeleteBtn>{' '}
            </S.Box4UseditemListWrapper>
            <S.Box4MenuWrapper>
              <div>제목</div>
              <div>판매자</div>
              <div>이미지</div>
              <div>상품금액</div>
              <div>관리</div>
            </S.Box4MenuWrapper>
            <S.Box4UseditemListWrapper>
              <div>샤넬 유광 그레인드</div>
              <div>쑤잉</div>
              <S.TempImg></S.TempImg>
              <div>24,500,000원</div>
              <S.UseditemDeleteBtn>삭제하기</S.UseditemDeleteBtn>{' '}
            </S.Box4UseditemListWrapper>
            <S.Box4MenuWrapper>
              <div>제목</div>
              <div>판매자</div>
              <div>이미지</div>
              <div>상품금액</div>
              <div>관리</div>
            </S.Box4MenuWrapper>
            <S.Box4UseditemListWrapper>
              <div>샤넬 유광 그레인드</div>
              <div>쑤잉</div>
              <S.TempImg></S.TempImg>
              <div>24,500,000원</div>
              <S.UseditemDeleteBtn>삭제하기</S.UseditemDeleteBtn>
            </S.Box4UseditemListWrapper>
            <S.Box4MenuWrapper>
              <div>제목</div>
              <div>판매자</div>
              <div>이미지</div>
              <div>상품금액</div>
              <div>관리</div>
            </S.Box4MenuWrapper>
            <S.Box4UseditemListWrapper>
              <div>샤넬 유광 그레인드</div>
              <div>쑤잉</div>
              <S.TempImg></S.TempImg>
              <div>24,500,000원</div>
              <S.UseditemDeleteBtn>삭제하기</S.UseditemDeleteBtn>{' '}
            </S.Box4UseditemListWrapper>
            <S.Box4MenuWrapper>
              <div>제목</div>
              <div>판매자</div>
              <div>이미지</div>
              <div>상품금액</div>
              <div>관리</div>
            </S.Box4MenuWrapper>
            <S.Box4UseditemListWrapper>
              <div>샤넬 유광 그레인드</div>
              <div>쑤잉</div>
              <S.TempImg></S.TempImg>
              <div>24,500,000원</div>
              <S.UseditemDeleteBtn>삭제하기</S.UseditemDeleteBtn>{' '}
            </S.Box4UseditemListWrapper>
            <S.PaginationWrapper>
              <Pagination count={10} color="secondary" />
            </S.PaginationWrapper>
          </S.MidBox4>
        </S.WrapperMid>
      </S.Wrapper>
    </S.Position>
  )
}
