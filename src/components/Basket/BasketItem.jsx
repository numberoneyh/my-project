import React from 'react'
import { useDeleteProductMutation } from '../../store/api/apiSlice'
import { Avatar, ListItem, Typography } from '@mui/material'
import { IconButton } from '@mui/material'
import { Delete } from '@mui/icons-material'

const BasketItem = ({ id, title, price, image }) => {
  const [deleteProduct] = useDeleteProductMutation()
  const deleteItem = async () => {
    await deleteProduct(id).unwrap()
  }
  return (
    <>
      <ListItem
        secondaryAction={
          <IconButton onClick={deleteItem} aria-label='delete' size='medium'>
            <Delete fontSize='inherit' />
          </IconButton>
        }>
        <Avatar alt='Remy Sharp' src={image} sx={{ width: 56, height: 56, mr: 2 }} />
        <Typography sx={{ maxWidth: { xs: '250px', sm: '320px', md: '400px' } }} component='span'>
          {title}
        </Typography>
        <Typography sx={{ ml: 'auto', whiteSpace: 'nowrap' }} component='span'>
          {price} $
        </Typography>
      </ListItem>
    </>
  )
}

export { BasketItem }
