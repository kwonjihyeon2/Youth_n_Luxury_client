import styled from '@emotion/styled'

export const Position = styled.div`
  display: flex;
  justify-content: center;
`
export const Wrapper = styled.div`
  width: 1200px;
  min-height: 2200px;
  height: auto;
`

export const WrapperImages = styled.div`
  display: flex;
  width: 100%;
  height: 500px;
  margin-right: 20px;
  flex-direction: row;
`
export const WrapperImgTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20%;
  height: 100%;
  border: 1px solid black;
  border-radius: 20px;

  background-color: #fafafc;
`
export const WrapperInput = styled.div`
  display: flex;
  width: 90%;
  height: 100%;
  margin-left: 50px;
  border: 1px solid black;
  border-radius: 20px;
  background-color: #fafafc;
  flex-wrap: wrap;
`

export const TitleName = styled.div`
  font-size: 24px;
`

export const UploadImage = styled.img`
  margin-top: 50px;
  margin-left: 50px;
  width: 130px;
  height: 150px;
`

export const WrapperContents = styled.div`
  margin-top: 30px;
  margin-left: 400px;
`

export const ContentsImageBold = styled.div`
  font-weight: 650;
  color: #d40909;
  font-size: 18px;
`

export const ContentsImage = styled.div`
  color: #d40909;
  font-size: 18px;
`

export const WrapperTitle = styled.div`
  display: flex;
  width: 100%;
  height: 100px;
  margin-top: 50px;
`

export const TitleInput = styled.input`
  width: 800px;
  height: 50px;
  font-size: 20px;
  padding: 15px 0px 15px 10px;
`
export const WrapperTitleInput = styled.div`
  display: flex;
  width: 90%;
  height: 100%;
  margin-left: 50px;
  border: 1px solid black;
  border-radius: 20px;
  background-color: #fafafc;
  justify-content: center;
  align-items: center;
`

export const WrapperCategory = styled.div`
  height: 200px;
  display: flex;
  background-color: #fafafc;
  margin-top: 50px;
`

export const CategoryList = styled.div`
  display: flex;
  width: 90%;
  height: 100%;
  margin-left: 50px;
  border: 1px solid black;
  border-radius: 20px;
  background-color: #fafafc;
`
export const CategoryMain = styled.select`
  width: 300px;
  height: 50px;
  margin: 50px 50px 0px 50px;
  font-size: 20px;
  padding-left: 10px;
`
export const CategorySub = styled.select`
  width: 300px;
  height: 50px;
  margin-top: 50px;
  font-size: 20px;
  padding-left: 10px;
`

export const WrapperBrand = styled.div`
  margin-top: 50px;
  height: 100px;
  display: flex;
  flex-direction: row;
  align-items: center;
`
export const WrapperBrandList = styled.div`
  display: flex;
  width: 90%;
  height: 100%;
  margin-left: 50px;
  border: 1px solid black;
  border-radius: 20px;
  background-color: #fafafc;
`
export const BrandPosition = styled.div`
  display: flex;
  justify-content: center;
  aling-items: center;
  font-size: 20px;
  div {
    margin-top: 40px;
    margin-right: 20px;
    margin-left: 40px;
  }
`
export const BrandRadio = styled.input`
  margin-top: 40px;
`

export const WrapperPrice = styled.div`
  display: flex;
  height: 100px;
  align-items: center;
  margin-top: 50px;
  margin-bottom: 50px;
`

export const WrapperPriceInput = styled.div`
  display: flex;
  align-items: center;
  width: 90%;
  height: 100%;
  margin-left: 50px;
  border: 1px solid black;
  border-radius: 20px;
  background-color: #fafafc;
`

export const PriceInput = styled.input`
  width: 800px;
  font-size: 20px;
  padding: 15px 0px 15px 10px;
  margin-right: 10px;
  margin-left: 10px;
`

export const WrapperExplains = styled.div`
  /* display: flex;
  height: 300px;
  align-items: center;
  padding-bottom: 30px;
  border-bottom: 2px solid gray; */
  display: flex;
  width: 100%;
  height: 400px;
  flex-direction: row;
  align-items: center;
`
export const WrapperTextarea = styled.div`
  display: flex;
  align-items: center;
  width: 90%;
  height: 100%;
  margin-left: 50px;
  border: 1px solid black;
  border-radius: 20px;
  background-color: #fafafc;
`
export const ExplainsInput = styled.textarea`
  resize: none;
  width: 800px;
  height: 300px;
  font-size: 20px;
  padding: 15px 0px 15px 10px;
  margin-right: 10px;
  margin-left: 10px;
`

export const ExplainsCounts = styled.div`
  font-size: 20px;
`

export const WrapperButton = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: center;
`
export const SubmitBtn = styled.button`
  width: 250px;
  height: 100px;
  font-size: 30px;
  border: none;
  cursor: pointer;
  :hover {
    background-color: #393939;
    color: white;
  }
`
