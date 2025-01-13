import { ChangeEvent, Dispatch, MouseEvent, SetStateAction } from 'react'

export interface IJoinWriteProps {
  isEdit: boolean
  data: IFetchUser
  updateUser: any
}

export interface ICreateUserInputData {
  email: string
  password: string
  nickname: string
  name: string
  phoneNum: string
  emailFirst: string
  emailSecond: string
  passwordCheck: string
  numberFirst: string
  numberSecond: string
  numberThird: string
}

export interface IJoinWriteUIProps {
  isSend: boolean
  createUserInput: ICreateUserInputData
  onChangeInput: (key: string) => (event: ChangeEvent<HTMLInputElement>) => void
  setCreateUserInput: Dispatch<SetStateAction<ICreateUserInputData>>
  selectBoxChange: (event: MouseEvent<HTMLSelectElement>) => void
  onClickJoinBtn: () => Promise<void>
  onClickAuthNumBtn: () => Promise<void>
  onChangeEmail: (
    order: string
  ) => (event: ChangeEvent<HTMLInputElement>) => void
  onChangeNumber: (
    order: string
  ) => (event: ChangeEvent<HTMLInputElement>) => void
  onChangeCheckNum: (event: ChangeEvent<HTMLInputElement>) => void
  onClickCheckNum: () => Promise<void>
  isNumCheck: boolean
  isPwdCheck: boolean
  isPwdVal: boolean
  isEdit: boolean
  onClickUpdateUser: () => Promise<void>
  timer: string
  data: IFetchUser
}

interface IFetchUser {
  fetchUser: IFetchUserData
}
interface IFetchUserData {
  email: string
  name: string
}

interface IUpdateUser {
  email: string
  password: string
  nickname: string
  name: string
  phoneNum: string
  emailFirst: string
  emailSecond: string
  passwordCheck: string
  numberFirst: string
  numberSecond: string
  numberThird: string
}
