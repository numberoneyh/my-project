import React from 'react'
import { Button, FormControl, TextField } from '@mui/material'

const InputField = ({ title, handleInput, addTask }) => {
  return (
    <FormControl sx={{ display: 'flex', gap: '10px' }}>
      <TextField
        value={title}
        onChange={e => handleInput(e.target.value)}
        variant='outlined'
        label='ad todo'
        focused
        color='primary'
        placeholder='Print name todo...'
      />
      <Button sx={{ fontWeight: '700' }} variant='contained' color='primary' onClick={() => addTask(title)}>
        Add Todo
      </Button>
    </FormControl>
  )
}

export { InputField }
