import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from '../../utils/index'

export const fetchTodos = createAsyncThunk('todos/fetchTodos', async (params, { rejectWithValue, dispatch }) => {
  const { limit, currentPage } = params
  try {
    const response = await axios.get('/todos', {
      params: {
        _page: currentPage,
        _limit: limit,
      },
    })
    const data = await response.data
    dispatch(setCount(Number(response.headers['x-total-count'])))
    return data
  } catch (error) {
    return rejectWithValue(error.message)
  }
})

export const deleteTodo = createAsyncThunk('todos/deleteTodo', async (id, { rejectWithValue, dispatch }) => {
  try {
    await axios.delete(`/todos/${id}`)
    dispatch(removeTodo(id))
  } catch (error) {
    return rejectWithValue(error.message)
  }
})

export const toggleStatus = createAsyncThunk(
  'todos/toggleStatus',
  async (id, { rejectWithValue, dispatch, getState }) => {
    const todo = getState().todos.todos.find(todo => todo.id === id)
    try {
      await axios.patch(`/todos/${id}`, {
        completed: !todo.completed,
      })
      dispatch(toggleTodoComplete(id))
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)

export const addNewTodo = createAsyncThunk(
  'todos/addNewTodo',
  async (text, { rejectWithValue, dispatch, getState }) => {
    try {
      const todo = {
        userId: 1,
        id: Date.now(),
        title: text,
        completed: false,
      }
      await axios.post(`/todos/`, {
        ...todo,
      })

      dispatch(addTodo(todo))
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)

export const todoSlice = createSlice({
  name: 'todoSlice',
  initialState: {
    todos: [],
    xTotalCount: null,
    status: null,
    statusLoadingForBtns: false,
    error: null,
  },
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload)
    },
    setCount: (state, action) => {
      state.xTotalCount = action.payload
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload)
    },
    toggleTodoComplete: (state, action) => {
      const findItem = state.todos.find(todo => todo.id === action.payload)
      findItem.completed = !findItem.completed
    },
  },
  extraReducers: {
    [fetchTodos.pending]: state => {
      state.status = 'loading'
      state.error = null
    },
    [fetchTodos.fulfilled]: (state, action) => {
      state.status = 'resolved'
      state.todos = action.payload
    },
    [fetchTodos.rejected]: (state, action) => {
      state.status = 'rejected'
      state.error = action.payload
    },
    [deleteTodo.pending]: (state, action) => {
      state.statusLoadingForBtns = true
      state.error = action.payload
    },
    [deleteTodo.fulfilled]: (state, action) => {
      state.statusLoadingForBtns = false
      state.error = action.payload
    },
    [deleteTodo.rejected]: (state, action) => {
      state.status = 'rejected'
      state.error = action.payload
    },
  },
})

const { addTodo, removeTodo, toggleTodoComplete, setCount } = todoSlice.actions

export default todoSlice.reducer
