import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isModal: false,
  isCartOpen: false,
  isSnackbar: false,
  notification: '',
  notificationValue: 'info',
  isMyMenu: false,
}

export const uiSlice = createSlice({
  name: 'uiSlice',
  initialState,

  reducers: {
    setModal: (state, action) => {
      state.isModal = action.payload
    },
    setSnackbar: (state, action) => {
      state.isSnackbar = action.payload
    },
    setNotification: (state, action) => {
      state.notification = action.payload
    },
    setNotificationValue: (state, action) => {
      state.notificationValue = action.payload
    },
    setIsMyMenu: (state, action) => {
      state.isMyMenu = action.payload
    },
    setCartOpen: (state, action) => {
      state.isCartOpen = action.payload
    },
  },
})

export const { setModal, setSnackbar, setNotification, setNotificationValue, setIsMyMenu, setCartOpen, setAnchorEl } =
  uiSlice.actions

export default uiSlice.reducer
