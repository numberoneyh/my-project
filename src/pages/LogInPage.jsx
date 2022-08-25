import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { Login } from '../components/User/Login'
import { AddCircleRounded } from '@mui/icons-material'
import { Box, Button } from '@mui/material'

const LogInPage = () => {
  return (
    <>
      <Login />
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', width: 340, m: '0 auto' }}>
        <Button
          startIcon={<AddCircleRounded />}
          component={RouterLink}
          to='/register'
          variant='contained'
          color='info'
          sx={{ fontWeight: 700 }}>
          Create
        </Button>
      </Box>
    </>
  )
}

export { LogInPage }
