import { ChangeEvent } from 'react'

export interface ILoginUIProps {
  onChangeLoginInput: (
    type: string
  ) => (event: ChangeEvent<HTMLInputElement>) => void
  onClickLoginBtn: () => Promise<void>
}
