import styled from '@emotion/styled'

// text-overflow: ellipsis;
// flex-wrap: wrap;

export const Position = styled.div`
  display: flex;
  justify-content: center;
`

export const Wrapper = styled.div`
  width: 1200px;
  min-height: 2000px;
  height: auto;
`
export const WrapperTop = styled.div`
  align-items: center;
  display: flex;
  width: 100%;
  height: 70px;
  background-color: #333333;
  font-size: 24px;
`
export const HouseImg = styled.img`
  margin-left: 60px;
  width: 35px;
`

export const WrapperTopText = styled.div`
  margin-left: 5px;
  color: white;
`

export const AvatarImg = styled.img`
  width: 30px;
  margin-left: 730px;
`

export const WrapperTopName = styled.div`
  margin-left: 10px;
  color: white;
  font-size: 20px;
`

export const LogoutBtn = styled.button`
  font-size: 20px;
  margin-left: 15px;
  border: none;
  width: 90px;
  height: 30px;
  background-color: #333333;
  color: white;
  cursor: pointer;
  :hover {
    color: #7a36ff;
  }
`
export const WrapperMid = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const MidBox1Title = styled.div`
  display: flex;
  padding-right: 800px;
  padding-top: 100px;
  font-size: 20px;
`
export const FileImg = styled.img`
  padding-right: 10px;
`
export const MidBox1 = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  height: auto;
  margin-top: 20px;
`

export const Box1SearchWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
`

export const SearchBar = styled.input`
  width: 200px;
  height: 30px;
`

export const SearchBarBtn = styled.button`
  height: 30px;
  width: 50px;
  margin-left: 10px;
  cursor: pointer;
  background-color: #333333;
  color: white;
  border: none;
  :hover {
    color: #7a36ff;
  }
`
export const Box1MenuWrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: 20px;
  height: 50px;
  background-color: #333333;
  color: white;
  div {
    margin-left: 10px;
    margin-right: 100px;
  }
`

export const Box1QuestionWrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: 20px;
  height: 50px;
  border-bottom: 2px solid #333333;
  overflow: scroll;
  text-overflow: ellipsis;
  white-space: nowrap;
  div {
    margin-left: 10px;
    margin-right: 60px;
  }
  cursor: pointer;
`

export const QuestionCheck = styled.div`
  color: red;
  font-weight: bold;
`
export const PaginationWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 20px;
`
export const MidBox2 = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 80%;
  height: auto;
  min-height: 400px;
  border-radius: 20px;
  background-color: #333333;
`

export const UserTitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 80%;
  height: auto;

  align-items: center;
  font-size: 20px;
  margin-top: 70px;
  margin-bottom: 10px;
`
export const UserImg = styled.img`
  margin-right: 10px;
  width: 20px;
  height: 20px;
`

export const UserSearch = styled.input`
  width: 700px;
  height: 80px;
  border-radius: 10px;
  border: none;
  font-size: 22px;
  padding-left: 60px;
  background-image: url(/images/admin/Search.png);
  background-position: 20px 30px;
  background-repeat: no-repeat;
  margin-top: 20px;
`

export const UserWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
`

export const UserList = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 250px;
  background-color: white;
  margin: 20px 50px 20px 50px;
`

export const UserDeleteBtn = styled.button`
  width: 25px;
  height: 25px;
  border: none;
  background: #333333;
  color: white;
  border-radius: 30px;
  cursor: pointer;
  :hover {
    color: #7a36ff;
  }
  margin-top: 10px;
`

export const UserName = styled.div`
  margin-top: 10px;
`
export const UserEmail = styled.div``

export const UsersImg = styled.img`
  margin-top: 5px;
  width: 150px;
  height: 150px;
`

export const MidBox3 = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  height: auto;
  min-height: 400px;
  margin-top: 70px;
  padding-top: 70px;
`
export const StatusWrapper = styled.div`
  display: flex;
  font-size: 20px;
  margin-bottom: 10px;
`

export const BoxImg = styled.img`
  margin-right: 10px;
  width: 30px;
`

export const Box3MenuWrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: 18px;
  height: 50px;
  background-color: #333333;
  color: white;
  div {
    margin-left: 10px;
    margin-right: 80px;
  }
`

export const Box3UseditemWrapper = styled.div`
  background-color: white;
  display: flex;
  align-items: center;
  font-size: 18px;
  height: 120px;
  border-bottom: 2px solid #333333;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  div {
    margin-left: 10px;
    margin-right: 60px;
  }
`

export const TempImg = styled.div`
  width: 100px;
  height: 100px;
  background-color: red;
`

export const SelectStatus = styled.select``

export const MidBox4 = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  height: auto;
  margin-top: 70px;
  margin-bottom: 100px;
`
export const UseditemTextWrapper = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  font-size: 20px;
  margin-bottom: 20px;
`

export const UseditemSearchWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: #333333;
  width: 100%;
  height: 100px;
  font-size: 18px;
  color: white;
`
export const Search = styled.img`
  width: 20px;
  height: 20px;
  margin-left: 10px;
  margin-right: 10px;
`
export const UseditemSearch = styled.input`
  margin-left: 10px;
  display: flex;
  align-items: center;
  height: 40px;
  width: 700px;
  padding-left: 40px;
  border-radius: 10px;
  background-image: url(/images/admin/Search.png);
  background-position: 10px 10px;
  background-repeat: no-repeat;
`
export const Box4MenuWrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: 20px;
  height: 50px;
  background-color: #333333;
  color: white;
  div {
    margin-left: 20px;
    margin-right: 120px;
  }
`

export const Box4UseditemListWrapper = styled.div`
  background-color: white;
  display: flex;
  align-items: center;
  font-size: 20px;
  height: 120px;
  border-bottom: 2px solid #333333;
  div {
    margin-left: 10px;
    margin-right: 80px;
  }
`

export const UseditemDeleteBtn = styled.button`
  width: 100px;
  height: 50px;
  background-color: #cccccc;
  color: white;
  font-size: 16px;
  border: none;
  cursor: pointer;
  :hover {
    color: #7a36ff;
  }
`
