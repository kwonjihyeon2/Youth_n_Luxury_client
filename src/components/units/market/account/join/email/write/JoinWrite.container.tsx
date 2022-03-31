import { useState } from 'react'
import JoinWriteUI from './JoinWrite.presenter'
import { useMutation } from '@apollo/client'
import { CREATE_USER, TOKEN_MAKER, TOKEN_VALIDATE } from './JoinWrite.queries'
export default function JoinWrite(props) {
  const [checkNum, setCheckNum] = useState(0)
  const [createUserInput, setCreateUserInput] = useState({
    email: '',
    password: '',
    nickname: '',
    name: '',
    phoneNum: '',
    emailFirst: '',
    emailSecond: '',
    passwordCheck: '',
    numberFirst: '',
    numberSecond: '',
    numberThird: '',
  })

  const [tokenMaker] = useMutation(TOKEN_MAKER)
  const [tokenValidate] = useMutation(TOKEN_VALIDATE)
  const [isSend, setIsSend] = useState(false)
  const [isNumCheck, setIsNumCheck] = useState(false)
  const [createUser] = useMutation(CREATE_USER)
  const [isPwdCheck, setIsPwdCheck] = useState(false)
  const [isPwdVal, setIsPwdVal] = useState(false)
  const onChangeInput = (key) => (event) => {
    setCreateUserInput({ ...createUserInput, [key]: event.target.value })
    console.log(event.target.value)

    // 비밀번호 확인 체크
    if (key === 'passwordCheck') {
      if (event.target.value === createUserInput.password) {
        setIsPwdCheck(true)
      } else {
        if (isPwdCheck) setIsPwdCheck(false)
      }
    }

    // 비밀번호 형식체크
    if (key === 'password') {
      const passwordRules = /^(?=.*[a-zA-Z])((?=.*\d)|(?=.*\W)).{6,20}$/

      https: if (passwordRules.test(event.target.value)) {
        setIsPwdVal(true)
      } else {
        if (isPwdVal) setIsPwdVal(false)
      }
    }
    console.log(createUserInput.password)
    console.log(isNumCheck)
    console.log(isPwdCheck)

    console.log(isPwdVal)
  }
  const onChangeCheckNum = (event) => {
    setCheckNum(event.target.value)
  }
  const onClickCheckNum = async () => {
    const result = await tokenValidate({
      variables: { phoneNum: createUserInput.phoneNum, token: checkNum },
    })
    if (result) {
      setIsNumCheck(true)
    } else {
      console.log('인증번호 확인 실')
    }
  }
  const selectBoxChange = (event) => {
    setCreateUserInput({
      ...createUserInput,
      email: createUserInput.emailFirst + '@' + event.target.value,
      emailSecond: event.target.value,
    })
  }
  const onClickAuthNumBtn = async () => {
    console.log('실행은됨')
    console.log(createUserInput)
    try {
      console.log(createUserInput.phoneNum)

      const result = await tokenMaker({
        variables: {
          phoneNum:
            createUserInput.numberFirst +
            createUserInput.numberSecond +
            createUserInput.numberThird,
        },
      })

      console.log('토큰메이커 결과는')
      console.log(result)
      setIsSend(true)
    } catch (error) {
      console.log(error.message)
    }
  }
  const onChangeEmail = (order) => (event) => {
    if (order === 'emailFirst') {
      setCreateUserInput({
        ...createUserInput,
        email: event.target.value + '@' + createUserInput.emailSecond,
        emailFirst: event.target.value,
      })
    } else {
      setCreateUserInput({
        ...createUserInput,
        email: createUserInput.emailFirst + '@' + event.target.value,
        emailSecond: event.target.value,
      })
    }
  }

  const onChangeNumber = (order) => (event) => {
    const regex = /^[0-9\b -]{0,13}$/

    if (!regex.test(event.target.value)) {
      return
    }
    if (order === 'numberFirst') {
      setCreateUserInput({
        ...createUserInput,
        phoneNum:
          event.target.value +
          createUserInput.numberSecond +
          createUserInput.numberThird,
        numberFirst: event.target.value,
      })
    } else if (order === 'numberSecond') {
      setCreateUserInput({
        ...createUserInput,
        phoneNum:
          createUserInput.numberFirst +
          event.target.value +
          createUserInput.numberThird,
        numberSecond: event.target.value,
      })
    } else {
      setCreateUserInput({
        ...createUserInput,
        phoneNum:
          createUserInput.numberFirst +
          createUserInput.numberSecond +
          event.target.value,
        numberThird: event.target.value,
      })
    }
  }

  const onClickJoinBtn = async () => {
    if (createUserInput.password !== createUserInput.passwordCheck) {
      console.log('비밀번호 확인이 달라요!')
      return
    }
    console.log(isNumCheck)

    const {
      numberFirst,
      numberSecond,
      numberThird,
      passwordCheck,
      emailFirst,
      emailSecond,
      ...rest
    } = createUserInput
    console.log(rest)
    try {
      const result = await createUser({
        variables: rest,
      })
      console.log('회원가입 결과는')
      console.log(result)
    } catch (error) {
      console.log(error.message)
    }
  }

  return (
    <JoinWriteUI
      isSend={isSend}
      createUserInput={createUserInput}
      onChangeInput={onChangeInput}
      setCreateUserInput={setCreateUserInput}
      selectBoxChange={selectBoxChange}
      onClickJoinBtn={onClickJoinBtn}
      onClickAuthNumBtn={onClickAuthNumBtn}
      onChangeEmail={onChangeEmail}
      onChangeNumber={onChangeNumber}
      onChangeCheckNum={onChangeCheckNum}
      onClickCheckNum={onClickCheckNum}
      isNumCheck={isNumCheck}
      isPwdCheck={isPwdCheck}
      isPwdVal={isPwdVal}
      isEdit={props.isEdit}
    />
  )
}
