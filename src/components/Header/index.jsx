import React from 'react'
import debounce from 'lodash.debounce'
import SearchIcon from '@mui/icons-material/Search'
import { useDispatch } from 'react-redux'
import { AppBar, Box, Toolbar, Typography } from '@mui/material'
import { NavBar } from './NavBar'
import { setSearch } from '../../store/slices/utilsSlice'
import { HeaderToolTipMenu } from './HeaderToolTipMenu'
import { MyModal } from '../UI/MyModal'
import { AddNewProduct } from '../AddNewProduct'
import { HeaderMenu } from './HeaderMenu'
import { Search } from './SearchBar'
import { SearchIconWrapper } from './SearchBar'
import { StyledInputBase } from './SearchBar'

const Header = () => {
  const dispatch = useDispatch()

  const [value, setValue] = React.useState('')

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const updateSearchValue = React.useCallback(
    debounce(str => {
      dispatch(setSearch(str))
    }, 700),
    []
  )

  const onChangeSearch = event => {
    setValue(event.target.value)
    updateSearchValue(event.target.value)
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static'>
        <Toolbar>
          <Box sx={{ display: { xs: 'block', md: 'block' } }}></Box>
          <HeaderMenu />
          <Typography variant='h6' noWrap component='div' sx={{ display: { xs: 'none', sm: 'block' } }}>
            N.Y.H
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              value={value}
              onChange={onChangeSearch}
              placeholder='Search…'
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <Box sx={{ display: { xs: 'none', md: 'flex' }, flexGrow: 1 }}>
            <NavBar />
          </Box>
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <HeaderToolTipMenu />
          </Box>
        </Toolbar>
      </AppBar>
      <MyModal>
        <AddNewProduct />
      </MyModal>
    </Box>
  )
}

export { Header }
