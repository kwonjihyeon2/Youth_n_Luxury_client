import styled from '@emotion/styled'

const Position = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: #393939;
`
const Wrapper = styled.div`
  display: flex;
  height: 300px;
  width: 1200px;
  background-color: #393939;
  color: white;
`

const Box1 = styled.div`
  padding-left: 20px;
  padding-right: 20px;
  width: 70%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const LogoImg = styled.img`
  width: 20%;
  margin-bottom: 20px;
`

const FooterNavi = styled.div`
  padding-bottom: 20px;
`

const FooterText = styled.div``

const Box2 = styled.div`
  padding-left: 20px;
  padding-right: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  width: 30%;
  height: 100%;
`
const PhoneNumber = styled.div`
  font-size: 32px;
  padding-bottom: 5px;
  font-weight: 300;
`
const OpenText = styled.div`
  padding-top: 5px;
`

export default function LayoutFooter() {
  return (
    <Position>
      <Wrapper>
        <Box1>
          <LogoImg src="/images/LogoWhite.png" />
          <FooterNavi>
            COMPANY | AGREEMENT | PRIVACY POLICY | GUIDE | PARTNER
          </FooterNavi>
          <FooterText>
            Youth & Luxury 대표 누구 사업자등록번호: 000-00-00000
            사업자정보확인통신판매업: 제 2022-서울구로K-0000호 사업장소재지:
            서울시 구로구 패스트파이브13F 개인정보관리책임자: 누나 호스팅서비스:
            없어그런거(주) 통신판매 중개자로서 통신판매의 당사자가 아니므로 개별
            판매자가 등록한 상품정보에 대해서 책임을 지지 않습니다. 단,
            거래과정에서 검수하고 보증하는 내용에 대한 책임은 당사에 있습니다.
          </FooterText>
        </Box1>
        <Box2>
          <PhoneNumber>02-555-5050</PhoneNumber>
          <PhoneNumber>010-5555-5050</PhoneNumber>
          <OpenText>WEEKDAY : 10:30 ~ 19:00</OpenText>
          <OpenText style={{ fontWeight: '600' }}>
            WEEKEND: 사전 예약제
          </OpenText>
        </Box2>
      </Wrapper>
    </Position>
  )
}
