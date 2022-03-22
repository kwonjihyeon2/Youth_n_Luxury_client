import styled from '@emotion/styled'

export const Wrapper = styled.div`
    position : fixed;
    top : 50%;
    left : 50%;
    transform: translate(-50%,-50%);
    width : 800px;
    height : 400px;
    background-color : #fff;
    h1{
        margin : 0;
    }
`

export const WrapperContents = styled.div`
    display : flex;
    width : 100%;
`

export const TestBox = styled.div`
    width : 400px;
    height : 400px;
    background-color : #bdbdbd;
`

export const ContentBox = styled.div`
    padding : 10px;
`

export const ProfileBox = styled.div`
    width : 50px;
    height : 50px;
    border-radius : 100%;
    background-color : #bdbdbd;
    margin-right : 10px;
`