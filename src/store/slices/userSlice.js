import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from '../../utils/index'

export const registerUser = createAsyncThunk('user/registerUser', async (regData, { rejectWithValue, dispatch }) => {
  const { email, password } = regData
  try {
    await axios
      .post('/register', {
        email: email,
        password: password,
      })
      .then(({ data }) => dispatch(setUser(data)))
  } catch (error) {
    return rejectWithValue(error.message)
  }
})

export const logInUser = createAsyncThunk('user/logInUser', async (logData, { rejectWithValue, dispatch }) => {
  const { email, password } = logData
  try {
    await axios
      .post('/login', {
        email: email,
        password: password,
      })
      .then(({ data }) => dispatch(setUser(data)))
  } catch (error) {
    return rejectWithValue(error.message)
  }
})

const initialState = {
  email: null,
  token: null,
  id: null,
  error: {},
}

const userSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.email = action.payload.user.email
      state.token = action.payload.accessToken
      state.id = action.payload.user.id
      console.log(action.payload)
      localStorage.setItem('token', action.payload.accessToken)
    },

    setRemove: state => {
      state.email = null
      state.token = null
      state.id = null
    },

    setError: (state, action) => {
      state.error = action.payload
    },
  },
})

export const { setUser, setRemove, setError } = userSlice.actions

export default userSlice.reducer
