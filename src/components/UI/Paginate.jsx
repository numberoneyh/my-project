import React from 'react'
import { Pagination, Stack } from '@mui/material'

const Paginate = ({ totalPages, onChange, currentPage }) => {
  return (
    <Stack justifyContent='center' direction='row' marginY={'30px'}>
      <Pagination
        size='large'
        count={totalPages}
        page={currentPage}
        onChange={(_, num) => onChange(num)}
        color='primary'
        variant='outlined'
        shape='rounded'
        defaultPage={6}
        siblingCount={0}
      />
    </Stack>
  )
}

export { Paginate }
