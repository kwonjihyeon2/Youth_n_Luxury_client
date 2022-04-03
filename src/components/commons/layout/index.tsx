import LayoutSidebar from './sidebar'
import styled from '@emotion/styled'
import { ReactChild } from 'react'
import { useRouter } from 'next/router'
import LayoutFooter from './footer'
import MyPageLayout from './mypage'
import Navigation from './navigation/Navigation.container'
interface ILayoutProps {
  children: ReactChild
}

const LayoutBody = styled.div``

export default function Layout(props: ILayoutProps) {
  const router = useRouter()
  const HIDDEN_SIDEBAR = ['/market/new']
  const VIEW_MYPAGE = '/mypage'
  const isViewMyPage = router.asPath.includes(VIEW_MYPAGE)
  console.log(isViewMyPage)
  console.log(router.asPath)
  const isHiddenSidebar = HIDDEN_SIDEBAR.includes(router.asPath)
  return (
    <>
      <LayoutBody>
        <Navigation />
        {!isHiddenSidebar && <LayoutSidebar />}
        {isViewMyPage ? (
          <MyPageLayout children={props.children}></MyPageLayout>
        ) : (
          <> {props.children}</>
        )}
      </LayoutBody>
      <LayoutFooter />
    </>
  )
}
