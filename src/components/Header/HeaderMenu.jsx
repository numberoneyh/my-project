import React from 'react'
import MenuIcon from '@mui/icons-material/Menu'
import { useDispatch } from 'react-redux'
import { setCartOpen } from '../../store/slices/uiSlice'
import { setDrawerBottom } from '../../store/slices/utilsSlice'
import { setRemove } from '../../store/slices/userSlice'
import { Link as RouterLink, useLocation } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'
import { IconButton, List, ListItemButton, ListItemIcon, Menu, Badge, Divider } from '@mui/material'
import {
  Home,
  Wysiwyg,
  PlaylistAddCheck,
  FilterAltOff,
  ShoppingCartCheckout,
  NotificationsRounded,
  Login,
  Logout,
} from '@mui/icons-material/'

const HeaderMenu = () => {
  const { pathname } = useLocation()
  const dispatch = useDispatch()

  const [open, setOpen] = React.useState(false)
  const [anchorEl, setAnchorEl] = React.useState(null)
  const { isAuth } = useAuth()

  const handleOpenMenu = event => {
    setAnchorEl(event.currentTarget)
    setOpen(true)
  }

  const handleClose = () => {
    setAnchorEl(null)
    setOpen(false)
  }

  return (
    <>
      <IconButton onClick={handleOpenMenu} sx={{ mr: 2 }}>
        <MenuIcon />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        sx={{ left: { xs: '-3.3%', md: '-2%', lg: '-1.8%', xl: '-1.2%' }, top: '3%' }}>
        <List sx={{ width: { xs: 220, md: 300 } }} onClick={handleClose}>
          <ListItemButton component={RouterLink} to='/home'>
            <ListItemIcon>
              <Home color='info' />
            </ListItemIcon>
            Home
          </ListItemButton>
          <ListItemButton component={RouterLink} to='blog'>
            <ListItemIcon>
              <Wysiwyg color='info' />
            </ListItemIcon>
            Blog
          </ListItemButton>
          <ListItemButton component={RouterLink} to='todos'>
            <ListItemIcon>
              <PlaylistAddCheck color='info' />
            </ListItemIcon>
            Todos
          </ListItemButton>
          {pathname === '/' || pathname === '/home' ? (
            <div>
              <ListItemButton onClick={() => dispatch(setDrawerBottom(true))}>
                <ListItemIcon>
                  <FilterAltOff color='info' />
                </ListItemIcon>
                Filter
              </ListItemButton>
              <ListItemButton onClick={() => dispatch(setCartOpen(true))}>
                <ListItemIcon>
                  <ShoppingCartCheckout color='success' />
                </ListItemIcon>
                Cart
              </ListItemButton>
            </div>
          ) : (
            <></>
          )}
          <ListItemButton component={RouterLink} to='blog'>
            <ListItemIcon>
              <Badge badgeContent={1} color='warning'>
                <NotificationsRounded color='info' />
              </Badge>
            </ListItemIcon>
            Notification
          </ListItemButton>
          <Divider />
          {isAuth ? (
            <ListItemButton onClick={() => dispatch(setRemove())} color='inherit' sx={{ fontWeight: 600, mt: 2 }}>
              <ListItemIcon>
                <Logout />
              </ListItemIcon>
              Log out
            </ListItemButton>
          ) : (
            <ListItemButton disabled component={RouterLink} to='/login' color='inherit' sx={{ fontWeight: 600, mt: 2 }}>
              <ListItemIcon>
                <Login />
              </ListItemIcon>
              Log in will be soon
            </ListItemButton>
          )}
        </List>
      </Menu>
    </>
  )
}

export { HeaderMenu }
