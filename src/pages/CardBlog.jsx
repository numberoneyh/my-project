import React from 'react'
import { useGetSingleProductQuery } from '../store/api/apiSlice'
import { useParams, useNavigate } from 'react-router-dom'
import { Button, Card, CardContent, CardMedia, Typography } from '@mui/material'
import { CardLoader } from '../components/Products/CardLoader'

const CardBlog = () => {
  const { id } = useParams()
  const { data = {}, isLoading } = useGetSingleProductQuery(id)
  const navigate = useNavigate()

  const goBack = () => navigate(-1)

  if (isLoading) {
    return <CardLoader />
  }

  return (
    <Card sx={{ maxWidth: 450 }}>
      <CardMedia component='img' height='240' image={data.image} alt='green iguana' />
      <CardContent>
        <Typography gutterBottom variant='h5' component='div'>
          {data.title}
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          {data.description}
        </Typography>
        <Typography variant='h5' component='span' sx={{ display: 'flex', mt: 5, justifyContent: 'space-between' }}>
          {data.price} $
          <Button onClick={goBack} sx={{ mr: 1 }} variant={'outlined'}>
            back
          </Button>
        </Typography>
      </CardContent>
    </Card>
  )
}

export { CardBlog }
