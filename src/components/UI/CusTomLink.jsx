import React from 'react'
import { Button } from '@mui/material'
import { useMatch } from 'react-router-dom'
import { Link as RouterLink } from 'react-router-dom'

const CusTomLink = ({ children, to, ...props }) => {
  const match = useMatch(to)
  return (
    <Button sx={{ fontWeight: '700' }} color={match ? 'primary' : 'inherit'} component={RouterLink} to={to} {...props}>
      {children}
    </Button>
  )
}

export { CusTomLink }
