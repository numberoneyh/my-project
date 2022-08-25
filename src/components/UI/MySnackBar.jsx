import React from 'react'
import { Alert, Snackbar } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { setSnackbar } from '../../store/slices/uiSlice'
import { selectNotification, selectNotificationValue, selectSnackbar } from '../../store/selectors'

const MySnackBar = () => {
  const dispatch = useDispatch()
  const status = useSelector(selectSnackbar)
  const notification = useSelector(selectNotification)
  const alertValue = useSelector(selectNotificationValue)

  const handleClose = () => {
    dispatch(setSnackbar(false))
  }
  return (
    <>
      <Snackbar open={status} autoHideDuration={2000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={alertValue} sx={{ width: '100%' }}>
          {notification}
        </Alert>
      </Snackbar>
    </>
  )
}

export { MySnackBar }
