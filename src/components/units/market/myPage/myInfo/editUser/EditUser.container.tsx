import { useQuery } from '@apollo/client'
import { useState } from 'react'
import EditUserUI from './EditUser.presenter'
import { FETCH_USER } from './EditUser.queries'

export default function EditUser(props) {
  const { data } = useQuery(FETCH_USER)

  return <EditUserUI isEdit={true} data={data} />
}
