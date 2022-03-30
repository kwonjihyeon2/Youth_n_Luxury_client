import { useMutation } from '@apollo/client'
import { useRouter } from 'next/router'
import { useState, useContext } from 'react'
import { GlobalContext } from '../../../../../../pages/_app'
import LoginUI from './Login.presenter'
import { LOGIN } from './Login.queries'

export default function Login() {
  const [loginInput, setLoginInput] = useState({
    email: '',
    password: '',
  })
  const { setAccessToken } = useContext(GlobalContext)
  const router = useRouter()
  const [login] = useMutation(LOGIN)

  const onChangeLoginInput = (type) => (event) => {
    setLoginInput({ ...loginInput, [type]: event.target.value })
  }
  const onClickLoginBtn = async () => {
    console.log('눌러는짐')
    try {
      const accessToken = await login({ variables: { ...loginInput } })
      console.log(accessToken.data.login)
      setAccessToken(accessToken.data.login)
      console.log('로그인성공')
      router.push('/')
    } catch (err) {
      console.log(err.message)
    }
  }

  return (
    <LoginUI
      onChangeLoginInput={onChangeLoginInput}
      onClickLoginBtn={onClickLoginBtn}
    />
  )
}
