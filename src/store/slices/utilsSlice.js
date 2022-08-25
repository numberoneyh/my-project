import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  search: '',
  disabled: false,
  drawerBottom: false,
  categoryValue: 'All',
  sortValue: '',
  orderValue: '',
  filterValue: [0, 999],
}

export const utilSlice = createSlice({
  name: 'utilSlice',
  initialState,
  reducers: {
    setSearch: (state, action) => {
      state.search = action.payload
    },
    setDisable: (state, action) => {
      state.disabled = action.payload
    },
    setDrawerBottom: (state, action) => {
      state.drawerBottom = action.payload
    },
    setCategoryValue: (state, action) => {
      state.categoryValue = action.payload
    },
    setSortValue: (state, action) => {
      state.sortValue = action.payload
    },
    setOrderValue: (state, action) => {
      state.orderValue = action.payload
    },
    setFilterValue: (state, action) => {
      state.filterValue = action.payload
      console.log(action.payload)
    },
  },
})

export const { setSearch, setDisable, setDrawerBottom, setCategoryValue, setSortValue, setOrderValue, setFilterValue } =
  utilSlice.actions

export default utilSlice.reducer
