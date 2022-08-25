import React from 'react'
import { useGetOrdersQuery } from '../../store/api/apiSlice'
import { useDispatch, useSelector } from 'react-redux'
import { selectIsCartOpen } from '../../store/selectors'
import { setCartOpen } from '../../store/slices/uiSlice'
import { BasketItem } from './BasketItem'
import { ShoppingCartOutlined } from '@mui/icons-material'
import { Divider, Drawer, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material'

const Basket = () => {
  const { data = [] } = useGetOrdersQuery()
  const totalPrice = data
    .map(item => item.price)
    .reduce((sum, price) => {
      return sum + price
    }, 0)

  const cartOpen = useSelector(selectIsCartOpen)
  const dispatch = useDispatch()

  return (
    <Drawer anchor='right' open={cartOpen} onClose={() => dispatch(setCartOpen(false))}>
      <List sx={{ width: { xs: '250px', sm: '320px', md: '400px' } }}>
        <ListItem
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
          }}>
          <ListItemIcon>
            <ShoppingCartOutlined />
          </ListItemIcon>
          <Typography
            component='div'
            sx={{
              display: 'flex',
              justifyContent: 'flex-end',
              gap: '9px',
            }}>
            <ListItemText primary='Total Price:' />
            <ListItemText primary={`${totalPrice} $`} />
          </Typography>
        </ListItem>
        <Divider />
        {data.map(item => (
          <BasketItem key={item.id} {...item} />
        ))}
      </List>
    </Drawer>
  )
}

export { Basket }
