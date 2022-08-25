import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { TodoList } from '../components/Todos/TodoList'
import { InputField } from '../components/Todos/InputField'
import { addNewTodo, fetchTodos } from '../store/slices/todoSlice'
import { getPageCount } from '../utils'
import { Box, LinearProgress, Pagination, Typography, Stack } from '@mui/material'

const Todos = () => {
  const dispatch = useDispatch()
  const { status, error, xTotalCount } = useSelector(state => state.todos)
  const [limit] = useState(10)
  const [totalPages, setTotalPages] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)
  const [title, setText] = useState('')

  const handleInput = str => {
    setText(str)
  }

  const addTask = () => {
    if (title.trim().length) {
      dispatch(addNewTodo(title))
    }
    setText('')
  }

  useEffect(() => {
    dispatch(fetchTodos({ limit, currentPage }))
  }, [currentPage, dispatch, limit])

  useEffect(() => {
    setTotalPages(getPageCount(xTotalCount, limit))
  }, [limit, xTotalCount])

  const pageHandler = (_, num) => {
    setCurrentPage(num)
  }

  if (status === 'loading') {
    return (
      <Stack>
        <Box>
          <LinearProgress placeholder='loading' color='primary' sx={{ height: '20px', mt: '100px' }} />
        </Box>
      </Stack>
    )
  } else if (error) {
    return (
      <Stack>
        <Box>
          <Typography component='h4' variant='h4' color='error'>
            {error} ! Please try again...
          </Typography>
        </Box>
      </Stack>
    )
  }

  return (
    <Stack gap={1}>
      <Box>
        <InputField title={title} handleInput={handleInput} addTask={addTask} />
      </Box>
      <Box>
        <TodoList />
      </Box>
      <Stack justifyContent='center' direction='row' marginY={'20px'}>
        <Pagination
          size='large'
          count={totalPages}
          page={currentPage}
          onChange={pageHandler}
          color='primary'
          variant='outlined'
          shape='rounded'
        />
      </Stack>
    </Stack>
  )
}

export { Todos }
