import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { logInUser } from '../../store/slices/userSlice'
import { Form } from './Form'

const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogin = (email, password) => {
    dispatch(logInUser({ email, password }))
    navigate('/home')
  }
  return <Form handleClick={handleLogin} title='sign in' />
}

export { Login }
