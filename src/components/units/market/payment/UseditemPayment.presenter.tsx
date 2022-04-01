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
  onChangeNum: (event: any) => void
  onClickOrder: () => void
  data: any
  fetchUser: any
  addressList: any
  AddrOne: any
  addressDetail: any
  onChangeAddr: any
  onClickSelect: any
  Addrs: any
  inputs: any
  isSame: any
  onClickSame: any
}

export default function UseditemPaymentpageUI(props: IpropsType) {
  const Num = props.fetchUser?.fetchUser.phoneNum.slice(0, 3)
  const Num2 = props.fetchUser?.fetchUser.phoneNum.slice(3, 7)
  const Num3 = props.fetchUser?.fetchUser.phoneNum.slice(7, 11)

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
                  <p>{props.data?.fetchProduct.name}</p>
                  <p style={{ marginTop: '5px' }}>
                    <S.ClickButton>수량</S.ClickButton> 1개 (
                    {props.data?.fetchProduct.price}원)
                  </p>
                </S.PriceInfo>
              </S.LeftcontentBox>
            </S.WrapperLeft>
            <S.CommonTitle>주문자</S.CommonTitle>
            <S.DeliveryTextInput
              type="text"
              name="user"
              value={props.fetchUser?.fetchUser.name}
              readOnly
            />
            <S.DeliveryText>
              <S.DeliveryTextSmallInput
                type="tel"
                name="phone1"
                readOnly
                value={Num}
              />
              -
              <S.DeliveryTextSmallInput type="tel" name="phone2" value={Num2} />
              -
              <S.DeliveryTextSmallInput type="tel" name="phone3" value={Num3} />
            </S.DeliveryText>
            <S.DeliveryTextInput
              type="email"
              value={props.fetchUser?.fetchUser.email}
            />
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
                    기본배송지
                  </S.ChangeSelect>
                  <div></div>
                </S.PostSelect>
                <S.DeliveryTextInput
                  type="text"
                  value={props.fetchUser?.fetchUser.name}
                />
                <S.CommonsButton onClick={props.onClickSame}>
                  주문자 정보와 동일
                </S.CommonsButton>
              </div>
              <S.DeliveryTextSmallInput
                type="tel"
                placeholder="07250"
                readOnly
                value={
                  props.isSame
                    ? props.AddrOne?.fetchUserAddr.zipCode
                    : props.zipCode
                }
              />
              {/* <S.CommonsButton onClick={props.onClickDaumModal}>
                우편번호 검색
              </S.CommonsButton> */}
              <S.DeliveryLongInput
                type="text"
                value={
                  props.isSame
                    ? props.AddrOne?.fetchUserAddr.address
                    : props.address
                }
                placeholder="기본 주소"
                readOnly
              />
              <S.DeliveryLongInput
                type="text"
                placeholder="나머지 주소"
                value={
                  props.isSame
                    ? props.AddrOne?.fetchUserAddr.addressDetail
                    : props.addressDetail
                }
              />
              <S.DeliveryText>
                <S.DeliveryTextSmallInput
                  id="input"
                  type="tel"
                  name="phone1"
                  onChange={props.onChangeNum}
                  defaultValue={props.isSame ? Num : '휴대폰'}
                />
                -
                <S.DeliveryTextSmallInput
                  id="secInput"
                  type="tel"
                  name="phone2"
                  onChange={props.onChangeNum}
                  defaultValue={props.isSame ? Num2 : ''}
                  // value={!props.isSame ? props.onChangeNum : Num2}
                />
                -
                <S.DeliveryTextSmallInput
                  type="tel"
                  name="phone3"
                  id="thirdInput"
                  onChange={props.onChangeNum}
                  defaultValue={props.isSame ? Num3 : ''}
                  // defaultValue={event.target.value}
                />
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
                <S.Leftli>{props.data?.fetchProduct.price}원</S.Leftli>
                <S.Leftli>(+)0원</S.Leftli>
                <S.Rightli>{props.data?.fetchProduct.price}원</S.Rightli>
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
            <S.PaymentResult onClick={props.onClickOrder}>
              결제하기
            </S.PaymentResult>
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
              {props?.addressList?.map((el) => (
                <S.submitAddress>
                  <div>
                    배송지 <button>기본배송지</button>
                  </div>

                  <S.DeliveryTextSmallInput
                    type="tel"
                    placeholder="07250"
                    value={el.zipCode}
                    readOnly
                  />
                  <S.CommonsButton onClick={props.onClickDaumModal}>
                    우편번호 검색
                  </S.CommonsButton>
                  <S.DeliveryLongInput
                    type="text"
                    value={el.address}
                    readOnly
                  />
                  <S.DeliveryLongInput
                    type="text"
                    readOnly
                    value={props.addressDetail}
                  />
                </S.submitAddress>
              ))}
            </S.ModalCenter>
            <S.WrapperContentBox style={{ padding: '0 10px' }}>
              <button>수정</button>
              <button>선택</button>
            </S.WrapperContentBox>
            <S.MoreAddress onClick={props.onClickSelect}>
              + 배송지 추가
            </S.MoreAddress>
          </S.ModalBox>
        </S.ModalAddress>
      </S.WrapperBox>
    </S.Wrapper>
  )
}
