import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { apiSlice } from './api/apiSlice'
import todoSlice from './slices/todoSlice'
import uiSlice from './slices/uiSlice'
import userSlice from './slices/userSlice'
import utilSlice from './slices/utilsSlice'

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    ui: uiSlice,
    utils: utilSlice,
    todos: todoSlice,
    user: userSlice,
  },

  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(apiSlice.middleware),
})

setupListeners(store.dispatch)
