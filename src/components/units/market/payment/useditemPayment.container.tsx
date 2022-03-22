import * as S from './useditemPayment.styled'

export default function UseditemPaymentpage(){

    return(
        <S.Wrapper>
            
            <S.WrapperBox>
                <S.WrapperTitle>주문 / 결제</S.WrapperTitle>
                <S.WrapperContents>
                    <S.WrapperContentsBox>
                        <S.ContentsTitle>주문상품정보</S.ContentsTitle>
                        <S.ContentsBox>
                            <S.ContentsDeliveryTop style={{ backgroundColor : "#F4F4F4"}}>
                                <div>배송 : 택배(선불) 무료</div>
                                <button>배송 변경</button>
                            </S.ContentsDeliveryTop>
                            <S.WrapperContentslist>
                                <S.Graybox></S.Graybox>
                               <div>
                                    <p>루이비통 모노그램 맨하탄 PM 시티백 M40026</p>
                                    <p><span>수량</span> 1개 (670,000원)</p>
                               </div>
                               <S.ContentsDelivery>
                                    <ul>
                                        <S.ContentsList>상품금액</S.ContentsList>
                                        <S.ContentsList>할인금액</S.ContentsList>
                                        <S.ContentsList>할인적용금액</S.ContentsList>
                                    </ul>
                                    <ul>
                                        <S.ContentsList>670,000원</S.ContentsList>
                                        <S.ContentsList>-</S.ContentsList>
                                        <S.ContentsList>670,000원</S.ContentsList>
                                    </ul>
                                </S.ContentsDelivery>
                            </S.WrapperContentslist>
                           
                        </S.ContentsBox>
                    </S.WrapperContentsBox>
                    <S.WrapperContentsBox>
                        <S.ContentsTitle>결제정보</S.ContentsTitle>
                        <S.PayBox style={{display:"flex", padding : "30px;"}}>
                                <ul>
                                    <li>상품금액</li>
                                    <li>배송비</li>
                                    <li>할인금액</li>
                                    <li>최종결제금액</li>
                                </ul>
                                <ul style={{marginLeft : "30px"}}>
                                    <li>670,000원</li>
                                    <li>-</li>
                                    <li>-</li>
                                    <li>670,000원</li>
                                </ul>
                        </S.PayBox>
                    </S.WrapperContentsBox>
                </S.WrapperContents>
                <S.WrapperContents>
                    <div>
                        <S.ContentsTitle>주문자</S.ContentsTitle>
                        <div>
                            <input type="text" placeholder="유저네임"/>
                            <div>
                                <input type="tel" placeholder="휴대폰" maxLength={3}/>- <input  type="tel" maxLength={4}/>- <input type="tel" maxLength={4}/>
                            </div>
                            <div>
                            <input type="tel" placeholder="연락처2" maxLength={3}/>- <input  type="tel" maxLength={4}/>- <input type="tel" maxLength={4}/>(선택)
                            </div>
                            <input type="email" placeholder="이메일"/>
                        </div>
                        <S.ContentsTitle>배송지</S.ContentsTitle>
                        <div>

                        </div>
                    </div>
                </S.WrapperContents>
            </S.WrapperBox>
        </S.Wrapper>
    )
}