import { useMutation, useQuery } from '@apollo/client'
import { useState } from 'react'
import EditUserUI from './EditUser.presenter'
import { FETCH_USER, UPDATE_USER } from './EditUser.queries'

export default function EditUser(props) {
  const { data } = useQuery(FETCH_USER)
  const [updateUser] = useMutation(UPDATE_USER)
  return <EditUserUI isEdit={true} data={data} updateUser={updateUser} />
}
