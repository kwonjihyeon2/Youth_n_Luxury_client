import { useRouter } from 'next/router'
import { useState } from 'react'

export function useMoveToPage() {
  const router = useRouter()
  const [visitPage, setVisitPage] = useState('/')

  const moveToPage = (page) => () => {
    setVisitPage(page)
    router.push(page)
  }
  return { moveToPage, visitPage }
}
