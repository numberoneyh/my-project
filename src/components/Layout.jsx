import React from 'react'
import { Outlet } from 'react-router-dom'
import { createTheme, ThemeProvider, CssBaseline, Box, Container } from '@mui/material'
import { Header } from './Header'

const Layout = () => {
  const theme = createTheme({
    palette: {
      mode: 'dark',
    },
  })
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container>
        <Header />
        <Box component='main'>
          <Outlet />
        </Box>
      </Container>
    </ThemeProvider>
  )
}

export { Layout }
