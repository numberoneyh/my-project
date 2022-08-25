import React from 'react'
// import { useAuth } from '../../hooks/useAuth'
import { useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setCartOpen, setModal } from '../../store/slices/uiSlice'
import { setDrawerBottom } from '../../store/slices/utilsSlice'
import { useGetOrdersQuery } from '../../store/api/apiSlice'
import { Badge, Box, IconButton, Tooltip } from '@mui/material'
import { FilterAltOffOutlined, ShoppingCartOutlined, AddBoxOutlined } from '@mui/icons-material/'

const HeaderToolTipMenu = () => {
  const { pathname } = useLocation()
  const dispatch = useDispatch()

  const handleOpenModal = () => {
    dispatch(setModal(true))
  }

  const { data = [] } = useGetOrdersQuery()

  // const { isAuth } = useAuth()

  if (pathname === '/' || pathname === '/home') {
    return (
      <Box sx={{ display: { xs: 'flex', md: 'flex' } }}>
        <Tooltip title={'Filter menu'}>
          <IconButton onClick={() => dispatch(setDrawerBottom(true))} size='large' color='inherit'>
            <FilterAltOffOutlined />
          </IconButton>
        </Tooltip>
        <Tooltip title={'Add New Product'}>
          <IconButton onClick={handleOpenModal} size='large' color='inherit'>
            <AddBoxOutlined />
          </IconButton>
        </Tooltip>
        <Tooltip title={'Cart'}>
          <IconButton
            onClick={() => dispatch(setCartOpen(true))}
            size='large'
            aria-label='show 17 new notifications'
            color='inherit'>
            <Badge badgeContent={data.length} color='error'>
              <ShoppingCartOutlined />
            </Badge>
          </IconButton>
        </Tooltip>
      </Box>
    )
  }
}

export { HeaderToolTipMenu }
