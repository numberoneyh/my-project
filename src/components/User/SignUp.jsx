import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { registerUser } from '../../store/slices/userSlice'
import { Form } from './Form'

const SignUp = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const handleRagister = (email, password) => {
    dispatch(registerUser({ email, password }))
    navigate('/login')
  }
  return <Form handleClick={handleRagister} title='register' />
}

export { SignUp }
