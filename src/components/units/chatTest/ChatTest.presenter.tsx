import { Container, Form, Button } from 'react-bootstrap'
import React, { useRef } from 'react'
import { v4 as uuidV4 } from 'uuid'
export default function ChatTestUI({ onIdSubmit }) {
  const idRef = useRef()

  const handleSubmit = (e) => {
    e.preventDefault()

    onIdSubmit(idRef.current.value)
  }
  const createNewId = () => {
    onIdSubmit(uuidV4())
  }

  return (
    <Container
      className="align-items-center d-flex"
      style={{ height: '100vh' }}
    >
      <Form className="w-100">
        <Form.Group>
          <Form.Label>Enter Youre Id</Form.Label>
          <Form.Control type="text" ref={idRef} required></Form.Control>
        </Form.Group>
        <Button type="submit" className="mr-2">
          Login
        </Button>
        <Button onClick={createNewId} variant="secondary">
          Create A New Id
        </Button>
      </Form>
    </Container>
  )
}
