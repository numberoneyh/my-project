import React from 'react'
import { useSelector } from 'react-redux'
import { Button, FormControl, FormHelperText, Stack, TextField } from '@mui/material'

const Form = ({ title, handleClick }) => {
  const [email, setEmail] = React.useState('')
  const [pass, setPass] = React.useState('')
  const { error } = useSelector(state => state.user)

  const onSubmit = e => {
    e.preventDefault()
  }

  return (
    <Stack onSubmit={onSubmit} component='form' justifyContent='center' flexDirection='row' marginBottom='10px'>
      <FormControl sx={{ width: 340, display: 'flex', gap: 1 }}>
        <TextField value={email} onChange={e => setEmail(e.target.value)} type='email' placeholder='Email' />
        <TextField value={pass} onChange={e => setPass(e.target.value)} type='password' placeholder='Password' />
        {error && (
          <FormHelperText error={error ? true : false} sx={{ fontSize: '14px' }}>
            {error.errorCode}
          </FormHelperText>
        )}
        <Button onClick={() => handleClick(email, pass)} type='submit' variant='contained' sx={{ fontWeight: 600 }}>
          {title}
        </Button>
      </FormControl>
    </Stack>
  )
}

export { Form }
