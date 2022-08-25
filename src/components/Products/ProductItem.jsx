import React from 'react'
import { useDispatch } from 'react-redux'
import { Link as RouterLink } from 'react-router-dom'
import { useAddToCartProductMutation, useGetOrdersQuery } from '../../store/api/apiSlice'
import { setNotification, setNotificationValue, setSnackbar } from '../../store/slices/uiSlice'
import { LoadingButton } from '@mui/lab'
import { Button, Typography, Card, CardActions, CardContent, CardMedia } from '@mui/material'
import { Add, ReadMore } from '@mui/icons-material'

const ProductItem = ({ id, title, price, description, image }) => {
  const dispatch = useDispatch()
  const [disabled, setDisabled] = React.useState(false)
  const [addToCart, { isLoading }] = useAddToCartProductMutation()
  const { data } = useGetOrdersQuery()
  const findItem = data?.find(item => item.id === id)

  React.useEffect(() => {
    findItem ? setDisabled(true) : setDisabled(false)
  }, [findItem])

  const onClickAdd = async () => {
    try {
      await addToCart({ id, title, price, description, image }).unwrap()
      dispatch(setSnackbar(true))
      dispatch(setNotificationValue('success'))
      dispatch(setNotification('product successfully added to'))
    } catch (error) {
      dispatch(setSnackbar(true))
      dispatch(setNotification(` error status => ${error.status}`))
      dispatch(setNotificationValue('error'))
    }
  }

  return (
    <Card variant='elevation' sx={{ position: 'relative', height: 450 }}>
      <CardMedia component='img' height='200' image={image} alt='green iguana' />
      <CardContent>
        <Typography variant='h5' component='h2'>
          {title}
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          {description}
        </Typography>
        <Typography
          variant='h6'
          component='span'
          color={'seagreen'}
          sx={{ position: 'absolute', right: 18, bottom: 10 }}>
          {price} $
        </Typography>
      </CardContent>
      <CardActions sx={{ position: 'absolute', bottom: 0 }}>
        <LoadingButton
          startIcon={<Add />}
          loading={isLoading}
          disabled={disabled}
          onClick={onClickAdd}
          color={'primary'}
          variant='outlined'>
          Add
        </LoadingButton>
        <Button startIcon={<ReadMore />} color={'primary'} component={RouterLink} to={`/shop/${id}`} variant='outlined'>
          info
        </Button>
      </CardActions>
    </Card>
  )
}

export { ProductItem }
