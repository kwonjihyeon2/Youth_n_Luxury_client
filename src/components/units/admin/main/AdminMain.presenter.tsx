import * as S from './AdminMain.styles'
import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack'

export default function AdminMainUI(props) {
  return (
    <S.Position>
      <S.Wrapper>
        <S.WrapperTop>
          <S.HouseImg src="/images/admin/Headset.png" />
          <S.WrapperTopText>관리자모드</S.WrapperTopText>
          <S.AvatarImg src="/images/sidebar/info.png" />
          <S.WrapperTopName>관리자</S.WrapperTopName>
          <S.LogoutBtn onClick={props.onClickLogout}>로그아웃</S.LogoutBtn>
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
              {props.dataQuerys?.fetchAdminQuerys.map((el, index) => (
                <div key={el.id}>
                  <div>{index}</div>
                  <div>{el.createdAt}</div>
                  <div>{el.adminCategory.name}</div>
                  <div>{el.title}</div>
                  <div>{el.contents}</div>
                  <S.QuestionCheck>{el.adminAnswer}</S.QuestionCheck>
                </div>
              ))}
            </S.Box1QuestionWrapper>
            {/* <S.PaginationWrapper>
              <Pagination count={1} color="secondary" />
            </S.PaginationWrapper> */}
          </S.MidBox1>
          <S.UserTitleWrapper>
            <S.UserImg src="images/admin/UserIcon.png" />
            유저 검색하기
          </S.UserTitleWrapper>
          <S.MidBox2>
            <S.UserSearch type="text" placeholder="이름을 입력하세요" />
            <S.UserWrapper>
              {props.dataUsers?.fetchUsers.map((el) => (
                <S.UserList>
                  <S.UsersImg
                    key={el}
                    src={`https://storage.googleapis.com/${el.image}`}
                  />
                  <S.UserName>{el.name || '아이디가없어'}</S.UserName>
                  <S.UserEmail>{el.email}</S.UserEmail>
                  <S.UserDeleteBtn onClick={props.onClickDeleteUser}>
                    X
                  </S.UserDeleteBtn>
                </S.UserList>
              ))}
            </S.UserWrapper>
          </S.MidBox2>
          {/* <S.PaginationWrapper>
            <Pagination count={1} color="secondary" />
          </S.PaginationWrapper> */}
          <S.MidBox3>
            <S.StatusWrapper>
              <S.BoxImg src="/images/admin/Delivery.png" />
              <div>상품 상태 변경하기</div>
            </S.StatusWrapper>
            <S.Box3MenuWrapper>
              <div>주문일자</div>
              <div>이미지</div>
              <div>상품정보</div>
              <div>상품구매금액</div>
              <div>구매자</div>
              <div>주문처리상태</div>
            </S.Box3MenuWrapper>
            <S.Box3UseditemWrapper>
              {props.dataOrders?.fetchOrders.map((el) => (
                <div>
                  <div>{el.createdAt}</div>
                  <S.TempImg></S.TempImg>
                  {/* <div>{el.product.urls}</div> */}
                  <div>{el.product.price}</div>
                  {/* <div>{el.user.name}</div> */}
                  <S.SelectStatus>
                    <option value="">--선택하세요--</option>
                    <option value="PAYMENT">결재완료</option>
                    <option value="EXAMINATION">검수중</option>
                    <option value="ONTHEWAY">배송중</option>
                    <option value="DELIVERED">배송완료</option>
                    <option value="CANCEL">취소</option>
                  </S.SelectStatus>
                  <div>{el.status}</div>
                </div>
              ))}
            </S.Box3UseditemWrapper>
            {/* <S.PaginationWrapper>
              <Pagination count={1} color="secondary" />
            </S.PaginationWrapper> */}
          </S.MidBox3>
          <S.MidBox4>
            <S.UseditemTextWrapper>
              <S.Search src="/images/admin/Search.png" />
              <div>상품 조회하기</div>
            </S.UseditemTextWrapper>
            <S.UseditemSearchWrapper>
              <S.UseditemSearch type="text" placeholder="제목기준" />
            </S.UseditemSearchWrapper>
            <S.Box4MenuWrapper>
              <div>제목</div>
              <div>판매자</div>
              <div>이미지</div>
              <div>상품금액</div>
              <div>관리</div>
            </S.Box4MenuWrapper>
            <S.Box4UseditemListWrapper>
              {props.dataProducts?.fetchProducts.map((el) => (
                <div>
                  <div>{el.name}</div>
                  <div>{el.user.name}</div>
                  <S.TempImg></S.TempImg>
                  <div>{el.price}</div>
                  <S.UseditemDeleteBtn
                    onClick={props.onClickDeleteProduct}
                    id={el.id}
                  >
                    삭제하기
                  </S.UseditemDeleteBtn>
                </div>
              ))}
            </S.Box4UseditemListWrapper>
            {/* <S.PaginationWrapper>
              <Pagination count={1} color="secondary" />
            </S.PaginationWrapper> */}
          </S.MidBox4>
        </S.WrapperMid>
      </S.Wrapper>
    </S.Position>
  )
}
