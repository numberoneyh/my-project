import { useEffect, useState } from 'react'
import { useGetProductsQuery } from '../store/api/apiSlice'
import { useSelector } from 'react-redux'
import {
  selectCategoryValue,
  selectFilterValue,
  selectOrderValue,
  selectSearchValue,
  selectSortValue,
} from '../store/selectors'
import { FilterMenu } from '../components/Header/FilterMenu'
import { Paginate } from '../components/UI/Paginate'
import { Products } from '../components/Products'
import { getPageCount } from '../utils'
import { Basket } from '../components/Basket'
import { MySnackBar } from '../components/UI/MySnackBar'

const Home = () => {
  const value = useSelector(selectSearchValue)
  const category = useSelector(selectCategoryValue)
  const sort = useSelector(selectSortValue)
  const order = useSelector(selectOrderValue)
  const filterValue = useSelector(selectFilterValue)

  const [totalPages, setTotalPages] = useState(0)
  const [cardLimit] = useState(6)
  const [currentPage, setCurrentPage] = useState(1)

  const categoryValue = category === 'All' ? undefined : category
  const sortValue = sort === 'All' ? undefined : sort
  const orderValue = order === 'All' ? undefined : order

  const {
    data = [],
    isLoading,
    isFetching,
  } = useGetProductsQuery({
    limit: cardLimit,
    page: currentPage,
    search: value,
    category: categoryValue,
    sort: sortValue,
    order: orderValue,
    filterValue: filterValue,
  })

  useEffect(() => {
    if (data.totalCount) {
      setTotalPages(getPageCount(data.totalCount, cardLimit))
    }
  }, [data.totalCount, cardLimit])

  const pageHandler = num => {
    setCurrentPage(num)
  }

  return (
    <>
      <Products data={data.apiResponse} isLoading={isLoading} isFetching={isFetching} />
      <Paginate totalPages={totalPages} currentPage={currentPage} onChange={num => pageHandler(num)} />
      <FilterMenu />
      <Basket />
      <MySnackBar />
    </>
  )
}

export { Home }
