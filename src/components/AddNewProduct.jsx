import React from 'react'
import { useForm } from 'react-hook-form'
import { Button, TextField, Box } from '@mui/material'
import { useAddProductMutation } from '../store/api/apiSlice'
import { useDispatch } from 'react-redux'
import { setModal, setNotification, setNotificationValue } from '../store/slices/uiSlice'
import { setSnackbar } from '../store/slices/uiSlice'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  maxWidth: 400,
  minWidth: 320,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  textAlign: 'center',
}

const AddNewProduct = () => {
  const dispatch = useDispatch()
  const [addProduct] = useAddProductMutation()

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
  })
  const onSubmit = async data => {
    const product = {
      title: data.title,
      price: Number(data.price),
      image: data.image,
      description: data.description,
    }
    try {
      await addProduct(product).unwrap()
      reset()
      dispatch(setModal(false))
      dispatch(setSnackbar(true))
      dispatch(setNotificationValue('success'))
      dispatch(setNotification('new product successfully added'))
    } catch (error) {
      dispatch(setModal(false))
      dispatch(setSnackbar(true))
      dispatch(setNotification(` error status => ${error.status}`))
      dispatch(setNotificationValue('error'))
    }
  }

  return (
    <Box component='form' onSubmit={handleSubmit(onSubmit)} sx={style}>
      <TextField
        sx={{ my: 1 }}
        focused
        fullWidth
        label='product title'
        variant='outlined'
        {...register('title', {
          required: 'the fields must be filled in',
          minLength: { value: 8, message: 'min length 8 symboy' },
        })}
        error={errors.title ? true : false}
        helperText={errors.title && errors.title.message}
      />
      <TextField
        sx={{ my: 1 }}
        focused
        fullWidth
        label='product price'
        variant='outlined'
        {...register('price', {
          pattern: /\d+/,
          required: 'Please enter number for price',
          maxLength: { value: 3, message: 'max length 3 symboy' },
        })}
        error={errors.price ? true : false}
        helperText={errors.price && errors.price.message}
      />
      <TextField
        sx={{ my: 1 }}
        focused
        fullWidth
        label='product image URL'
        variant='outlined'
        {...register('image', { required: 'the fields must be filled in' })}
        error={errors.image ? true : false}
        helperText={errors.image && errors.image.message}
      />
      <TextField
        focused
        sx={{ my: 1 }}
        label='product description'
        fullWidth
        variant='outlined'
        {...register('description', { required: 'the fields must be filled in' })}
        error={errors.description ? true : false}
        helperText={errors.description && errors.description.message}
      />
      <Button type='submit' fullWidth sx={{ mt: 2 }} variant='contained'>
        Add
      </Button>
    </Box>
  )
}

export { AddNewProduct }
