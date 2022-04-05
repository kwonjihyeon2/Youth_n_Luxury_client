import DaumPostcode from 'react-daum-postcode'
import { Modal } from 'antd'
import 'antd/dist/antd.css'
import * as S from './useditemPayment.styled'
import { IpropsType } from './useditemPayment.types'

export default function UseditemPaymentpageUI(props: IpropsType) {
  const Num = props.user?.fetchUser.phoneNum.slice(0, 3)
  const Num2 = props.user?.fetchUser.phoneNum.slice(3, 7)
  const Num3 = props.user?.fetchUser.phoneNum.slice(7, 11)

  return (
    <S.Wrapper>
      <S.WrapperBox>
        <S.WrapperTitle>주문서작성</S.WrapperTitle>

        <S.WrapperContentBox>
          <S.LeftContentBox>
            <S.CommonTitle>주문상품정보</S.CommonTitle>
            <S.WrapperLeft>
              <S.LeftText>
                <div>배송 : 택배(선불)무료</div>
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
              value={props.user?.fetchUser.name}
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
              <S.DeliveryTextSmallInput
                type="tel"
                name="phone2"
                readOnly
                value={Num2}
              />
              -
              <S.DeliveryTextSmallInput
                type="tel"
                name="phone3"
                readOnly
                value={Num3}
              />
            </S.DeliveryText>
            <S.DeliveryTextInput
              type="email"
              value={props.user?.fetchUser.email}
            />
            <S.CommonTitle>배송지</S.CommonTitle>

            <div style={{ width: '100%' }}>
              <div>
                <S.PostSelect>
                  <S.ChangeSelect
                    isOpenAdd={props.isOpenAdd}
                    onClick={props.onClickOpen}
                  >
                    배송지선택
                  </S.ChangeSelect>
                  <S.ChangeSelect
                    isOpenAdd={!props.isOpenAdd}
                    onClick={props.onClickOpen}
                  >
                    신규수정
                  </S.ChangeSelect>
                </S.PostSelect>
                <S.DeliveryTextInput
                  type="text"
                  value={props.user?.fetchUser.name}
                />
                <S.CommonsButton onClick={props.onClickBasic}>
                  주문자 정보와 동일
                </S.CommonsButton>
              </div>
              <S.DeliveryTextSmallInput
                type="tel"
                placeholder="07250"
                readOnly
                value={
                  props.basic
                    ? props.addrData?.fetchUserAddr.zipCode
                    : props.zonecode
                }
              />
              <S.DeliveryLongInput
                type="text"
                placeholder="기본 주소"
                readOnly
                defaultValue={
                  props.basic
                    ? props.addrData?.fetchUserAddr.address
                    : props.Address
                }
              />
              <S.DeliveryLongInput
                type="text"
                placeholder="나머지 주소"
                value={
                  props.basic
                    ? props.addrData?.fetchUserAddr.addressDetail
                    : props.AddressDetail
                }
                onChange={props.onChangeAddressDetail}
              />
              <S.DeliveryText>
                <S.DeliveryTextSmallInput
                  id="input"
                  type="tel"
                  name="phone1"
                  value={Num}
                  readOnly
                />
                -
                <S.DeliveryTextSmallInput
                  id="secInput"
                  type="tel"
                  name="phone2"
                  value={Num2}
                  readOnly
                />
                -
                <S.DeliveryTextSmallInput
                  type="tel"
                  name="phone3"
                  id="thirdInput"
                  value={Num3}
                  readOnly
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
          </S.LeftContentBox>
          {props.isModalVisible && (
            <Modal
              centered
              visible={true}
              onCancel={props.onTogglePostModal}
              onOk={props.onTogglePostModal}
            >
              <DaumPostcode onComplete={props.onCompleteAddress} />
            </Modal>
          )}

          <S.RightContentBox>
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
            <div>
              <ul>
                <li>
                  <input type="checkbox" style={{ marginRight: '5px' }} />
                  전체동의
                </li>
                <li>
                  <input type="checkbox" style={{ marginRight: '5px' }} />
                  개인정보 제3자 제공 동의 (필수)
                </li>
                <li>
                  <input type="checkbox" style={{ marginRight: '5px' }} />
                  개인정보 취급위탁에 대한 동의 (필수)
                </li>
              </ul>
            </div>
            <S.PaymentResult onClick={props.onClickOrder}>
              결제하기
            </S.PaymentResult>
          </S.RightContentBox>
        </S.WrapperContentBox>

        {/* 여기부터 모달 관련 */}
        <S.ModalAddress isOpenAdd={props.isOpenAdd}>
          <S.ModalBox>
            <S.WrapperContentBox style={{ padding: '10px' }}>
              <div>주문 / 결제</div>
              <button onClick={props.onClickOpen}> X </button>
            </S.WrapperContentBox>
            <S.ModalCenter>
              <S.AddressSelect>배송지 수정</S.AddressSelect>
              <S.submitAddress>
                <div>신규 배송지</div>
                <S.DeliveryTextSmallInput
                  type="tel"
                  placeholder="07250"
                  value={props.zonecode}
                  readOnly
                />
                <S.CommonsButton onClick={props.onTogglePostModal}>
                  우편번호 검색
                </S.CommonsButton>
                <S.DeliveryLongInput
                  type="text"
                  value={props.Address}
                  readOnly
                />
                <S.DeliveryLongInput
                  type="text"
                  onChange={props.onChangeAddressDetail}
                />
              </S.submitAddress>
              {props.listAddr?.fetchUserAddrs.length <= 2 &&
                props.listAddr?.fetchUserAddrs.map((el, index) => (
                  <S.submitAddress
                    key={el.userAddr_id}
                    // onClick={props.onClickFetch(el.id)}
                  >
                    <div>배송지 {index + 1}</div>
                    <S.DeliveryTextSmallInput
                      type="tel"
                      placeholder="07250"
                      value={el.zipCode}
                      readOnly
                    />
                    <S.DeliveryLongInput
                      type="text"
                      value={el.address}
                      readOnly
                    />
                    <S.DeliveryLongInput
                      type="text"
                      readOnly
                      value={el.addressDetail}
                    />
                  </S.submitAddress>
                ))}
            </S.ModalCenter>
            <S.WrapperContentBox style={{ padding: '0 10px' }}>
              <S.ListButton onClick={props.onClickEvent}>선택</S.ListButton>
              <S.SubmitButton onClick={props.onClickSubmit}>
                등록
              </S.SubmitButton>
            </S.WrapperContentBox>
            <S.MoreAddress>+ 배송지 추가</S.MoreAddress>
          </S.ModalBox>
        </S.ModalAddress>
      </S.WrapperBox>
    </S.Wrapper>
  )
}
