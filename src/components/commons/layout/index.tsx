import LayoutSidebar from './sidebar'
import styled from '@emotion/styled'
import { ReactChild } from 'react'
import { useRouter } from 'next/router'

interface ILayoutProps {
  children: ReactChild
}

const LayoutBody = styled.div``

export default function Layout(props: ILayoutProps) {
  const router = useRouter()
  const HIDDEN_SIDEBAR = ['/market/new']
  const isHiddenSidebar = HIDDEN_SIDEBAR.includes(router.asPath)
  return (
    <>
      <LayoutBody>
        {/* {!isHiddenSidebar && <LayoutSidebar />} */}
        {props.children}
      </LayoutBody>
    </>
  )
}
