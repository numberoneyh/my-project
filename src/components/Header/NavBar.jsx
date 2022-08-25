import React from 'react'
import { Box, List } from '@mui/material'
import { CusTomLink } from '../UI/CusTomLink'

const NavBar = () => {
  return (
    <Box component='nav'>
      <List
        sx={{
          display: { xs: 'flex', gap: 10, justifyContent: 'center' },
          fontSize: { xs: 16, md: 16 },
        }}>
        <CusTomLink to='home'>Home</CusTomLink>
        <CusTomLink to='blog'>Blog</CusTomLink>
        <CusTomLink to='todos'>Todos</CusTomLink>
      </List>
    </Box>
  )
}
export { NavBar }
