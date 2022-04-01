import { useRouter } from 'next/router'
import { useState } from 'react'
import SideBarUI from './SideBar.presenter'

export default function SideBar(props) {
  const router = useRouter()
  const onClickSwitchPage = (name) => () => {
    console.log('실행은됨')

    router.push(name)
  }

  return (
    <SideBarUI onClickSwitchPage={onClickSwitchPage} asPath={router.asPath} />
  )
}
