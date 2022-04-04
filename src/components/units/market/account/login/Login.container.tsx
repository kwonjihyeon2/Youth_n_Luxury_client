import { useMutation } from '@apollo/client'
import { useRouter } from 'next/router'
import { useState, useContext } from 'react'
import { GlobalContext } from '../../../../../../pages/_app'
import LoginUI from './Login.presenter'
import { FETCH_USER, LOGIN } from './Login.queries'

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
      const result = await login({ variables: { ...loginInput } })
      // console.log(result.data.login)
      // setAccessToken(result.data.login)
      const accessToken = result.data?.login
      console.log(accessToken)

      setAccessToken(accessToken)
      console.log('로그인자체는됨')

      console.log('로그인성공')
      console.log(result)

      router.push('/')
      // router.push('/admin')
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
