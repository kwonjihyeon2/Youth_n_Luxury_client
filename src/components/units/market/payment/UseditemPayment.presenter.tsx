import * as S from './UseditemPayment.styled'

export default function UseditemPaymentpageUI(){

    return(
        <S.Wrapper>
            <S.WrapperBox>
                <S.WrapperTitle>주문서작성</S.WrapperTitle>
                <S.WrapperContentBox>
                    <S.TextBox>상품의 옵션 및 수량 변경은 상품상세 또는 장바구니에서 가능합니다.</S.TextBox>
                    <S.PayList>국내배송상품 주문내역</S.PayList>
                    <S.PaymentItem>
                        <div><input type="checkbox" /> </div>
                        <S.PaymentItemArgs>이미지</S.PaymentItemArgs>
                        <div style={{width : "50%"}}>상품정보</div>
                        <S.PaymentItemArgs>판매가</S.PaymentItemArgs>
                        <S.PaymentItemArgs>결제금액</S.PaymentItemArgs>
                    </S.PaymentItem>
                    <S.PaymentItem>
                        <div><input type="checkbox" /> </div>
                        <S.ItemBox></S.ItemBox>
                        <S.JustItemText >에르메스 멀티 플리스 카드홀더</S.JustItemText>
                        <S.PaymentItemArgs>740,000</S.PaymentItemArgs>
                        <S.PaymentItemArgs>740,000</S.PaymentItemArgs>
                    </S.PaymentItem>
                    <S.PayList>
                        <div>기본배송</div>
                        <div>상품구매금액 <S.PriceSpan>740,000</S.PriceSpan> + 배송비 0 (무료) = 합계 : <S.PriceSpan>740,000</S.PriceSpan></div>
                    </S.PayList>
                    <S.TextBox>상품의 옵션 및 수량 변경은 상품상세 또는 장바구니에서 가능합니다.</S.TextBox>
                    <S.ButtonText>
                        <div>선택상품을 <S.DeleteButton>삭제하기</S.DeleteButton></div>
                        <S.CommonsButton>이전페이지</S.CommonsButton>
                    </S.ButtonText>
                </S.WrapperContentBox>
                <S.WrapperDeliveryBox>
                    <S.DeliveryTitle>배송 정보</S.DeliveryTitle>
                    <S.DeliveryInfo>
                       <div>
                            <S.DeliveryList>배송지 선택</S.DeliveryList>
                            <S.DeliveryText>
                                <input type="radio" name="gender" checked /> 회원정보와 동일
                                <input type="radio" name="gender" /> 새로운 배송지
                                <S.CommonsButton>주소록 보기</S.CommonsButton>
                            </S.DeliveryText>
                        </div>    
                        <div>
                            <S.DeliveryList>받으시는 분</S.DeliveryList>
                            <S.DeliveryText>
                                <S.DeliveryTextInput type="text" placeholder="userName" readOnly/>
                            </S.DeliveryText>
                        </div>
                        <div>    
                            <S.DeliveryList>배송지</S.DeliveryList>
                            <S.PostText>
                                <div><S.DeliveryTextSmallInput type="tel" /><S.CommonsButton>우편번호</S.CommonsButton></div>
                                <div>
                                    <S.DeliveryTextInput  style={{ width : "350px"}} type="text" /> 기본주소
                                </div>
                                <div><S.DeliveryTextInput  style={{ width : "350px"}} type="text" /> 나머지주소</div>
                                
                            </S.PostText>
                        </div>
                        <div>
                            <S.DeliveryList>휴대전화</S.DeliveryList>
                            <S.DeliveryText>
                                <S.DeliveryTextselect>
                                    <option value="010" selected>010</option>
                                    <option value="011" selected>011</option>
                                    <option value="016" selected>016</option>
                                    <option value="017" selected>017</option>
                                </S.DeliveryTextselect>-
                                <S.DeliveryTextSmallInput type='tel' name='phone2' />-
                                <S.DeliveryTextSmallInput type='tel' name='phone3' />
                            </S.DeliveryText>
                        </div>
                            
                        <div>
                            <S.DeliveryList>이메일</S.DeliveryList>
                            <S.PostText>
                                <div><S.DeliveryTextInput type="text" /> @ <S.DeliveryTextInput type="text" /></div>
                                <div>이메일을 통해 주문처리과정을 보내드립니다.</div>
                                <div>이메일 주소란에는 반드시 수신가능한 이메일주소를 입력해 주세요.</div>
                            </S.PostText>
                        </div>
                        <div>
                            <S.DeliveryList>배송메세지</S.DeliveryList>
                            <S.DeliveryText>
                                <S.DeliveryTextselect style={{ width : "350px"}}>
                                    <option value="배송 메세지를 선택하세요" selected>배송 메세지를 선택하세요</option>
                                    <option value="문앞에 놔둬주세요">문앞에 놔둬주세요</option>
                                    <option value="택배함에 맡겨주세요">택배함에 맡겨주세요</option>
                                    <option value="배송 전 연락주세요">배송 전 연락주세요</option>
                                </S.DeliveryTextselect>
                            </S.DeliveryText>
                        </div>
                    </S.DeliveryInfo>
                </S.WrapperDeliveryBox>
                <S.WrapperDeliveryBox>
                    <S.DeliveryTitle>결제수단</S.DeliveryTitle>
                    <div>
                        
                    </div>
                </S.WrapperDeliveryBox>
            </S.WrapperBox>
        </S.Wrapper>
    )
}