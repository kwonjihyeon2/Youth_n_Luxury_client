import { useState } from 'react'
import EditUserUI from './EditUser.presenter'

export default function EditUser() {
  const [isEdit, setIsEdit] = useState(true)

  return <EditUserUI isEdit={isEdit} />
}
