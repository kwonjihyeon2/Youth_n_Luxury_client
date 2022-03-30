import BuyTable from './table/BuyTable.container'
import * as S from './Transaction.styles'
import { DatePicker, Space } from 'antd'
import 'antd/dist/antd.css'

export default function TransactionUI() {
  const { RangePicker } = DatePicker

  const onChange = (dateString) => {
    console.log(dateString)
  }

  return (
    <>
      <S.Wrapper>
        <S.TransactionHeaderTxt>구매내역</S.TransactionHeaderTxt>
        <S.SelectTransactionBar>
          <S.SelectDetailBtn>{`구매내역(0)`}</S.SelectDetailBtn>
          <S.SelectDetailBtn>{`판매내역(0)`}</S.SelectDetailBtn>
        </S.SelectTransactionBar>
        <S.PeriodSettingBox>
          <S.PeriodBtnBox>
            <S.TodayPeriodBtn>오늘</S.TodayPeriodBtn>
            <S.PeriodBtn>1개월</S.PeriodBtn>
            <S.PeriodBtn>3개월</S.PeriodBtn>
            <S.PeriodBtn>6개월</S.PeriodBtn>
          </S.PeriodBtnBox>
          <Space direction="vertical" size={12}>
            <RangePicker onChange={onChange} />
          </Space>
          <S.PeriodCalenderBox>
            <S.PeriodFetchBtn>조회</S.PeriodFetchBtn>
          </S.PeriodCalenderBox>
        </S.PeriodSettingBox>

        <S.TxtBox>
          기본적으로 최근 3개월간의 자료가 조회되며, 기간 검색시 지난 주문내역을
          조회하실 수 있습니다.
        </S.TxtBox>
        <S.TxtBox>
          주문번호를 클릭하시면 해당 주문에 대한 상세내역을 확인하실 수
          있습니다.
        </S.TxtBox>
        <BuyTable />
      </S.Wrapper>
    </>
  )
}
