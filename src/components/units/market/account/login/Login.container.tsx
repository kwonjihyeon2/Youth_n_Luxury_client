import { useMutation } from '@apollo/client'
import { useRouter } from 'next/router'
import { useState, useContext, ChangeEvent } from 'react'
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

  const onChangeLoginInput =
    (type: string) => (event: ChangeEvent<HTMLInputElement>) => {
      setLoginInput({ ...loginInput, [type]: event.target.value })
    }
  const onClickLoginBtn = async () => {
    try {
      const result = await login({ variables: { ...loginInput } })
      const accessToken = result.data?.login
      console.log(accessToken)
      setAccessToken(accessToken)
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
