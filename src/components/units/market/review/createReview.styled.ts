import styled from '@emotion/styled'

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  font-size: 14px;
  ul {
    padding: 0;
  }
  li {
    list-style: none;
  }
`

export const WrapperContents = styled.div`
  width: 100%;
  max-width: 1200px;
  padding: 60px;
`
export const WrapperTitle = styled.p`
  margin: 0;
  margin: 50px 0;
  font-size: 2rem;
  text-align: center;
`

export const TableBox = styled.div`
  display: flex;
  border-bottom: 1px solid #ddd;
  align-items: center;
`

export const ReviewTable = styled.div`
  border-top: 1px solid #333;
  border-bottom: 1px solid #333;
`

export const TableInput = styled.input`
  border-radius: 5px;
  padding: 5px;
  border: 1px solid #ddd;
`

export const TableLeft = styled.div`
  padding: 15px;
  width: 10%;
  text-align: center;
  border-right: 1px solid #f8f8f8;
  background-color: #f8f8f8;
  color: #666;
  font-weight: 500;
`
export const TableRight = styled.div`
  padding: 10px;
  width: 90%;
  display: flex;
  align-items: center;
`

export const TableProfile = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  background-color: #ddd;
  margin-right: 10px;
`

export const ContentText = styled.textarea`
  width: 100%;
  margin-top: 10px;
  resize: none;
  height: 20vh;
  padding: 10px;
`
export const GetFiles = styled.div`
  padding: 10px 0;
`

export const ButtonSection = styled.div`
  padding: 15px 0;
  width: 100%;
  display: flex;
  justify-content: center;
  font-size: 1rem;
  button {
    padding: 8px 35px;
    margin: 0 5px;
  }
`

export const SubmitButton = styled.button`
  background-color: #333;
  color: white;
  border: 1px solid #333;
`
export const CancleButton = styled.button`
  background-color: #fff;
  color: #333;
  border: 1px solid #ddd;
`
