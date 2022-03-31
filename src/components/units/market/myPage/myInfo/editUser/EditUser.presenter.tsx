import JoinWrite from '../../../account/join/email/write/JoinWrite.container'

export default function EditUserUI(props) {
  return (
    <JoinWrite
      isEdit={props.isEdit}
      data={props.data}
      updateUser={props.updateUser}
    />
  )
}
