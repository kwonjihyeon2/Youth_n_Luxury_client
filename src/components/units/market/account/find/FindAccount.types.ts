import { Dispatch, SetStateAction } from 'react'

export interface IFindAccountUIProps {
  isSend: boolean
  setIsSend: Dispatch<SetStateAction<boolean>>
}
