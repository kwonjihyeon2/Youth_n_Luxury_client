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
              <div>제목</div>
              <div>질문내용</div>
              <div>유저명</div>
              <div>상태</div>
            </S.Box1MenuWrapper>
            <S.Box1QuestionWrapper>
              {props.dataQuerys?.fetchAdminQuerys.map((el, index) => (
                <S.Box1Data key={el.id}>
                  <div>{index + 1}</div>
                  <div>2022-04-01</div>
                  <div>{el.contents}</div>
                  <div>{el.userQuery.title}</div>
                  <div>{el.userQuery.user.name}</div>
                  <S.QuestionCheck>미답변</S.QuestionCheck>
                </S.Box1Data>
              ))}
            </S.Box1QuestionWrapper>
            {/* <S.PaginationWrapper>
              <Pagination count={1} color="secondary" />
            </S.PaginationWrapper> */}
          </S.MidBox1>
          <S.UserTitleWrapper>
            <S.UserImg src="/images/admin/UserIcon.png" />
            유저 검색하기
          </S.UserTitleWrapper>
          <S.MidBox2>
            <div>
              <S.UserSearch type="text" placeholder="이름을 입력하세요" />
            </div>
            <S.UserWrapper>
              {props.dataUsers?.fetchUsers.map((el) => (
                <S.UserList>
                  <S.UsersImg />
                  <S.UserName>{el.name || 'id'}</S.UserName>
                  <S.UserEmail>{el.email || 'email@email.com'}</S.UserEmail>
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
          <S.StatusWrapper>
            <S.BoxImg src="/images/admin/Delivery.png" />
            <div>상품 상태 변경하기</div>
          </S.StatusWrapper>
          <S.MidBox3>
            <S.Box3MenuWrapper>
              <div>주문일자</div>
              <div>이미지</div>
              <div>상품정보</div>
              <div>구매금액</div>
              <div>구매자</div>
              <div>주문처리상태</div>
            </S.Box3MenuWrapper>
            <S.Box3UseditemWrapper>
              {props.dataOrders?.fetchOrders.map((el) => (
                <S.Box3Data>
                  <div>{el.createdAt.slice(0, 10)}</div>
                  <S.TempImg></S.TempImg>
                  <div>{el.product.name || '상품정보'}</div>
                  <div>{el.product.price}</div>
                  <div>{el.product.user.name}</div>
                  <div>
                    <S.SelectStatus onChange={props.onChangeStatus}>
                      <option value="PAYMENT">결재완료</option>
                      <option value="EXAMINATION">검수중</option>
                      <option value="ONTHEWAY">배송중</option>
                      <option value="DELIVERED">배송완료</option>
                      <option value="CANCEL">취소</option>
                    </S.SelectStatus>
                    <button onClick={props.onClickStatus}>V</button>
                  </div>
                </S.Box3Data>
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
              {props.dataProducts?.fetchAllProduct.map((el) => (
                <S.Box4Data>
                  <div>{el.name}</div>
                  <div>{el.user?.name}</div>
                  <S.TempImg></S.TempImg>
                  <div>{el.price}</div>
                  <S.UseditemDeleteBtn
                    onClick={props.onClickDeleteProduct}
                    id={el.id}
                  >
                    삭제하기
                  </S.UseditemDeleteBtn>
                </S.Box4Data>
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
