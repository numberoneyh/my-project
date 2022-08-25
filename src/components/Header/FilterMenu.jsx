import React from 'react'
import debounce from 'lodash.debounce'
import { useDispatch, useSelector } from 'react-redux'
import {
  selectCategoryValue,
  selectDrawerBottom,
  selectFilterValue,
  selectOrderValue,
  selectSortValue,
} from '../../store/selectors'
import {
  setCategoryValue,
  setDrawerBottom,
  setFilterValue,
  setOrderValue,
  setSortValue,
} from '../../store/slices/utilsSlice'
import { Box, Drawer, FormControl, InputLabel, MenuItem, Select, Slider, Stack, Typography } from '@mui/material'

const FilterMenu = () => {
  const dispatch = useDispatch()
  const openFilterVaule = useSelector(selectDrawerBottom)
  const category = useSelector(selectCategoryValue)
  const sort = useSelector(selectSortValue)
  const order = useSelector(selectOrderValue)
  const filterValue = useSelector(selectFilterValue)

  const handleChangeCategory = event => {
    dispatch(setCategoryValue(event.target.value))
  }

  const handleChangeSort = event => {
    dispatch(setSortValue(event.target.value))
  }

  const handleChangeOrder = event => {
    dispatch(setOrderValue(event.target.value))
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const updateSlide = React.useCallback(
    debounce((event, newValue) => {
      dispatch(setFilterValue(newValue))
    }, 700),
    []
  )

  return (
    <Drawer anchor='bottom' open={openFilterVaule} onClose={() => dispatch(setDrawerBottom(false))}>
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        justifyContent='center'
        alignItems='center'
        p='20px'
        spacing={{ xs: 1, sm: 2, md: 4 }}>
        <FormControl sx={{ width: '200px' }}>
          <InputLabel>Category</InputLabel>
          <Select value={category} label='Category' onChange={handleChangeCategory}>
            <MenuItem value={'All'}>All</MenuItem>
            <MenuItem value={'Clothes'}>Clothes</MenuItem>
            <MenuItem value={'Furniture'}>Furniture</MenuItem>
            <MenuItem value={'Shoes'}>Shoes</MenuItem>
            <MenuItem value={'Others'}>Others</MenuItem>
          </Select>
        </FormControl>
        <FormControl sx={{ width: '200px' }}>
          <InputLabel>Sort</InputLabel>
          <Select value={sort} label='Sort' onChange={handleChangeSort}>
            <MenuItem value={'All'}>All</MenuItem>
            <MenuItem value={'title'}>title</MenuItem>
            <MenuItem value={'price'}>price</MenuItem>
          </Select>
        </FormControl>
        <FormControl sx={{ width: '200px' }}>
          <InputLabel>Order</InputLabel>
          <Select value={order} label='Order' onChange={handleChangeOrder}>
            <MenuItem value={'All'}>All</MenuItem>
            <MenuItem value={'desc'}>desc</MenuItem>
            <MenuItem value={'asc'}>asc</MenuItem>
          </Select>
        </FormControl>
        <Box sx={{ width: '300px', p: '20px', textAlign: 'center' }}>
          <Typography variant='p'>Filter by Price</Typography>
          <Slider min={0} max={1000} value={filterValue} onChange={updateSlide} valueLabelDisplay='auto' disableSwap />
        </Box>
      </Stack>
    </Drawer>
  )
}

export { FilterMenu }
