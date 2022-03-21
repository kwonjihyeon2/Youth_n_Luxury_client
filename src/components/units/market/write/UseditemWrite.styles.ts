import styled from "@emotion/styled";

export const Position = styled.div`
  display: flex;
  justify-content: center;
`;
export const Wrapper = styled.div`
  width: 1200px;
  background-color: green;
  min-height: 2000px;
  height: auto;
`;

export const WrapperImages = styled.div`
  display: flex;
  flex-direction: column;
  margin: 100px 100px;
  background-color: yellow;
  padding-bottom: 30px;
  border-bottom: 2px solid gray;
`;
export const WrapperInput = styled.div`
  display: flex;
`;

export const TitleName = styled.div`
  margin-right: 70px;
  font-size: 20px;
`;

export const UploadImage = styled.div`
  width: 200px;
  height: 200px;
  background-color: red;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const WrapperContents = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 100px;
  margin-left: 140px;
`;

export const ContentsImageBold = styled.div`
  font-weight: 650;
  color: blue;
  font-size: 18px;
`;

export const ContentsImage = styled.div`
  color: blue;
  font-size: 18px;
`;

export const WrapperTitle = styled.div`
  display: flex;
  margin: 0px 100px;
  align-items: center;
  background-color: blue;
  padding-bottom: 30px;
  border-bottom: 2px solid gray;
`;

export const TitleInput = styled.input`
  width: 800px;
  font-size: 20px;
  padding: 15px 0px 15px 10px;
`;

export const WrapperCategory = styled.div`
  display: flex;
  margin: 100px 100px;
  align-items: center;
  background-color: purple;
  border-bottom: 2px solid gray;
`;

export const CategoryList = styled.ul`
  padding-top: 5px;
  background-color: red;
  display: flex;
  :hover {
    cursor: default;
  }
`;

export const CategoryMain = styled.div`
  margin-right: 30px;
  padding-right: 20px;
  border-right: 3px solid black;
`;
export const MainElement = styled.div`
  :hover {
    cursor: pointer;
  }
  padding-bottom: 15px;
`;
export const CategorySub = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 20px;
  border-right: 3px solid black;
`;
export const SubElement = styled.div`
  padding-bottom: 15px;
  :hover {
    cursor: pointer;
  }
`;

export const WrapperBrand = styled.div`
  display: flex;
  flex-direction: row;

  margin: 0px 100px;
  background-color: blue;
  padding-bottom: 30px;
  border-bottom: 2px solid gray;
  justify-content: space-between;
  align-items: center;
`;
export const BrandPosition = styled.div`
  display: flex;
  font-size: 18px;
`;
export const BrandName = styled.div``;

export const BrandCheckBox = styled.input``;

export const WrapperPrice = styled.div`
  display: flex;
  margin: 100px 100px;
  align-items: center;
  background-color: blue;
  padding-bottom: 30px;
  border-bottom: 2px solid gray;
`;
export const PriceInput = styled.input`
  width: 800px;
  font-size: 20px;
  padding: 15px 0px 15px 10px;
  margin-right: 10px;
`;

export const WrapperExplains = styled.div`
  display: flex;
  margin: 100px 100px;
  align-items: center;
  background-color: blue;
  padding-bottom: 30px;
  border-bottom: 2px solid gray;
`;

export const ExplainsInput = styled.textarea`
  resize: none;
  width: 800px;
  height: 300px;
  font-size: 20px;
  padding: 15px 0px 15px 10px;
  margin-right: 10px;
`;

export const ExplainsCounts = styled.div`
  font-size: 20px;
`;

export const WrapperButton = styled.div`
  display: flex;
  justify-content: center;
`;
export const SubmitBtn = styled.button`
  width: 170px;
  height: 70px;
  font-size: 20px;
  border: none;
`;
