import { useEffect, useState } from 'react'
import { breakPoints } from '../../../commons/utils/media'
import DesktopItem from './ResposiveOnDesktopItem'
import TabletItem from './ResposiveOnTabletItem'
import * as S from './UseditemList.styles'

export default function UseditemListUI(props) {
  console.log(props.searchData?.fetchProductBySearch)
  return (
    <S.Position>
      <S.Wrapper>
        <DesktopItem
          onClickMain={props.onClickMain}
          onClickSub={props.onClickSub}
          onClickBrand={props.onClickBrand}
          main={props.main}
          sub={props.sub}
          brand={props.brand}
          isClickMain={props.isClickMain}
          isClickSub={props.isClickSub}
          onClickSearchBtn={props.onClickSearchBtn}
          onChangeSearchInput={props.onChangeSearchInput}
        />
        <TabletItem
          onClickMain={props.onClickMain}
          onClickSub={props.onClickSub}
          onClickBrand={props.onClickBrand}
          main={props.main}
          sub={props.sub}
          brand={props.brand}
        />
        {props.isSearched ? (
          <>
            <S.WrapperBottom>
              {props.searchData?.fetchProductBySearch ? (
                props.searchData?.fetchProductBySearch.map((el) => (
                  <S.WrapperUseditem
                    key={el.product_id}
                    id={el.product_id}
                    onClick={props.onClickProduct(el)}
                  >
                    <img
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                      }}
                      src={
                        'https://storage.googleapis.com/' +
                        el?.urls
                          .substring(1, el?.urls.length - 1)
                          .replace(/\"/gi, '')
                          .split('][')[0]
                      }
                    />
                    <S.UseditemName>{el.name}</S.UseditemName>
                    <S.UseditemPrice>{el.price}</S.UseditemPrice>
                  </S.WrapperUseditem>
                ))
              ) : (
                <></>
              )}
            </S.WrapperBottom>
          </>
        ) : (
          <S.WrapperBottom>
            {props.data?.fetchAllProduct.map((el) => (
              <S.WrapperUseditem
                key={el.product_id}
                id={el.product_id}
                onClick={props.onClickProduct(el)}
              >
                <img
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  src={
                    'https://storage.googleapis.com/' +
                    el?.urls
                      .substring(1, el?.urls.length - 1)
                      .replace(/\"/gi, '')
                      .split('][')[0]
                  }
                />
                <S.UseditemName>{el.name}</S.UseditemName>
                <S.UseditemPrice>{el.price}</S.UseditemPrice>
              </S.WrapperUseditem>
            ))}
          </S.WrapperBottom>
        )}
      </S.Wrapper>
    </S.Position>
  )
}
