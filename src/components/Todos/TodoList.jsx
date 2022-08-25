import React from 'react'
import { TodoItem } from './TodoItem'
import { List } from '@mui/material'
import { useSelector } from 'react-redux'

const TodoList = () => {
  const todos = useSelector(state => state.todos.todos)
  return (
    <List>
      {todos?.map(todo => (
        <TodoItem key={todo.id} {...todo} />
      ))}
    </List>
  )
}

export { TodoList }
