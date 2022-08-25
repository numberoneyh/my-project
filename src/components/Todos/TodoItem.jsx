import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteTodo, toggleStatus } from '../../store/slices/todoSlice'
import { LoadingButton } from '@mui/lab'
import { Checkbox, ListItem, Typography } from '@mui/material'
import { Delete } from '@mui/icons-material'

const TodoItem = ({ id, completed, title }) => {
  const loading = useSelector(state => state.todos.statusLoadingForBtns)
  const [isLoading, setIsLoading] = React.useState(false)
  const dispatch = useDispatch()
  const onClickDelete = () => {
    setIsLoading(!loading)
    dispatch(deleteTodo(id))
  }
  return (
    <ListItem sx={{ backgroundColor: '#1a1a1a', mb: 1, borderRadius: 1 }}>
      <Checkbox color='success' value={completed} checked={completed} onChange={() => dispatch(toggleStatus(id))} />
      <Typography color={completed ? 'green' : 'mediumorchid'} component='p' variant='h6' sx={{ flexGrow: 1 }}>
        {title}
      </Typography>
      <LoadingButton onClick={onClickDelete} variant={'outlined'} loading={isLoading}>
        <Delete />
      </LoadingButton>
    </ListItem>
  )
}

export { TodoItem }
