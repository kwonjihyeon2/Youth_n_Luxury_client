import DaumPostcode from 'react-daum-postcode'
import { Modal } from 'antd'
import 'antd/dist/antd.css'

import * as S from './useditemPayment.styled'

interface IpropsType {
  isOpenAdd: boolean
  onClickAdd: () => void
  isModalAdd: boolean
  onClickDaumModal: () => void
  handleComplete: (data: any) => void
  zipCode: any
  address: any
}

export default function UseditemPaymentpageUI(props: IpropsType) {
  return (
    <S.Wrapper>
      <S.WrapperBox>
        <S.WrapperTitle>주문서작성</S.WrapperTitle>

        <S.WrapperContentBox>
          <div style={{ width: '600px' }}>
            <S.CommonTitle>주문상품정보</S.CommonTitle>
            <S.WrapperLeft>
              <S.LeftText>
                <div>배송 : 택배(선불)무료</div>
                <S.CommonsButton>배송 변경</S.CommonsButton>
              </S.LeftText>
              <S.LeftcontentBox>
                <img src="/detail/bag.png" />
                <S.PriceInfo>
                  <p>[데이터값]상품 정보</p>
                  <p style={{ marginTop: '5px' }}>
                    <S.ClickButton>수량</S.ClickButton> 1개 (670,000원)
                  </p>
                </S.PriceInfo>
              </S.LeftcontentBox>
            </S.WrapperLeft>
            <S.CommonTitle>주문자</S.CommonTitle>
            <S.DeliveryTextInput type="text" name="phone2" />
            <S.DeliveryText>
              <S.DeliveryTextSmallInput
                type="tel"
                name="phone2"
                defaultValue="휴대폰"
              />
              -
              <S.DeliveryTextSmallInput type="tel" name="phone2" />-
              <S.DeliveryTextSmallInput type="tel" name="phone3" />
            </S.DeliveryText>
            <S.DeliveryTextInput type="email" defaultValue="이메일" />
            <S.CommonTitle>배송지</S.CommonTitle>

            <div style={{ width: '100%' }}>
              <div>
                <S.PostSelect>
                  <S.ChangeSelect
                    onClick={props.onClickAdd}
                    isOpenAdd={props.isOpenAdd}
                  >
                    배송지선택
                  </S.ChangeSelect>
                  <S.ChangeSelect
                    onClick={props.onClickAdd}
                    isOpenAdd={!props.isOpenAdd}
                  >
                    신규수정
                  </S.ChangeSelect>
                  <div></div>
                </S.PostSelect>
                <S.DeliveryTextInput type="text" defaultValue="유저" />
                <S.CommonsButton>주문자 정보와 동일</S.CommonsButton>
              </div>
              <S.DeliveryTextSmallInput
                type="tel"
                value={props.zipCode}
                readOnly
              />
              <S.CommonsButton onClick={props.onClickDaumModal}>
                우편번호 검색
              </S.CommonsButton>
              <S.DeliveryLongInput type="text" value={props.address} readOnly />
              <S.DeliveryLongInput type="text" placeholder="나머지 주소" />
              <S.DeliveryText>
                <S.DeliveryTextSmallInput
                  type="tel"
                  name="phone2"
                  defaultValue="휴대폰"
                />
                -
                <S.DeliveryTextSmallInput type="tel" name="phone2" />-
                <S.DeliveryTextSmallInput type="tel" name="phone3" />
              </S.DeliveryText>
              <div>
                <div style={{ paddingBottom: '5px' }}>
                  <input type="checkbox" name="gender" defaultChecked />
                  배송주소록에 저장
                </div>
                <div style={{ paddingBottom: '5px' }}>
                  <input type="checkbox" name="gender" />
                  배송주소록에 기본배송지로 저장
                </div>
              </div>
              <S.DeliveryText>
                <S.DeliveryTextselect>
                  <option defaultValue="배송 메세지를 선택하세요">
                    배송 메세지를 선택하세요
                  </option>
                  <option value="문앞에 놔둬주세요">문앞에 놔둬주세요</option>
                  <option value="택배함에 맡겨주세요">
                    택배함에 맡겨주세요
                  </option>
                  <option value="배송 전 연락주세요">배송 전 연락주세요</option>
                </S.DeliveryTextselect>
              </S.DeliveryText>
            </div>
          </div>
          {props.isModalAdd && (
            <Modal
              centered
              visible={true}
              onCancel={props.onClickDaumModal}
              onOk={props.onClickDaumModal}
            >
              <DaumPostcode onComplete={props.handleComplete} />
            </Modal>
          )}

          <div style={{ width: '450px', marginLeft: '20px' }}>
            <S.CommonTitle>결제정보</S.CommonTitle>
            <S.PaymentItem>
              <ul>
                <S.Leftli>상품금액</S.Leftli>
                <S.Leftli>
                  배송비<S.ClickButton>내역</S.ClickButton>
                </S.Leftli>
                <S.LeftPrice>최종결제금액</S.LeftPrice>
              </ul>
              <S.RightUl>
                <S.Leftli>670,000원</S.Leftli>
                <S.Leftli>(+)0원</S.Leftli>
                <S.Rightli>670,000원</S.Rightli>
              </S.RightUl>
            </S.PaymentItem>
            <S.CommonTitle>결제수단</S.CommonTitle>
            <S.PayRoutebox>
              <div>
                <S.CommonsPayment>
                  <S.PaymentIcon></S.PaymentIcon>
                </S.CommonsPayment>
                <p>신용카드</p>
              </div>
              <div>
                <S.CommonsPayment>
                  <img src="/detail/escrow.png" />
                </S.CommonsPayment>
                <p>가상계좌</p>
              </div>
              <div>
                <S.CommonsPayment>
                  <img src="/detail/bank.png" />
                </S.CommonsPayment>
                <p>무통장입금</p>
              </div>
            </S.PayRoutebox>
            <div style={{ marginTop: '25px' }}>
              카드매출전표(또는 휴대폰결제전표)로 대체합니다.
            </div>
            <S.CommonTitle>약관동의</S.CommonTitle>
            <div>약관동의~</div>
            <S.PaymentResult>결제하기</S.PaymentResult>
          </div>
        </S.WrapperContentBox>
        <S.ModalAddress isOpenAdd={props.isOpenAdd}>
          <S.ModalBox>
            <S.WrapperContentBox style={{ padding: '10px' }}>
              <div>주문 / 결제</div>
              <button onClick={props.onClickAdd}> X </button>
            </S.WrapperContentBox>
            <S.ModalCenter>
              <S.AddressSelect>배송지 수정</S.AddressSelect>
              <S.submitAddress>
                배송지<button>기본배송지</button>
              </S.submitAddress>
            </S.ModalCenter>
            <S.WrapperContentBox style={{ padding: '0 10px' }}>
              <button>수정</button>
              <button>선택</button>
            </S.WrapperContentBox>
            <S.MoreAddress>+ 배송지 추가</S.MoreAddress>
          </S.ModalBox>
        </S.ModalAddress>
      </S.WrapperBox>
    </S.Wrapper>
  )
}
