import React from 'react'
import style from './Products.module.scss'
import { ProductItem } from './ProductItem'
import { CardLoader } from './CardLoader'
import { Box } from '@mui/material'

const Products = ({ data, isLoading }) => {
  if (isLoading) {
    return (
      <Box className={style.gridContent}>
        {[...new Array(6)].map((_, i) => (
          <CardLoader key={i} />
        ))}
      </Box>
    )
  }

  return (
    <Box className={style.gridContent}>
      {data?.map(items => (
        <ProductItem key={items.id} {...items} />
      ))}
    </Box>
  )
}

export { Products }
