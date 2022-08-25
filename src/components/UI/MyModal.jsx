import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectModalValue } from '../../store/selectors'
import { setModal } from '../../store/slices/uiSlice'
import { Modal } from '@mui/material'

const MyModal = ({ children }) => {
  const dispatch = useDispatch()
  const openModalValue = useSelector(selectModalValue)
  return (
    <Modal open={openModalValue} onClose={() => dispatch(setModal(false))}>
      <div>{children}</div>
    </Modal>
  )
}

export { MyModal }
