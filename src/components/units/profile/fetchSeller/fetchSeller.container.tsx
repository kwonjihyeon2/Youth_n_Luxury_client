import * as S from './fetchSeller.styled'
import { Rating } from '@mui/material'
import { useState } from 'react'

export default function SellerInfo(props){

    const onClickClose = () => {
        props.setIsOpen((prev)=>!prev)
    }

    return(
        <S.Wrapper>
            <S.WrapperContents>
                <S.TestBox></S.TestBox>
                <S.ContentBox>
                    <h1>Seller Info</h1>
                    <S.WrapperContents style={{margin : "20px 0"}}>
                        <S.ProfileBox></S.ProfileBox>
                        <div>
                            <div>유저네임</div>
                            <Rating name="half-rating" defaultValue={5} readOnly/>
                        </div>
                    </S.WrapperContents>
                    <div>
                        <div>리뷰</div>

                        <div>판매상품</div>
                    </div>
                    <button onClick={onClickClose}>X</button>
                </S.ContentBox>
            </S.WrapperContents>
        </S.Wrapper>
    )
}